import axios from "axios";

const myAxios = axios.create({
    baseURL: 'http://localhost:8080/api',
    withCredentials: true,
});

myAxios.interceptors.request.use(function (config) {
    console.log("我要发送请求了",config);
    return config;
}, function (error) {
    return Promise.reject(error);
});

myAxios.interceptors.response.use(function (response) {
    console.log("我收到响应了",response.data);
    return response?.data;
}, function (error) {
    return Promise.reject(error);
});


export default myAxios;

