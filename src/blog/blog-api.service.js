import { API } from "./constants";

export class BlogApiService {
  currentUser = null;
  isAuthenticated = false;

  getAllPosts() {
    return fetch(API.getAllPosts()).then((res) => res.json());
  }

  getAllUsers() {
    return fetch(API.getAllUsers()).then((res) => res.json());
  }

  getUserPosts(userId) {
    return fetch(API.getUserPosts(userId)).then((res) => res.json());
  }

  getPostComments(postId) {
    return fetch(API.getUserPosts(postId)).then((res) => res.json());
  }

  login(email, password) {
    return fetch(API.getUsersByEmail(email))
      .then((res) => res.json())
      .then((users) => {
        const user = users[0];
        if (!user) {
          return Promise.reject("User not found");
        }
        if (user.username !== password) {
          return Promise.reject("Invalid username/password combination");
        }
        this.currentUser = user;
        this.isAuthenticated = true;
        return user;
      });
  }
}
