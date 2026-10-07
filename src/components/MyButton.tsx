import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Text } from "./MyText";
import { cn } from '../utils/cn';

type ButtonProps = TouchableOpacityProps & {
    title: string;
    className?:string;
};

export function Button({ title,className,...props}:ButtonProps){

    return (
        <TouchableOpacity {...props} className={cn("bg-blue-500  h-[61px]  items-center justify-center rounded-[16px]", className)}>
           
            <Text className="text-white">{title}</Text>
            
        </TouchableOpacity>
    )
}