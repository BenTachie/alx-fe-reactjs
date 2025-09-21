import axios from "axios";

const BASE_URL = "https://api.github.com";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`, // optional
  },
});

export const searchUsers = async (query) => {
  const res = await api.get(`/search/users?q=${query}`);
  return res.data;
};

