import API_ROUTES from '@/constants/apiRoutes';
import RN_PUBLIC_API from '../api/client';

interface IProfileCreateAPIParamsType {
    userId: number;
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
        const response = await RN_PUBLIC_API.post(API_ROUTES.PROFILE.CREATE, params);
        return response;
    } catch (error) {
        console.warn(error);
        return { data: null, error };
    }
};

const getAllProfiles = async () => {
    try {
        const response = await RN_PUBLIC_API.get(API_ROUTES.PROFILE.LIST);
        return response;
    } catch (error) {
        console.warn(error);
        return { data: null, error };
    }
};

const getProfileById = async (id: number) => {
    try {
        const url = API_ROUTES.PROFILE.DETAIL.replace(':id', String(id));
        const response = await RN_PUBLIC_API.get(url);
        return response;
    } catch (error) {
        console.warn(error);
        return { data: null, error };
    }
};

const updateProfile = async (id: number, params: IProfileUpdateAPIParamsType) => {
    try {
        const url = API_ROUTES.PROFILE.UPDATE.replace(':id', String(id));
        const response = await RN_PUBLIC_API.put(url, params);
        return response;
    } catch (error) {
        console.warn(error);
        return { data: null, error };
    }
};

const deleteProfileById = async (id: number) => {
    try {
        const url = API_ROUTES.PROFILE.DELETE.replace(':id', String(id));
        const response = await RN_PUBLIC_API.delete(url);
        return response;
    } catch (error) {
        console.warn(error);
        return { data: null, error };
    }
};
const deleteAllProfiles = async () => {
    try {
        const response = await RN_PUBLIC_API.delete(API_ROUTES.PROFILE.DELETE_ALL);
        return response;
    } catch (error) {
        console.warn(error);
        return { data: null, error };
    }
};

const PROFILE_API = {
    createProfile,
    getAllProfiles,
    getProfileById,
    updateProfile,
    deleteProfileById,
    deleteAllProfiles,
};
export default PROFILE_API;
