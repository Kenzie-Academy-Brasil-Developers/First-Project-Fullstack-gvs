import axios from 'axios'
export const api = axios.create({
    baseURL: 'https://netclients.onrender.com',
    timeout: 4 * 2000,
})