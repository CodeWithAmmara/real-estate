import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  withCredentials: true // ✅ allow cookies
});

// Login
const login = async (userData) => {
  const res = await api.post("/login", userData);
  return res.data; // no token, cookie is auto stored
};

// Register
const register = async (userData) => {
  const res = await api.post("/register", userData);
  return res.data;
};

// Logout
const logout = async () => {
  await api.post("/logout"); // we’ll add this route
};

export default { login, register, logout };
