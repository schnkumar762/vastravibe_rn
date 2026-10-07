import { TextInput  as RNTextInput ,TextInputProps} from "react-native";


type TextInputCustomProps = TextInputProps & {
    title:string;
    suffixIcon:boolean;

};
export function TextInput({title,suffixIcon,...props}:TextInputCustomProps){

    return (
    <RNTextInput {...props}>

    </RNTextInput>
    );

}