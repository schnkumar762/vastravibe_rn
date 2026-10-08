import React from 'react';
import type { ComponentType } from 'react';
import type { SvgProps } from 'react-native-svg';
import { TouchableOpacity, View } from 'react-native';


type BottomNavItem = {
  label: string;
  icon: ComponentType<SvgProps>;
  onPress: () => void;
};

type BottomNavbarProps = {
  currentIndex?: number;
  items: BottomNavItem[];
};

const BottomNavbar = ({ currentIndex = 0, items }: BottomNavbarProps) => {
  return (
    <View></View>
  );
}
  export default BottomNavbar;