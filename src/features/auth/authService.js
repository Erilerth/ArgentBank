import axios from 'axios';

const API_URL = 'http://192.168.1.18:3001/api/v1';
const loginEndpoint = '/user/login';
const getUserEndpoint = '/user/profile';

// Login
const login = async (userData) => {
  const response = await axios.post(`${API_URL}${loginEndpoint}`, userData);

  if (response.data) {
    localStorage.setItem('token', JSON.stringify(response.data));
  }
  return response.data;
};

const getUser = async () => {
  const token = JSON.parse(localStorage.getItem('token'));
  const response = await axios.post(
    `${API_URL}${getUserEndpoint}`,
    {},
    {
      headers: { Authorization: `Bearer ${token.body.token}` },
    }
  );

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  login,
  getUser,
};

export default authService;
