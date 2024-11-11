import axios from 'axios';


const api = axios.create({
    baseURL: 'https://coupon-mopa-api.onrender.com',
    headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
});

export default api;
