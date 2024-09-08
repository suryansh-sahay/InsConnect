"use client"
import SearchPage from '@/components/SearchPage'
import React from 'react'
import { fetchPosts } from '@/utils/api'
import { useState, useEffect } from 'react'

const Search= () => {
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

useEffect(() => {
    const fetchedData = async () => {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
    }
    fetchedData();
}, [])

    
  return (
    <div>
      <SearchPage posts={posts}/>
    </div>
  )
}

export default Search


