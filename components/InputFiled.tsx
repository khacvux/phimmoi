import { View, Text, TextInput } from "./Themed";
import tw from "twrnc";

interface InputFieldProps {
  value: string;
  placeholder: string;
  onChangeText: any;
  secureTextEntry: boolean,
}

const InputFiled = (props: InputFieldProps) => {
  return (
    <View style={tw`rounded-[1] overflow-hidden bg-[#eee] mt-2`}>
      <TextInput
        placeholder={props.placeholder}
        style={tw`w-full p-4 items-center mb-1`}
        placeholderTextColor="#A5A5A5"
        value={props.value}
        darkColor="#000"
        lightColor="#000"
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

export default InputFiled;
