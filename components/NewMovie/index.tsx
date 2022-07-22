import { Dimensions, Image, ImageBackground, TouchableOpacity, View as DefaultView } from "react-native";
import { View, Text } from "../Themed";
import tw from "twrnc";
import { MonoText } from "../StyledText";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const NewMovie = ({navigation, item}) => {
    const { width: SCREEN_WIDTH } = Dimensions.get("window");
    return (
        <View style={tw`my-3`}>
            <TouchableOpacity activeOpacity={0.9}
            onPress={() => navigation.navigate('InfoMovie', {
                info: item.item
            })}>
                <ImageBackground
                    source={item.item?.posterUrl ? {uri: item.item?.posterUrl} : require('../../assets/images/netflix-avatar2.png')}
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
                <MonoText style={tw`text-lg `}>{item.item?.name}</MonoText>
                <MonoText style={tw`text-gray-500`} numberOfLines={4}>
                    {item.item?.description}
                </MonoText>
            </View>
        </View>
    );
};

export default NewMovie;
