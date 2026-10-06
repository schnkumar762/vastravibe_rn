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
    <TouchableOpacity onPress={()=>{

      navigation.navigate('Signup')
    }}>
        <View>
            <Text>Let's get started</Text>
        </View>
    </TouchableOpacity>
</View>
  
            {/*Text*/}   {/*next button*/}

            <View>

                <Text>I already have an account</Text>
                <TouchableOpacity onPress={()=>{
                  
                    navigation.navigate('Login')
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

// function StartScreen() {
//   const navigation =
//     useNavigation<NativeStackNavigationProp<RootStackParamList>>();

//   return (
//     <View style={{ flex: 1 }}>

//         <View className="h-10"></View>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text>Go Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
// export default StartScreen;