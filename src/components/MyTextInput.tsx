import { TextInput  as RNTextInput ,TextInputProps,View} from "react-native";

import { Text } from './MyText';
import { cn } from '../utils/cn';


type TextInputCustomProps = TextInputProps & {
    title?:string;
      prefix?: React.ReactNode;
  suffix?: React.ReactNode;

};
export function TextInput({title,prefix,suffix,className,...props}:TextInputCustomProps){

    return (
        <View className="w-full"> 
         {title && (
        <Text className="mb-2 text-sm font-medium">
          {title}
        </Text>
      )}
        <View
        className={cn(
          'h-[49px] w-full flex-row items-center rounded-full bg-[#F7F7F7] px-5',
          className,
        )}
      >
 {prefix && (
          <View className="mr-3 flex-row items-center">
            {prefix}
          </View>
        )}

    <RNTextInput {...props} className="flex-1" placeholderTextColor="#CFCFCF"/>

    

     {suffix && (
          <View className="ml-2">
            {suffix}
          </View>
        )}
    </View>

    </View>
    );

}