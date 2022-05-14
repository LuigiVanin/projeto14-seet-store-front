import axios from 'axios';

const api = axios.create({
    baseURL: "https://sweet-e-commerce.herokuapp.com/"
})

export default api;
