import axios from 'axios'
// import Cookies from "js-cookie";



const axiosConfig = axios.create({
    baseURL: "http://localhost:1724"
});
// axiosConfig.interceptors.request.use(
//     function (config) {
//         config.headers['Authorization'] = localStorage.getItem('token');
//         config.headers['Access-Control-Allow-Origin'] = '*';
//         return config;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
// )



export default axiosConfig;
