import { Button } from "@/components/MyButton";
import { Text } from "@/components/MyText";
import { TextInput } from "@/components/MyTextInput";
import USER_AUTH_API from "@/lib/api/auth";
import { RootStackParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import {  Alert, View } from "react-native";

function LoginScreen() {

   const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
    try {
      setLoading(true);

      const response = await USER_AUTH_API.userLogin({
        email: email.trim(),
        password,
      });

      console.log("Login successful:", response.data);

      navigation.navigate("HomePage");
    } catch (error) {
      Alert.alert("Login failed", "Please check your email and password.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <View className='flex-1 px-8 justify-end pb-20'>

      <Text className="text-6xl font-raleway-bold text-[#202020] mb-3">Login</Text>

      <Text className="text-3xl font-nunito-regular  text-[#202020] mb-6">Good to see you back</Text>


         <TextInput placeholder='Email' className='mb-4' value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none"/>
                  <TextInput placeholder='Password' className='mb-8' value={password} onChangeText={setPassword}/>


           <Button title={loading ? "Logging in ..":"Done"} className='mb-6' onPress={handleLogin} disabled={loading}/>


            <Button title='Cancel' className='bg-white mb-4' textclassname='text-black' onPress={()=>{navigation.goBack()}}/>






    </View>
  );
}
export default LoginScreen;