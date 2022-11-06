import axios from "axios";
const api = axios.create({
    baseURL: `${process.env.REACT_APP_URL_SERVER_URL || "http://localhost:5005"}`
});
api.interceptors.request.use((config)=>{
    const token = localStorage.getItem()
})