import axios from 'axios';
import store from '@/store';
// import { Message } from 'element-ui';
// import router from '../router';

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
});
service.defaults.withCredentials = true;
service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['Authorization'] = store.getters.token;
        }
        return config;
    },
    error => {
        console.log(error); // for debug
        return Promise.reject(error);
    }
);
service.interceptors.response.use(
    response => {
        if (response.headers['content-type']) {
            if (response.headers['content-type'].indexOf('text/html') !== -1) {
                return Promise.reject('登录失效，请重新登录！');
            } else {
                return response.data;
            }
        } else {
            return response.data;
        }
    },
    error => {
        console.log(error.response);
        //const ERROR_STATUS = error.response.status;
        // return Promise.reject(error.response);
        return error.response;

        // if (error.response.status) {
        //     switch (error.response.status) {
        //         // 401: 未登录
        //         case 401:
        //             Message.error('登录状态过期请重新登录');
        //
        //             break;
        //         // 403 token过期
        //         case 403:
        //             Message.error('权限不足');
        //             break;
        //         // 404请求不存在
        //         case 404:
        //             Message.error('网络请求出错，请重新尝试');
        //             break;
        //         // 其他错误
        //         default:
        //             Message.error('网络请求出错，请重新尝试');
        //     }
        //     return Promise.reject(error.response);
        // }
    }
);

export default service;
