import {   View } from 'react-native';
import { Text } from '../../components/MyText';

function SplashScreen() {

  
  return (
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
      {/* <Image
        source={require('../../assets/splashgif.gif')}
        style={{ flex: 1, width: '100%', height: '100%' }}
        resizeMode="cover"
      /> */}
<Text className=" text-2xl items-center justify-center">Hii</Text>

    </View>
  );
}
export default SplashScreen;
