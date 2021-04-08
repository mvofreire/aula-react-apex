import axios from 'axios'
const baseUrl = 'http://192.168.100.216:3001'

export const getTasks = () => {
  return axios.get(`${baseUrl}/tasks`);
}

export const createTask = (title) => {
  return axios.post(`${baseUrl}/tasks`, { title })
}

export const deleteTask = (index) => {
  return axios.delete(`${baseUrl}/tasks`, { data: { index } })
}

export const deleteAll = () => {
  return axios.delete(`${baseUrl}/tasks-all`)
}