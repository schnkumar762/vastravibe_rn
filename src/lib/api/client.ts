import axios from 'axios';
import CONFIG from '../../config/env';
import useAuthStore from '@/store/useAuthStore';

const RN_PUBLIC_API = axios.create({
    baseURL: CONFIG.API_BASE_URL,
});

const RN_API = axios.create({
    baseURL: CONFIG.API_BASE_URL,
});

RN_API.interceptors.request.use(config => {
    const token = useAuthStore.getState().token;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export { RN_API as default, RN_PUBLIC_API };
