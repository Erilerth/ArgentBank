import axios from 'axios';

const API_URL = 'http://192.168.1.18:3001/api/v1';
const endpoint = '/user/login';

// Login
const login = async (userData) => {
  const response = await axios.post(`${API_URL}${endpoint}`, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  login,
};

export default authService;
