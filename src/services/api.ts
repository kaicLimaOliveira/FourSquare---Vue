import axios, { AxiosInstance, HeadersDefaults } from 'axios'

const base: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        Accept: "application/json",
        'Content-Type': "application/json",
    },
    withCredentials: true,
})

interface CommonHeaderProperties extends HeadersDefaults {
    'X-CSRFToken': string;
    'Token-Name': string
}

function setHeaders() {
    base.defaults.headers = {
        'X-CSRFToken': String(localStorage.getItem('csrftoken')),
        'Token-Name': 'access-token'
    } as CommonHeaderProperties
}

export default {
    api() {
        setHeaders()
        return base
    }
}