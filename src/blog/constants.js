export const BASE_URL = "https://jsonplaceholder.typicode.com";
export const API = {
  getAllPosts: () => `${BASE_URL}/posts`,
  getPost: (id) => `${BASE_URL}/posts/${id}`,
  getUserPosts: (userId) => `${BASE_URL}/users/${userId}/posts`,
  getPostComments: (postId) => `${BASE_URL}/posts/${postId}/comments`,
  getAllComments: () => `${BASE_URL}/comments`,
  getAllUsers: () => `${BASE_URL}/users`,
  getUsersByEmail: (email) => `${BASE_URL}/users?email=${email}`,
};
