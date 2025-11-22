// src/services/githubService.js
// Centralized functions for calling the Github API.
// Uses the public endpoint for user details. Optionally aataches a token via env var.

import axios from "axios";

// Create a reusable axios instance
const api = axios.create({
    baseURL: 'https://api.github.com',
});

// Optionally add a token from .env to avoid rate limits
api.interceptors.request.use((config) => {
    const token = import.meta.env.VITE_APP_GITHUB_API_KEY;  // define in .env if needed
    if (token) {
        config.headers.Authorization = 'Bearer ${token}';
    }
    return config;
});

/**
 *  Fetch a single user's profile by username.
 *  - Returns basic profile info (avatar_url, name, html_url, etc.)
 *  - Throws if the user is not found (to be handled in UI)
 */
export async function fetchUserData(username) {
    const res = await api.get(`/users/${username}`);
    return res.data;
}