import { Image, View } from 'react-native';

function SplashScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
      <Image
        source={require('../../assets/splashgif.gif')}
        style={{ flex: 1, width: '100%', height: '100%' }}
        resizeMode="cover"
      />
    </View>
  );
}
export default SplashScreen;
