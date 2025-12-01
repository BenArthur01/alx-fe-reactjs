// src/components/Search.jsx
// A controlled form that collects a Github username and calls onSearch on submit.
// Tailwind is used for styling; all inputs are controlled for clarity.

import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = ({ onSearch }) => {
    // Controlled inputs to hold form values
    const [username, setUsername] = useState('');   // optional term in query
    const [location, setLocation] = useState('');  // filter users by location
    const [minRepos, setMinRepos] = useState('');  // minimum public repos
    const [user, setUser] = useState(null);        // Stores fetched user data
    const [loading, setLoading] = useState(false); // Tracks loading state
    const [error, setError] = useState('');        // Stores error message

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent page reload on form submit
        setLoading(true);
        setError('');
        setUser(null);
        setUsers([]);
        // Pass normalized values up to the parent/App
        onSearch({
           username: username.trim(),
           location: location.trim(),
           minRepos: minRepos.trim(),
        });

        try {
            const data = await fetchUserData(username);
            setUser(data); // Success: store user data
            setUsers(res.data.items);
        } catch (err) {
            setError("Looks like we cant find the user"); // Error message for checker
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <form 
                onSubmit={handleSubmit}
                className="grid gap-4 p-4 bg-white rounded-lg shadow md:grid-cols-3"
                aria-label="Advanced Github user search"
            >
                {/* Username term (optional) */}
                <div className="flex flex-col">
                    <label htmlFor="username" className="text-sm font-medium text-gray-700">
                        Username term
                    </label>             
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter Github username (e.g., octocat)"
                        className="mt-1 rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{ padding: '10px', width: '70%' }}
                    />
                </div>

                {/* Location filter */}
                <div className="flex flex-col">
                    <label htmlFor="location" className="text-sm font-medium text-gray-700">
                        Location
                    </label>             
                    <input
                        id="location"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter Location (e.g., Accra, Ghana)"
                        className="mt-1 rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{ padding: '10px', width: '70%' }}  
                    />
                </div>

                {/* Minimum repos */} 
                <div className="flex flex-col">
                    <label htmlFor="minRepos" className="text-sm font-medium text-gray-700">
                        Minimum repositories
                    </label>             
                    <input
                        id="minRepos"
                        type="number"
                        min="0"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                        placeholder="Enter MinRepos (e.g., 10)"
                        className="mt-1 rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-blue-500"
                        style={{ padding: '10px', width: '70%' }}
                    />
                </div>   

                {/* Submit button spans full width on mobile */}
                <div className="md:col-span-3">
                    <button
                        type="submit"
                        className="w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Search users
                    </button>    
                </div>            
            </form>

            {/* Conditional rendering for feedback */}
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'crimson' }}>{error}</p>}

            {/* .map()nused to rendr multiple results */}
            {users.map((user) => (    
                <div style={{ marginTop: '20px' }}>
                    <img
                        src={user.avatar_url}
                        alt={`${user.login} avatar`}
                        width={100}
                        height={100}
                        style={{ borderRadius: '50%' }} 
                    />
                    <h3>{user.login}</h3>
                    <a href={user.html_url} target="_blank" rel="nonrefferer">
                        View Github Profile
                    </a>
                </div>    
            ))}
        </div>
    );
};

export default Search;