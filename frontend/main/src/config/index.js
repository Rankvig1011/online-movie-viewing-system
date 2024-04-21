import axios from 'axios';

const SERVER = 'http://localhost:3200/';

const axiosClient = axios.create({
    baseURL: `${SERVER}api/`,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

axiosClient.interceptors.request.use(
    function (config) {
        const accessToken = localStorage.getItem('access_token');
        const custom = {
            Authorization: `Bearer ${accessToken}`,
        };

        return {
            ...config,
            headers: {
                ...config.headers,
                ...custom,
            },
        };
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error?.response);
    }
);

export default axiosClient;
