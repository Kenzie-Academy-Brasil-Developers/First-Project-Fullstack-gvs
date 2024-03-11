import axios from 'axios'
export const api = axios.create({
    baseURL: 'https://netclient-gvs.onrender.com',
})