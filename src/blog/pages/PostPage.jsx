import { useParams } from "@reach/router";
export function PostPage() {
  const params = useParams();
  console.log(params);
  return <h1>Post {params.id}</h1>;
}
