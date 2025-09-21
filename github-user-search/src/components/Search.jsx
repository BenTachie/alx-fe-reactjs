import { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!term && !location && !minRepos) return;

    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const data = await searchUsers({ term, location, minRepos, page: 1 });
      setUsers(data.items);
      setPage(1);
    } catch {
      setError("No users found for this search.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      const nextPage = page + 1;
      const data = await searchUsers({ term, location, minRepos, page: nextPage });
      setUsers((prev) => [...prev, ...data.items]);
      setPage(nextPage);
    } catch {
      setError("Unable to load more users.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
      >
        <input
          type="text"
          placeholder="Username / keyword"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location (e.g., Berlin)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="md:col-span-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Results List */}
      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center space-x-4 border p-3 rounded"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="font-bold">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {users.length > 0 && (
        <div className="mt-6 text-center">
          <button
            onClick={handleLoadMore}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
