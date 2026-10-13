import API_ROUTES from '@/constants/apiRoutes';
import RN_PUBLIC_API from '../api/client';

interface IImageUploadParamsType {
    uri: string;
    fileName?: string | null;
    type?: string | null;
}

const imageUpload = async (params: IImageUploadParamsType) => {
    try {
        const formData = new FormData();

        formData.append('file', {
            uri: params.uri,
            name: params.fileName || 'image.jpg',
            type: params.type || 'image/jpeg',
        } as any);

        const response = await RN_PUBLIC_API.post(API_ROUTES.UTILS.IMAGE_UPLOAD, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response;
    } catch (error) {
        console.warn('Image upload error:', error);
        return { data: null, error };
    }
};

const UTILS_API = {
    imageUpload,
};

export default UTILS_API;
