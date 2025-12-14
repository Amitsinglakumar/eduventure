import axios from 'axios';

// Replace with your backend API base URL
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.eduventure.com';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

// Add interceptors if authentication tokens or error handling needed

export default apiClient;
