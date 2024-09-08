"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const NewPost = () => {
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const response = await axios.post('http://localhost:4000/post/upload', {
          title: title,
          description: description,
          file: file
      })
      console.log("response", response)
      setTitle('');
      setDescription('');
      setFile(null);
      router.push('/Posts');
    };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
 <div className="max-w-md w-full space-y-8">
    <div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
        Create Post
      </h2>
    </div>
    <form method='POST' className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div className="mb-4">
          <label htmlFor="title" className="sr-only py-2">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            autoComplete="title"
            required
            className="bg-black text-white appearance-none rounded-none relative block w-full px-3 py-2 border border-white placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor="description" className="sr-only py-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            type="text"
            autoComplete="description"
            required
            className="bg-black text-white appearance-none rounded-none relative block w-full px-3 py-2 border border-white placeholder-gray-500 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white">
          Upload File
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-black rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500" > <span>Upload a file</span> <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={(e) => setFile(e.target.files[0])} /> </label> <p className="pl-1 text-white">or drag and drop</p> </div> <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p> </div> </div> </div>
                  <div>
                    <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    Create Post
                    </button>
                </div>
                </form>
                </div>
                </div>
  );
};

export default NewPost;
