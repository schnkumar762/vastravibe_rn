import { View ,Text, Image, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/types';

function StartScreen() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View className="flex-1 bg-white">

            {/*Logo */}

            <View>

                <Image source={require('../../../assets/images/logo.png')}/>
            </View>


            {/* Title */}

            <View>

                <Text>Vastravibe</Text>

            </View>


            {/* Subtitle */}
            <View>
            <Text>Indian Textile Collection</Text>
             </View>





            {/* Button */}

<View>
    <TouchableOpacity>
        <View>
            <Text>Let's get started</Text>
        </View>
    </TouchableOpacity>
</View>
  
            {/*Text*/}   {/*next button*/}

            <View>

                <Text>I already have an account</Text>
                <TouchableOpacity onPress={()=>{
                    console.log("Sign In button pressed");
                }}>
                    <View className="bg-blue-500 p-2 rounded">
                        <Text className="text-white">Sign In</Text>
                    </View>
                </TouchableOpacity>
            </View>

           







            
    
        
        
        </View>
    );
}

export default StartScreen;