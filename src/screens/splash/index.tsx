import {   Image, View } from 'react-native';

import { useSplash } from '@/hooks/useSplash';
import { useEffect } from 'react';

function SplashScreen() {

  const {isHydrated,startAppFlow} = useSplash();

  useEffect(() => {
    if (!isHydrated) return ;
    const timer = setTimeout(() => {
      void startAppFlow(); 
    },3000);

    return () => clearTimeout(timer);
  },[isHydrated]);

  
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Image
        source={require('../../assets/splashgif.gif')}
        style={{ flex: 1, width: '100%', height: '100%' }}
        resizeMode="cover"
      />


    </View>
  );
}
export default SplashScreen;
