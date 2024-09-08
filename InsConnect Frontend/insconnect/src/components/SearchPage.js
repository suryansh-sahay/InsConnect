"use client"

import React, { useState, useEffect } from 'react';
import Search from './SearchBar';
import Post from './Post';
import { useRouter } from 'next/navigation';

const SearchPage = ({ posts }) => {
    const router = useRouter();
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  const handleSearch = (searchedInstitute) => {
    const filteredResults = posts.filter(post =>
      post.username.toLowerCase().includes(searchedInstitute.toLowerCase())
    );
    setFilteredPosts(filteredResults);
  };

  return (
    <div className="container mx-auto mt-8">
            <div>
                   <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={() => router.back()}>Return</button>
            </div>
        <div className="flex flex-row justify-center">
            <div>
      <Search onSearch={handleSearch} />
            </div>
        </div>
      {filteredPosts && filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
            <Post post={post} key={post._id} />
            ))
        ) : (
            <div className='text-white text-center space-y-30'>
            No Posts Found
            </div>
        )}
    </div>
  );
};

export default SearchPage;
