import RN_PUBLIC_API from '../api/client';

const createProduct = async () => {
  try {
    console.log('Calling POST /products...');

    const response = await RN_PUBLIC_API.post('/products', {
      productName: 'from app platform',
      image: 'greencheck.jpg',
      price: 110,
    });

    console.log('Api response: ', response.data);
    return response.data;
  } catch (error) {
    console.log('Api error: ', error);
    throw error;
  }
};

const PRODUCT_API = {
  createProduct,
};

export default PRODUCT_API;
