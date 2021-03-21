import { Redirect } from "@reach/router";
import { useContext } from "react";
import { BlogContext } from "../context";

export function PrivateRoute({ children }) {
  const context = useContext(BlogContext);

  return context.blogApi.isAuthenticated ? (
    children
  ) : (
    <Redirect to="/login" noThrow />
  );
}
