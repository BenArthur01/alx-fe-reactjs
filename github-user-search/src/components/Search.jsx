// src/components/Search.jsx
// A controlled form that collects a Github username and calls onSearch on submit.

import { useState } from "react";

const Search = ({ onSearch }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent page reload on form submit
        const trimmed = username.trim();
        if (!trimmed) return; // Lift the value up to the parent (App)
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '16px' }}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Github username (e.g., octocat)"
                aria-label="Github username"
                style={{ padding: '10px', width: '70%' }}
            />
            <button type="submit" style={{ padding: '10px 14px', marginLeft: '8px' }}>
                Search
            </button>
        </form>
    );
};

export default Search;