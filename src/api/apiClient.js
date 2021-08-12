import axios from "axios";
import queryString from 'query-string';


const axiosClient = axios.create({
    baseURL: 'https://api-dev.map4d.vn/sdk',
    headers: {
        'Content-Type': 'text/plain',
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    //handle token
    return config;
});

axiosClient.interceptors.response.use((response) => {
    if(response && response.data){
        return response.data;
    }
    return response;
}, (error) => {
    throw error;
});

export default axiosClient;