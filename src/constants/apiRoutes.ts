import CONFIG from '../config/env';
const API_ROUTES = {
    BASE: CONFIG.API_BASE_URL,

    PRODUCTS: {
        CREATE: `${CONFIG.API_BASE_URL}/products`,
        LIST: `${CONFIG.API_BASE_URL}/products`,
        DETAIL: `${CONFIG.API_BASE_URL}/products/:id`,
    },
    AUTH: {
        USER: {
            LOGIN: `${CONFIG.API_BASE_URL}/users/auth/login`,
            SIGNUP: `${CONFIG.API_BASE_URL}/users/auth/signup`,
            SESSION: `${CONFIG.API_BASE_URL}/users/auth/session`,
            LOGOUT: `${CONFIG.API_BASE_URL}/users/auth/logout`,
        },
        ADMIN: {},
    },
    PROFILE: {
        CREATE: `${CONFIG.API_BASE_URL}/profiles`,
        LIST: `${CONFIG.API_BASE_URL}/profiles`,
        ME: `${CONFIG.API_BASE_URL}/profiles/me`,
        DELETE_ALL: `${CONFIG.API_BASE_URL}/profiles`,
    },
    UTILS: {
        IMAGE_UPLOAD: `${CONFIG.API_BASE_URL}/images/upload`,
    },
};

export default API_ROUTES;
