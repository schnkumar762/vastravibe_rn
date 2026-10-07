import { useNavigation } from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/types';
export const useSplash = () => {
     const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const startAppFlow = () => {
        
        return navigation.navigate('Start');
    }

    return {isHydrated: true,startAppFlow};
};