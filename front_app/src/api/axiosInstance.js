import axios from 'axios'

const token = localStorage.getItem('userToken') || ''
console.info('@@---->token', token)

const baseURL = process.env.REACT_APP_BASE_URL
export const axiosInstance = axios.create({
    baseURL,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token ?  `${token}` : ''
    }
})

