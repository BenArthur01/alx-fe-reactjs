// src/services/githubApi.js
// Central place for Github API calls using Axios.
// Keeps components clean and reusable.

import axios from "axios";

const api = axios.create({
    baseURL: 'https//api.github.com', //Github REST API base
});

// Optional: attach token to all requests (helps avoid rate limits)
api.interceptors.request.use((config) => {
    const token = import.meta.env.VITE_GITHUB_TOKEN; //read from .env
    if  (token) {
        config.headers.Authorization = 'Bearer ${token}';
    }
    return config;
});

/**
 * Search Github users by query string
 * @param {string} query - The search term (e.g., "october").
 * @returns {Promise<Array>} - A list of user objects.
 */
export async function searchUsers(query) {
    if (!query) return []; // guard against empty input
    const res = await api.get('/search/users', {
        params: { q: query, per_page: 20 },
    });
    return res.data.items; // array of users
} 

/**
 * Get detailed info for a single user.
 * @param {string} username - Github username.
 * @returns {Promise<Object>} - The user profile object.
 */
export async function getUser(username) {
    const res = await api.get(`/users/${username}`);
    return res.data;
}
