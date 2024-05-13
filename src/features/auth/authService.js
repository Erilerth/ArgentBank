import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1';
const loginEndpoint = '/user/login';
const getUserEndpoint = '/user/profile';

const token = JSON.parse(localStorage.getItem('token'));

// Login
const login = async (userData) => {
  const response = await axios.post(`${API_URL}${loginEndpoint}`, userData);

  if (response.data) {
    localStorage.setItem('token', JSON.stringify(response.data));
  }
  return response.data;
};

const getUser = async () => {
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

const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

const changeUsername = async (userName) => {
  const response = await axios.put(
    `${API_URL}${getUserEndpoint}`,
    { userName },
    {
      headers: { Authorization: `Bearer ${token.body.token}` },
    }
  );
  console.log(response);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  login,
  getUser,
  logout,
  changeUsername,
};

export default authService;
