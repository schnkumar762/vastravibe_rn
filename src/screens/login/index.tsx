import { Button } from "@/components/MyButton";
import { Text } from "@/components/MyText";
import { TextInput } from "@/components/MyTextInput";
import { RootStackParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {  View } from "react-native";

function LoginScreen() {

   const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View className='flex-1 px-8 justify-end pb-20'>

      <Text className="text-6xl font-raleway-bold text-[#202020] mb-3">Login</Text>

      <Text className="text-3xl font-nunito-regular  text-[#202020] mb-6">Good to see you back</Text>


         <TextInput placeholder='Email' className='mb-4'/>
                  <TextInput placeholder='Password' className='mb-8'/>


           <Button title='Done' className='mb-6' onPress={()=>{
            navigation.navigate("HomePage");
           }}/>


            <Button title='Cancel' className='bg-white mb-4' textclassname='text-black'/>






    </View>
  );
}
export default LoginScreen;