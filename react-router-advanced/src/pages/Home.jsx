import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div style={{ textAlign: "center" }}>
    <h1>Home Page</h1>
    <p>Welcome! Navigate using the menu above.</p>
    <Link to="/post/2">View Dynamic Post Example</Link>
  </div>
);

export default Home;
