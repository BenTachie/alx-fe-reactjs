import axios from "axios";

const BASE_URL = "https://api.github.com";

// Function to fetch a single user's profile
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN || ""}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("User not found");
  }
};
        