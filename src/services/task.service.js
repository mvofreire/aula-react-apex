import axios from 'axios'
import config, { StorageTypes } from '../config'

const baseUrl = 'http://192.168.100.197:3001'
const tasksKey = 'tasks';

export const getTasks = () => {
  if (config.storageType === StorageTypes.api) {
    return axios.get(`${baseUrl}/tasks`);
  }
  else {
    return new Promise((resolve, reject) => {
      try {
        const data = localStorage.getItem(tasksKey) || '[]'
        const result = JSON.parse(data);
        resolve({ data: result })
      } catch (error) {
        reject(error)
      }
    })
  }
}

export const getTask = async (index) => {
  if (config.storageType === StorageTypes.api) {
    const response = await axios.get(`${baseUrl}/tasks/${index}`);
    return response.data;
  } else {
    return new Promise(async resolve => {
      const { data } = await getTasks();
      resolve(data[index])
    })
  }
}

export const createTask = (title) => {
  if (config.storageType === StorageTypes.api) {
    return axios.post(`${baseUrl}/tasks`, { title })
  } else {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await getTasks();
        data.push(title);
        localStorage.setItem(tasksKey, JSON.stringify(data));
        resolve();
      } catch (error) {
        reject(error);
      }
    })
  }
}

export const deleteTask = (index) => {
  if (config.storageType === StorageTypes.api) {
    return axios.delete(`${baseUrl}/tasks`, { data: { index } })
  } else {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await getTasks();
        const result = data.filter((_, i) => i !== index);
        localStorage.setItem(tasksKey, JSON.stringify(result))
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }
}

export const deleteAll = () => {
  if (config.storageType === StorageTypes.api) {
    return axios.delete(`${baseUrl}/tasks-all`)
  } else {
    return new Promise((resolve) => {
      localStorage.removeItem(tasksKey);
      resolve();
    })
  }
}