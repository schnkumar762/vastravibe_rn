import { TouchableOpacity, TouchableOpacityProps,} from "react-native";
import { Text } from "./MyText";
import { cn } from '../utils/cn';

type ButtonProps = TouchableOpacityProps & {
    title: string;
    className?:string;
    textclassname?:string;
};

export function Button({ title,className,textclassname,...props}:ButtonProps){

    return (
        <TouchableOpacity {...props} className={cn("bg-blue-500  h-[61px]  items-center justify-center rounded-[16px]", className)}>
           
            <Text className={cn("text-white",textclassname,)}>{title}</Text>
            
        </TouchableOpacity>
    )
}