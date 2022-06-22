import { View, Text, TextInput } from "../components/Themed";
import tw from "twrnc";
import { View as DefaultView, TouchableOpacity } from "react-native";
import { MonoText } from "../components/StyledText";

const SigninModal = ({navigation}) => {
    return (
        <View style={tw`w-full h-full px-2 pt-20`}>
            <DefaultView style={tw`mt-5`}>
                <View style={tw`rounded-[1] overflow-hidden bg-[#eee]`}>
                    <TextInput
                        placeholder="Email"
                        style={tw`w-full p-4 items-center mb-1`}
                        placeholderTextColor="#CCC"
                    />
                </View>

                <View style={tw`rounded-[1] mt-2 overflow-hidden bg-[#eee]`}>
                    <TextInput
                        placeholder="Password"
                        style={tw`w-full p-4 items-center mb-1`}
                        placeholderTextColor="#CCC"
                    />
                </View>
            </DefaultView>
            <DefaultView style={tw`mt-4`}>
                <TouchableOpacity
                    style={tw`bg-[#E53631] rounded-[1] py-4`}
                    activeOpacity={0.7}
                >
                    <MonoText style={tw`text-center text-lg`}>Sign in</MonoText>
                </TouchableOpacity>

                <TouchableOpacity
                    style={tw`my-3 mx-2`}
                    activeOpacity={0.7}
                    onPress={() => navigation.goBack()}
                >
                    <MonoText>Forgot password?</MonoText>
                </TouchableOpacity>
            </DefaultView>
        </View>
    );
};

export default SigninModal;
