// A controlled input that lifts the search term up to App
// keeps it simple and accessible.

import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent page reload on form submit
        onSearch(term.trim()); // trigger parent search with cleaned term
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
            <input
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Search Github users (e.g., octocat)"
                style={{ padding: '10px', width: '70%' }}
                aria-label="Search Github users"
            />
            <button type="submit" style={{ padding: '10px 16px', marginLeft: '8px' }}>
                Search
            </button>
        </form>
    );
};

export default SearchBar;