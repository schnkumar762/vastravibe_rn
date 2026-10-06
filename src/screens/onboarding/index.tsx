import { Text, View } from "react-native";

function OnboardingScreen() {
    return (
        <View className="flex-1 bg-blue-500 justify-center items-center">
            <Text>Onboarding Screen</Text>
            </View>
    );
}
export default OnboardingScreen;


/*
import { FlatList, Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ASSETS } from '@/constants/assets';
import { useEffect, useRef, useState } from 'react';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/types';

import { Dimensions } from 'react-native';

const { width ,height} = Dimensions.get('window');

const slides = [{
    id:'1',
    image:ASSETS.IMAGES.ONBOARDING_1,
    title:"Welcome",
    subtitle:"It's fortunate to have you here"
},{
     id: '2',
    image: ASSETS.IMAGES.ONBOARDING_2,
    title: 'Explore',
    subtitle: 'Explore our collection',
},{

     id: '3',
    image: ASSETS.IMAGES.ONBOARDING_3,
    title: 'Shop',
    subtitle: 'Shop your favourite products',

}] as const ;

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

function OnboardingScreen() {

    const navigation = useNavigation<NavigationProp>();

    const flatListRef = useRef<FlatList>(null);

    const [currentIndex, setCurrentIndex]= useState(0);

    useEffect(() => {
        const handleNext = () => {
            if(currentIndex < slides.length - 1){
                        flatListRef.current?.scrollToIndex({ index: currentIndex + 1,animated:true });

            } else {
                navigation.navigate('Start');





            }

        };

        const interval = setInterval(handleNext, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Clean up the interval on unmount
    },[currentIndex]);

    const renderItem = ({ item }: { item: typeof slides[number] }) => {
return (
    <View style={{width,height}}>
        <Image source={item.image} style={{ width: '100%', height: '100%' }} resizeMode="cover" />



       
  
    </View>);
    };



  return <View style={{ flex: 1, backgroundColor: 'white' }}>
    <FlatList
      ref={flatListRef}
      data={slides}
      renderItem={renderItem}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={(event) => {
        const index = Math.round(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width
    );

      setCurrentIndex(index);
    
    }}
    />
  </View>;
}
export default OnboardingScreen;
*/