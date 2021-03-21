import { navigate, Router } from "@reach/router";
import { useCallback } from "react";
import { PrivateRoute } from "./components/PrivateRoute";
import { BlogContext } from "./context";
import { useBlogApi } from "./hooks";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
export function Blog() {
  const blogApi = useBlogApi();

  const handleLogin = useCallback(
    (username, password) => {
      blogApi.login(username, password).then(() => {
        navigate("/");
      });
    },
    [blogApi]
  );
  console.log(blogApi);

  return (
    <BlogContext.Provider value={{ blogApi: blogApi }}>
      <Router>
        <PrivateRoute path="/">
          <HomePage path="/" />
        </PrivateRoute>
        <LoginPage handleLogin={handleLogin} path="/login" />
      </Router>
    </BlogContext.Provider>
  );
}
