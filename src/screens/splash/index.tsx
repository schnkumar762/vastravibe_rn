import { Image, Text, View } from 'react-native';

function SplashScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('../../assets/splashgif.gif')}
        // source={require('../../assets/samplepng.png')}
        style={{ width: 200, height: 200 }}
        resizeMode="cover"
      />
      <Text style={{ fontSize: 24, marginTop: 20 }}>Welcome to My App</Text>
    </View>
  );
}
export default SplashScreen;
