import { View, Text, SafeAreaView, TextInput } from "../components/Themed";
import tw from "twrnc";
import { ImageBackground, TouchableOpacity } from "react-native";
import { View as DefaultView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { MonoText } from "../components/StyledText";

const SignupScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ImageBackground
                style={tw`w-full h-full items-center justify-center`}
                source={require("../assets/images/add-profile-bg.jpeg")}
                resizeMode="cover"
            >
                <DefaultView
                    style={tw`flex-row items-center justify-start w-full px-3 py-1`}
                >
                    <TouchableOpacity
                        style={tw`overflow-hidden rounded-full`}
                        onPress={() => navigation.goBack()}
                    >
                        <BlurView intensity={30} tint="light" style={tw`p-2`}>
                            <Ionicons name="arrow-back-outline" size={22} color="#eee" />
                        </BlurView>
                    </TouchableOpacity>
                </DefaultView>
                <DefaultView style={tw`flex-1 items-center justify-center px-6 w-full `}>
                    <BlurView
                        intensity={25}
                        tint="light"
                        style={tw`w-full flex flex-col rounded-lg px-3 py-4 overflow-hidden mb-15`}
                    >
                        <MonoText style={tw`font-bold text-xl text-white text-center`}>
                            Sign up
                        </MonoText>
                        <DefaultView style={tw`mt-5`}>
                            <View style={tw`rounded-[1] overflow-hidden`}>
                                <TextInput
                                    placeholder="Email"
                                    style={tw`w-full p-3 items-center mb-1`}
                                    placeholderTextColor="#CCC"
                                />
                            </View>
                            <View style={tw`rounded-[1] mt-1 overflow-hidden`}>
                                <TextInput
                                    placeholder="Number Phone"
                                    style={tw`w-full p-3 items-center mb-1`}
                                    placeholderTextColor="#CCC"
                                />
                            </View>
                            <View style={tw`rounded-[1] mt-1 overflow-hidden`}>
                                <TextInput
                                    placeholder="Password"
                                    style={tw`w-full p-3 items-center mb-1`}
                                    placeholderTextColor="#CCC"
                                />
                            </View>
                            <View style={tw`rounded-[1] mt-1 overflow-hidden`}>
                                <TextInput
                                    placeholder="Confirm password"
                                    style={tw`w-full p-3 items-center mb-1`}
                                    placeholderTextColor="#CCC"
                                />
                            </View>
                        </DefaultView>
                        <DefaultView style={tw`mt-4`}>
                            <TouchableOpacity
                                style={tw`bg-[#E53631] rounded-[1] py-4`}
                                activeOpacity={0.7}
                            >
                                <MonoText style={tw`text-center text-lg`}>
                                    Sign up
                                </MonoText>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={tw`my-3 mx-2`}
                                activeOpacity={0.7}
                                onPress={() => navigation.navigate("Login")}
                            >
                                <MonoText>Have any account?</MonoText>
                            </TouchableOpacity>
                        </DefaultView>
                    </BlurView>
                </DefaultView>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default SignupScreen;
