import { Dimensions, Image, ImageBackground, TouchableOpacity, View as DefaultView } from "react-native";
import { View, Text } from "../Themed";
import tw from "twrnc";
import { MonoText } from "../StyledText";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const NewMovie = ({navigation}) => {
    const { width: SCREEN_WIDTH } = Dimensions.get("window");
    return (
        <View style={tw`my-3`}>
            <TouchableOpacity activeOpacity={0.9}
            onPress={() => navigation.navigate('InfoMovie')}>
                <ImageBackground
                    source={{
                        uri: "https://img.vietwiki.net/uploads/2016/08/song-o-day-song-2.jpg"
                    }}
                    style={[{ width: SCREEN_WIDTH, height: SCREEN_WIDTH * 0.55 }, tw`justify-end`]}
                >
                    <LinearGradient
                        colors={["rgba(0, 0, 0, 0.00003)", "rgba(0, 0, 0, 1)"]}
                        style={tw`w-full h-20 justify-end px-5`}
                    >
                        <DefaultView style={tw`flex-row items-center justify-end my-3`}>
                            <Ionicons
                                name="information-circle-outline"
                                color={"#fff"}
                                size={26}
                            />

                        </DefaultView>

                    </LinearGradient>
                </ImageBackground>
            </TouchableOpacity>

            <View style={tw`px-4 my-1`}>
                <MonoText style={tw`text-lg `}>Song o day song</MonoText>
                <MonoText style={tw`text-gray-500`} numberOfLines={4}>
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here', making it
                    look like readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model text, and a
                    search for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years, sometimes by
                    accident, sometimes on purpose
                </MonoText>
            </View>
        </View>
    );
};

export default NewMovie;
