import axios from 'axios';
// axios拦截器
// 拦截请求，给所有的请求都带上token
axios.interceptors.request.use((request) => {
    const token = window.localStorage.getItem('token');
    if (token) {
        request.headers['Authorization'] = `Bearer ${token}`;
    }
    return request;
});

// 拦截响应，遇到token不合法则报错
axios.interceptors.response.use(
    (response) => {
        console.log(response);
        if (response.data.token) {
            console.log('token:', response.data.token);
            window.localStorage.setItem('token', response.data.token);
        }
        if (response.data.errno === -1) {
            return Promise.reject(response.data);
        } else {
            return response;
        }
    },
    (error) => {
        console.log(error);
        const errRes = error.response;
        if (errRes?.status === 401) {
            window.localStorage.removeItem('token');
            swal('Auth Error!', `${errRes.data.error.message}, please login!`, 'error').then(() => {
                history.push('/login');
            });
        }
        return Promise.reject(error.message); // 返回接口返回的错误信息
    }
);

export const sentCode = (params) => {
    return axios.post(`/api/message`, params).then((res) => res.data);
};
export const launchLogin = (params) => {
    return axios.post(`/api/login`, params).then((res) => res.data);
};
export const loginVerified = (params) => {
    return axios.post(`/api/login/verified`, params).then((res) => res.data);
};
export const launchRegister = (params) => {
    return axios.post(`/api/register`, params).then((res) => res.data);
};
export const updateRiYun = (params) => {
    return axios.post(`http://124.221.158.62:3002/api/riyun_update`, params).then((res) => res.data);
};
export const getRiYun = () => {
    return axios.get(`http://124.221.158.62:3002/api/riyun_get`).then((res) => res.data);
};
