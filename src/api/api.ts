import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "bda01c19-9b19-44ac-b047-1e8efa5d9b3e" },
});


export const usersAPI = {
  async getUsers(currentPage: number, pageSize: number) {
    const response = await instance
      .get(`users?page=${currentPage}&count=${pageSize}`);
    return response.data;
  },
};

export const profileAPI = {
  async getProfile(userId: any) {
    const response = await instance.get(`/profile/${userId}`);
    return response.data;
  },
  async getStatus(userId: number) {
    const response = await instance.get(`/profile/status/${userId}`);
    return response.data;
  },
  updateStatus(status: string) {
    return instance.put(`/profile/status/`, {status: status})
  },
  follow(userId: number) {
    return instance.post(`/follow/${userId}`)
    .then(response => {if (response.data.resultCode === 0) {}})
  },
  unfollow(userId: number) {
    return instance.delete(`/follow/${userId}`)
    .then(response => {if (response.data.resultCode === 1) {}})
  },
  savePhoto(photoFile: any) {
    const formData = new FormData();
    formData.append('image', photoFile)
    return instance.put(`profile/photo`, formData, {
       headers: {
        "Content-Type": "multipart/form-data"
       }
    })
  }
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email: string, password: string) {
    return instance.post(`auth/login`, {email, password});
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};


