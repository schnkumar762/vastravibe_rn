import { View ,Text, Image, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/types';
import { Button } from "@/components/MyButton";

function StartScreen() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View className="flex-1 bg-white justify-center items-center">

            {/*Logo */}

            <View className="h-[134px] w-[134px] rounded-full bg-white items-center justify-center mb-4" style={{
                elevation: 5,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.16,
                shadowRadius: 8,
            }}>

                <Image source={require('../../../assets/images/logo.png')}/>
            </View>


            {/* Title */}

            <View className="mb-2">

                <Text className="text-6xl font-raleway-bold text-[#202020]">Vastravibe</Text>

            </View>


            {/* Subtitle */}
            <View className="mb-16">
              <Text className="text-3xl font-nunito-regular  text-[#202020]" style={{ fontWeight: '100' }}>Indian Textile Collection</Text>
            </View>





            {/* Button */}

           <View className="mb-4">

            <Button title="Let's get started" onPress={() => navigation.navigate('Signup')}/>
          
           </View>
  
            {/*Text*/}   {/*next button*/}

            <View className="mb-4 flex-row mx-4">

                <Text>I already have an account</Text>
                <TouchableOpacity>
                <View className="h-5 w-5 rounded-full bg-blue-500">
                    
                </View>
                   </TouchableOpacity>






             
             


                
            </View>

           







            
    
        
        
        </View>
    );
}

export default StartScreen;
