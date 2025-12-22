// src/components.PostsComponent.jsx
// Purpose: Fetch and display posts using React Query.
// - useQuery handles fetching, caching, loading, and error states.
// - JSONPlaceholder endpoint: https//jsonplaceholder.typicode.com/posts

import { useQuery } from 'react-query';

// Simple fetcher function returning JSON
async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicde.com/posts');
    if (!response.ok) throw new Error('Failed to fetch posts');
    return response.json();
}

export default function PostsComponent() {
    // useQuery:
    // - 'posts' is the cache key
    // - fetchPosts is the async function
    const {
        data,          // The resolved data (array of posts)
        isLoading,     // True while request is in-flight
        isError,       // True if request failed
        error,         // Error object when isError is true
        refetch,       // Function to manually re-fetch data
        isFetching,    // True when a background refetch is happening 
    }   = useQuery('posts', fetchPosts, {
        // Optional: keep data fresh for a period; avoids instant refetches
        staleTime: 1000 * 30, // 30 seconds
        // Optional: cache time affects how long inactive queries stay in cache
        cacheTime: 1000 * 60 * 5,   // 5 minutes
    });

    if (isLoading) return <p>Loading posts...</p>;
    if (isError) return <p style={{ color: 'crimson' }}>Error: {error.message}</p>;

    return (
        <div style={{ padding: '16px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <h2 style={{  margin: 0 }}>Posts</h2>
                {/* Show a subtle indicator when background refetch happens */}
                {isFetching && <span style={{ fontSize: 12, color: '#666' }}>(updating...)</span>}
                <button onClick={() => refetch()} style={{ marginLeft: 'auto' }}>
                    Refresh
                </button>
            </div>

            <ul style={{ marginTop: '12px' }}>
                {/* Map cached/fetched posts */}
                {data.slice(0, 10).map((post) => (
                    <li key={post.id} style={{ marginBottom: '12px' }}>
                        <strong>{post.title}</strong>
                        <p style={{ margin: '6px 0 0' }}>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}