import { useContext } from "react";
import { BlogContext } from "../context";

export function Post() {
  const context = useContext(BlogContext);
  console.log(context);

  return <h1>Post component</h1>;
}
