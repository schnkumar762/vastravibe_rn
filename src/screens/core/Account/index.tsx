import { Button } from "@/components/MyButton";
import USER_AUTH_API from "@/lib/api/auth";
import { RootStackParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Alert, View } from "react-native";

import {useAuth} from "@/hooks/useAuth"

function Account(){

    const {userId} = useAuth();

    const [loading,setLoading]=useState(false); 
     const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    
    const handleLogout = async ()=>{

         try {
      setLoading(true);

        // Pass the actual logged-in user's ID here
      // once you retrieve it from your auth state.


       

const response = await USER_AUTH_API.userLogout({userId});
console.log("logout api ",response);
navigation.navigate("Login");
      
      

      

    
    } catch (error) {
      Alert.alert("Logout failed", "Please try again.");
    } finally {
      setLoading(false);
    }};
  

    
    return <View>
     <View className="mt-10"></View>
        <Button title={"Signout"} onPress={handleLogout} disabled={loading}/>

        
    </View>
};

export default Account;