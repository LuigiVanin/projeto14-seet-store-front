import axios from 'axios';

const api = axios.create({
    //baseURL: "http://localhost:5000/"
    baseURL: "https://sweet-e-commerce.herokuapp.com/"
})

export default api;
