import { View , Image, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/types';
import { Button } from "@/components/MyButton";
 import { ArrowRight } from "lucide-react-native";
import { Text } from "@/components/MyText";


function StartScreen() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View className="flex-1 bg-white  items-center">
                  {/* Main content */}
      <View className="flex-1 items-center justify-center">
            {/*Logo */}
            <View className="h-[134px] w-[134px] rounded-full bg-white items-center justify-center mb-[30px]" style={{
                elevation: 5,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.16,
                shadowRadius: 8,
            }}>
                <Image source={require('../../../assets/images/logo.png')}/>
            </View>
            {/* Title */}
                <Text className="text-6xl font-raleway-bold text-[#202020] mb-3">Vastravibe</Text>
            {/* Subtitle */}
              <Text className="text-3xl font-nunito-regular  text-[#202020] text-center" style={{ fontWeight: '100' }}>Indian Textile Collection</Text>
              
        </View>

      {/* Bottom actions */}
      <View className="items-center mb-16">

            {/* Button  Get started*/}

           <View className="mb-4">

            <Button title="Let's get started" onPress={() => navigation.navigate('Signup')} className="w-[335px]"/>
          
           </View>
  
            {/* Sign In */}

            <View className="mb-4  flex-row gap-4 items-center">
                <Text>I already have an account</Text>
                <TouchableOpacity
                className="h-8 w-8 rounded-full bg-blue-500 items-center justify-center" onPress={()=>{
                    navigation.navigate('Login');
                }}>
                    <ArrowRight size={18} color={"white"}/>
                   </TouchableOpacity>
                   </View>
                </View>
            </View>

           







            
    
        
    
    );
}

export default StartScreen;
