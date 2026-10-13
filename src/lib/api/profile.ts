import API_ROUTES from '@/constants/apiRoutes';
import RN_API from './client';

interface IProfileCreateAPIParamsType {
    userId: number | string;
    firstName: string;
    lastName: string;
    profileImageUrl?: string;
    dateOfBirth?: string;
    gender?: 'MALE' | 'FEMALE' | 'OTHER' | 'PREFER_NOT_TO_SAY';
}

interface IProfileUpdateAPIParamsType {
    firstName?: string;
    lastName?: string;
    profileImageUrl?: string;
    dateOfBirth?: string;
    gender?: 'MALE' | 'FEMALE' | 'OTHER' | 'PREFER_NOT_TO_SAY';
}

const createProfile = async (params: IProfileCreateAPIParamsType) => {
    try {
        const response = await RN_API.post(API_ROUTES.PROFILE.CREATE, params);
        return response;
    } catch (error) {
        console.warn(error);
        return { data: null, error };
    }
};

const getAllProfiles = async () => {
    try {
        const response = await RN_API.get(API_ROUTES.PROFILE.LIST);
        return response;
    } catch (error) {
        console.warn(error);
        return { data: null, error };
    }
};

const getMyProfile = async () => {
    try {
        const response = await RN_API.get(API_ROUTES.PROFILE.ME);
        return response;
    } catch (error) {
        console.warn(error);
        return { data: null, error };
    }
};

const updateMyProfile = async (params: IProfileUpdateAPIParamsType) => {
    try {
        const response = await RN_API.put(API_ROUTES.PROFILE.ME, params);
        return response;
    } catch (error) {
        console.warn(error);
        return { data: null, error };
    }
};

const deleteMyProfile = async () => {
    try {
        const response = await RN_API.delete(API_ROUTES.PROFILE.ME);
        return response;
    } catch (error) {
        console.warn(error);
        return { data: null, error };
    }
};
const deleteAllProfiles = async () => {
    try {
        const response = await RN_API.delete(API_ROUTES.PROFILE.DELETE_ALL);
        return response;
    } catch (error) {
        console.warn(error);
        return { data: null, error };
    }
};

const PROFILE_API = {
    createProfile,
    getAllProfiles,
    getMyProfile,
    updateMyProfile,
    deleteMyProfile,
    deleteAllProfiles,
};
export default PROFILE_API;
