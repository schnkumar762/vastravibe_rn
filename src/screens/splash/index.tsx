import { Button, Text, View } from 'react-native';
import PRODUCT_API from '../../lib/api/product';

function SplashScreen() {
  const handleCreateProduct = async () => {
    try {
      console.log('Creating Product...');
      const product = await PRODUCT_API.createProduct();

      console.log('Created Product:', product);
    } catch (error) {
      console.log('Failed to create product:', error);
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Splash Screen</Text>

      <Button title="Create Product" onPress={handleCreateProduct} />
    </View>
  );
}
export default SplashScreen;
