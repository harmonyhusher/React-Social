import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "bda01c19-9b19-44ac-b047-1e8efa5d9b3e" },
});


export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`/profile/${userId}`)
    .then((response) => response.data)
  },
  getStatus(userId) {
    return instance.get(`/profile/status/${userId}`)
    .then((response) => response.data)
  },
  follow(userId) {
    return instance.post(`/follow/${userId}`)
    .then(response => {if (response.data.resultCode === 0) {}})
  },
  unfollow(userId) {
    return instance.delete(`/follow/${userId}`)
    .then(response => {if (response.data.resultCode === 1) {}})
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile)
    return instance.put(`profile/photo`, formData, {
       headers: {
        "Content-Type": "multipart/form-data"
       }
    })
  }
};

export const jsonAPI = () => { 
   axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => response.data)
 }

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password) {
    return instance.post(`auth/login`, {email, password});
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
