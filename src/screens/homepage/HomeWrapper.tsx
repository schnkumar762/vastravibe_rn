import BottomNavbar from "@/components/BottomNavbar";
import { ComponentType, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgProps } from "react-native-svg";
import HomeScreen from "./HomeScreen";

import Account from "../core/Account";
import Cart from "../core/Cart";
import Categories from "../core/Categories";
import Orders from "../core/Orders";

const screens= [
  HomeScreen,
  Categories,
  Cart,
  Orders,
  Account,
];

const HomeWrapper = () => {
   const [currentIndex, setCurrentIndex] = useState(0);

    const CurrentScreen = screens[currentIndex];

     let bottomTabs: {
    label: string;
    icon: ComponentType<SvgProps>;
    onPress: () => void;
  }[] = [];

    return (

         <SafeAreaView className="flex-1 bg-slate-100" edges={['top']}>
      <View className="flex-1">
       <CurrentScreen/>
      </View>
      <BottomNavbar currentIndex={currentIndex} items={bottomTabs} />
    </SafeAreaView>
    )


};


export default HomeWrapper;