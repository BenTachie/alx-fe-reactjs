import axios from "axios";

const BASE_URL = "https://api.github.com";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN || ""}`,
  },
});

// Build query string for GitHub Search API
const buildQuery = ({ term, location, minRepos }) => {
  let query = "";
  if (term) query += `${term} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos}`;
  return query.trim();
};

export const searchUsers = async ({ term, location, minRepos, page = 1 }) => {
  const query = buildQuery({ term, location, minRepos });
  const res = await api.get(`/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=10`);
  return res.data;
};
