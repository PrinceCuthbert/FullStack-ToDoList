import axios from 'axios';

// const API_BASE_URL = 'http://localhost:5000/api';

// Use environment variable in production, localhost in development
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const taskAPI = {
  // GET all tasks
  getAllTasks: async () => {
    const response = await api.get('/tasks');
    return response.data;
  },

  // POST create new task
  createTask: async (taskText) => {
    const response = await api.post('/tasks', { taskText });
    return response.data;
  },

  // PUT update task
  updateTask: async (id, taskData) => {
    const response = await api.put(`/tasks/${id}`, taskData);
    return response.data;
  },

  // DELETE task
  deleteTask: async (id) => {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
  },
};

export default api;

