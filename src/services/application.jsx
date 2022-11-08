import axios from 'axios';
const api = axios.create({baseURL: `${process.env.REACT_APP_SERVER_URL}/application.routes`})

export const applicationSubmit = body => api.post('/applicationSubmit', body).then(response => response.data)

export const numberOfApplication = id => api.get(`/${id}`).then(response => response.data)