import axios from 'axios';
import CONFIG from '../../config/env';

const RN_PUBLIC_API = axios.create({
  baseURL: CONFIG.API_BASE_URL,
});

const RN_API = axios.create({
  baseURL: CONFIG.API_BASE_URL,
});

export { RN_API as default, RN_PUBLIC_API };
