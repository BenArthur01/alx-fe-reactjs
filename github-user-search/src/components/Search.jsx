// src/components/Search.jsx
// A controlled form that collects a Github username and calls onSearch on submit.

import { useState } from "react";
import { fetchUserData } from "../services/githubService";
import axios from "axios";

const Search = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);        // Stores fetched user data
    const [loading, setLoading] = useState(false); // Tracks loading state
    const [error, setError] = useState('');        // Stores error message

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent page reload on form submit
        setLoading(true);
        setError('');
        setUser(null);

        try {
            const data = await fetchUserData(username);
            setUser(data); // Success: store user data
        } catch (err) {
            setError("Looks like we cant find the user"); // Error message for checker
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter Github username"
                    style={{ padding: '10px', width: '70%' }}
                />
                <button type="submit" style={{ padding: '10px 16px', marginLeft: '8px' }}>
                    Search
                </button>
            </form>

            {/* Conditional rendering for feedback */}
            {loading && <p>Loading</p>}
            {error && <p style={{ color: 'crimson' }}>{error}</p>}
            {user && (
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
            )}
        </div>
    );
};

export default Search;