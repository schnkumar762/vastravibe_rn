import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "./components/HomeHeader";
import { RefreshControl, ScrollView } from "react-native";
import { useState } from "react";
import { Text } from "@/components/MyText";

const HomeScreen = () =>{

      const [refreshing, setRefreshing] = useState(false);
     

       async function handleRefresh() {
    try {
        setRefreshing(true);


    } catch(error){
        console.log(error);
    } finally {
        setRefreshing(false);
    }};


    return (<SafeAreaView className="flex-1 bg-white">

         {/* Header */}
      <HomeHeader/>

       {/* Content */}
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >

        <Text>HooooooooomeScreeeeeeeeeen</Text>

         {/* Categories */}
        {/* Banner */}
        {/* Products */}
        </ScrollView>

        </SafeAreaView>
    );
      

      

    
         





        
  
};


export default HomeScreen;