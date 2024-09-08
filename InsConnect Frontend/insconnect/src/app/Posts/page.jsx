"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchPosts } from '@/utils/api';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import CustomPopup from '@/components/customPop';
import { FaSearch } from "react-icons/fa";
import { FaRegSquarePlus } from "react-icons/fa6";


const Posts = () => {
  const router = useRouter();

  const [showPopup, setShowPopup] = useState(false);

  const [posts, setPosts] = useState([
    {
      username: '60c8ce847857f52250e4f2e1',
      caption: 'This is a sample post caption.',
      image: {
        public_id: 'sample_public_id',
        url: 'https://example.com/sample_image.jpg',
      },
      createdAt: new Date(),
      likes: 0,
      dislikes: 0,
      comments: ['Comment 1', 'Comment 2'],
    }, {
      username: 'abcd',
      caption: 'This is a sample post caption 2.',
      image: {
        public_id: 'sample_public_id',
        url: 'https://example.com/sample_image.jpg',
      },
      createdAt: new Date(),
      likes: 0,
      dislikes: 0,
      comments: ['Comment 1 of second post', 'Comment 2 of second post'],
    }
  ]);



  const getPosts = async () => {
    const fetchedPosts = await fetchPosts();
    setPosts(fetchedPosts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleLike = async (postId) => {
    const response = await axios.get(`http://localhost:4000/post/${postId}/like`)
    if(response.ok){
      getPosts();
    }
    else{
      alert('error liking post');
    }
  };

  const handleDislike = async (postId) => {
    const response = await axios.get(`http://localhost:4000/post/${postId}/dislike`);

    if (response.ok) {
      getPosts();
    } else {
      alert('Error disliking post');
    }
  };

  const handleLogOut = () => {
    setShowPopup(true);   
  }

  const handleCancel = () => {
    setShowPopup(false);
  }

  const handleConfirmLogout = async () => {
    setShowPopup(false);
   try{
    const response = await axios.get('http://localhost:4000/logout');
   }
   catch(err){
    console.log(err);
   }

    router.push('/');
  }

  return (
    <>
  <div>
    <div>
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-black text-white">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="UniConnect Logo" className="h-16" />
        <h1 className="text-3xl font-bold">UniConnect</h1>
      </div>
      <div className="flex items-center space-x-8">
        <Link className="hover:text-indigo-700  md:my-0 my-12 font-semibold text-lg " href="/Search">
        <FaSearch fontSize={24}/>
        </Link>
        <Link className="hover:text-indigo-700 md:mr-12 md:my-0 my-12 font-semibold text-lg " href="/NewPost">
        <FaRegSquarePlus fontSize={30}/>
        </Link>

        <button onClick={handleLogOut} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Logout</button>
          <CustomPopup isOpen={showPopup} onClose={handleCancel} onConfirm={handleConfirmLogout}/>
      </div>
    </nav>
    </div>
    <div className="w-full px-10 min-h-screen">
      <div className="bg-black text-white space-x-10">
       <div className="text-3xl font-bold mb-4 px-10 py-5 flex flex-row justify-between items-center">
        <div className="text-white">
          Posts
        </div>
       </div>
        {posts.map((post, index) => (
           <div key={post._id} className="border-b border-white py-10">
             <h3 className="text-xl font-semibold mb-2">{post.username}</h3>
              <p className="text-base mb-4">{post.caption}</p>
               <div className="flex items-center space-x-10"> 
               <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleLike(post._id)} > Like </button>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDislike(post._id)} > Dislike </button>
                 </div>
                  <div className="mt-4">
                   <div className="flex justify-start">
                     <Link href={`/Posts/${post._id}`}>
                     <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"> Comment </button>
                      </Link>
                      </div>
                       </div>
                        </div>
                         ))}
                          </div>
        </div>

  </div>
    </>
  );
};

export default Posts;