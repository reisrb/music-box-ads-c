import axios from 'axios';

const api = axios.create({
  baseURL: "https://63320b4e3ea4956cfb6bffbf.mockapi.io/music-box"
})

export default api;