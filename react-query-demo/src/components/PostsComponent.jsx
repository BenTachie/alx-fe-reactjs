// This component uses useQuery to fetch posts from the JSONPlaceholder API, automatically handling loading states, caching, and re-fetching.

import React from 'react';
import { useQuery } from '@tanstack/react-query';

// Fetch function
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 60000, // Data stays "fresh" for 60 seconds
    cacheTime: 300000 // Cache persists for 5 minutes
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: 'red' }}>Error: {error.message}</p>;

  return (
    <div>
      <button
        onClick={() => refetch()}
        disabled={isFetching}
        style={{
          marginBottom: '1rem',
          padding: '8px 16px',
          cursor: 'pointer',
          backgroundColor: isFetching ? '#aaa' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        {isFetching ? 'Refreshing...' : 'Refetch Posts'}
      </button>

      {data.slice(0, 10).map((post) => (
        <div
          key={post.id}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '6px',
            textAlign: 'left'
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;
