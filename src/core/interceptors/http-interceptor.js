import axios from 'axios';

const { request, response } = axios.interceptors;

request.use(
    config => {
        return config;
    },
    (error) => Promise.reject(error)
);

response.use(
    response => response,
    error => Promise.reject(error)
);