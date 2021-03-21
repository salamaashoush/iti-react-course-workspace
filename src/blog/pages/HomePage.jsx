import { Link } from "@reach/router";
import { Post } from "../components/Post";
import "./HomePage.css";

export function HomePage({ children }) {
  return (
    <div className="home-page">
      Welcome Home
      <Post></Post>
      <Link to="/user">User</Link>
      <Link to="/post">POst</Link>
    </div>
  );
}
