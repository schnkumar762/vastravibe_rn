import React from 'react';
import type { ComponentType } from 'react';
import type { SvgProps } from 'react-native-svg';
import { TouchableOpacity, View } from 'react-native';
import { Text } from './MyText';
import { cn } from '@/utils/cn';


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
    <View
      className="h-[80px] border-t border-[#E5E7EB]  rounded-t-3xl flex-row items-center bg-white justify-between px-4"
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: -3,
        },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 10,
      }}
    >
      {items.map((item, index) => {
        const isSelected = currentIndex === index;
        const Icon = item.icon;
        return (
          <TouchableOpacity
            key={index}
            onPress={item.onPress}
            className="flex-1 items-center justify-center"
          >
            <Icon
              width={22}
              height={22}
              color={isSelected ? 'black' : '#808080'}
            />
            <Text
              className={cn(
                'mt-1 text-[12px]',
                isSelected ? 'text-black font-bold' : 'text-gray-400',
              )}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
                  );
      })}
    </View>
    
  );
}
  export default BottomNavbar;