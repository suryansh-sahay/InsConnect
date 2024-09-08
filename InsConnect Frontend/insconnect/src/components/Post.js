
"use client"
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';

const Post = ({post}) => {

  const {postId} = useSearchParams();

  const [newComment, setNewComment] = useState('');

  const handleComment = async (postId) => {
    if (newComment.trim() === '') {
      return;
    }

    const response = await axios.post(`http://localhost:4000/post/${postId}/comment`, {
       comment: newComment
   });
    

    if (response.ok) {
      getPosts();
      setNewComment('');
    } else {
      alert('Error commenting on post');
    }
  };

  const handleLike = async (postId) => {
    const response = await axios.get(`http://localhost:4000/post/${postId}/like`);

    if (response.ok) {
      getPosts();
    } else {
      alert('Error liking post');
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


  return (
    <><div key={post._id} className="border-b border-white py-10">
          <h3 className="text-xl font-semibold mb-2">{post.username}</h3>
          <p className="text-base mb-4">{post.caption}</p>
          <div className="flex items-center space-x-10">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleLike(post._id)}> Like </button>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDislike(post._id)}> Dislike </button>
          </div>
         
          <div className="mt-4">
              {post.comments.map((comment, index) => (
                  <div key={index} className="mb-2 p-2 rounded-lg text-white bg-gray-800 w-auto">
                      {comment}
                  </div>
              ))}
              <div className="flex mt-2 text-black">
                  <div className="flex mt-2 text-black space-x-10">
                      <input
                          type="text"
                          placeholder="Add a comment..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          className=" w-full border border-gray-300 rounded px-3 py-2 text-white bg-gray-800" />
                      <button
                          onClick={() => handleComment(post._id)}
                          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                      >
                          Post
                      </button>
                  </div>
              </div>
          </div>
      </div>
          </>
   
  );
};

export default Post;