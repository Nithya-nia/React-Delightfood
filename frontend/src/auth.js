import axios from 'axios';


// const API_URL = "http://https://delight-backend.onrender.com/";
// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = "https://delight-backend-zncy.onrender.com";



// export const handleGoogleError = () => {
//   alert("Google Login Failed!");
// };


// export const register = async (username, password) => {
//   try {
//     await axios.post(`${API_URL}register`, { username, password });
//   } catch (err) {
//     throw new Error('Registration Failed');
//   }
// };


// export const login = async (username, password) => {
//   try {
//     const response = await axios.post(`${API_URL}login`, { username, password });
//     const token = response.data.token;
//     localStorage.setItem('token', token);
//     return token;
//   } catch (err) {
//     throw new Error('Login Failed');
//   }
// };


export const verifyToken = async () => {

  const token = localStorage.getItem('token');
  console.log(token, "token received");

  if (!token || token === "undefined") {
    return { valid: false };
  }

  try {
    const response = await axios.post(
      `${API_URL}/verifyToken`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return response.data;

  } catch (error) {
    console.log(error);
    localStorage.removeItem('token');
    return { valid: false };
  }
};


export const logout = () => {
  localStorage.removeItem('token');
};
