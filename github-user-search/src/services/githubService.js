// src/services/githubService.js
// Builds advanced search queries for Github users using axios.
// Includes optional token via env to reduce rate limit issues.
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
 * Build a Github Search API `q` string from criteria.
 * - username: included as general term (e.g., "octocat")
 * - location: filter e.g., "locstion: Accra"
 * - minRepos: filter e.g., "repos:>=10"
 */
function buildQuery({ username, location, minRepos }) {
    const terms =[];

    // Username: general free-text term helps match login/name
    if (username) terms.push(username);

    //Location filter per Github search syntax
    if (location) terms.push(`location:${location}`);

    // Repository count filter (use repos:>=X)
    if (minRepos) {
        const n = Number(minRepos);
        if (!Number.isNaN(n) && n >= 0) terms.push(`repos:>=${n}`);
    }

    // Join with spaces; Github interprets spaces as AND between qualifiers
    // If empty, use a generic term to avoid invalid query (e.g., "type:user")
    const q= terms.length > 0 ? terms.join(' ') : 'typr:user';
    return q;
}

/**
 * Search Github users with advanced criteria.
 * Returns a shape { items: [...], total_count: number} from GITHUB API.
 * Use `per_page` and `page` for pagination.
 */
export async function searchUsersAdvanced(criteria, { page = 1, per_page = 20 } = {}) {
    const q = buildQuery(criteria);
    const res = await api.get('/search/users', {
        params: { q, page, per_page },
    });
    return res.data;  // { total_count, incomplete_results, items }
}

/**
 * Fetch extra details for a specific user (for richer result cards).
 */
export async function getUserDetails(username) {
    const res = await api.get(`/users/${username}`);
    return res.data; // includes name, location, public_repos, followers, etc
}


/**
 *  Fetch a single user's profile by username.
 *  - Returns basic profile info (avatar_url, name, html_url, etc.)
 *  - Throws if the user is not found (to be handled in UI)
 */
export async function fetchUserData(username) {
    const res = await api.get(`/users/${username}`);
    return res.data;
}