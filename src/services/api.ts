import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://itody-role-api.onrender.com/'
})