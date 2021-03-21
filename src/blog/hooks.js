import { useEffect, useRef, useState } from "react";
import { BlogApiService } from "./blog-api.service";
const cache = {};
export function useBlogApi() {
  const blogApi = useRef(new BlogApiService());
  return blogApi.current;
}
export function useAsyncData(getData, cacheId) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (cache[cacheId]) {
      setData(cache[cacheId]);
      setLoading(false);
    } else {
      requestPosts();
    }

    function requestPosts() {
      setData([]);
      setLoading(true);
      getData().then((json) => {
        cache[cacheId] = json;
        setData(cache[cacheId]);
        setLoading(false);
      });
    }
  }, [cacheId]);

  return { loading, data };
}
