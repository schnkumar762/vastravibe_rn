import { useNavigation } from '@react-navigation/native';
export const useSplash = () => {
     const navigation = useNavigation();

    const startAppFlow = () => {
        
        return navigation.navigate('Onboarding' as never);
    }

    return {isHydrated: true,startAppFlow};
};