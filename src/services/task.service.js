import axios from 'axios'
const baseUrl = 'http://192.168.100.216:3001'

export const getTasks = () =>{
  return axios.get(`${baseUrl}/tasks`)
}

export const createTasks = (title) =>{
return axios.post(`${baseUrl}/tasks`, {title} )
}

export const deleteTasks = (index) =>{

  return axios.delete(`${baseUrl}/tasks`, { index })

}