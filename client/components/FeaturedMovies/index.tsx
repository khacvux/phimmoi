import { Dimensions, ImageBackground, TouchableOpacity } from "react-native";
import { View, Text } from "../Themed";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import { View as DefaultView } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { MonoText } from "../StyledText";

const FeaturedMovies = ({navigation}) => {
    const { width: SCREEN_WIDTH } = Dimensions.get("window");

    return (
        <ImageBackground
            source={{
                uri: "https://bloganchoi.com/wp-content/uploads/2022/06/review-phim-em-va-trinh-1.jpg"
            }}
            style={[
                { width: SCREEN_WIDTH, height: SCREEN_WIDTH * 1.25 },
                tw`justify-end`
            ]}
            resizeMode="cover"
        >
            <LinearGradient
                colors={["rgba(0, 0, 0, 0.00003)", "rgba(0, 0, 0, 1)"]}
                style={tw`w-full h-50 justify-end`}
            >
                <DefaultView style={tw`flex flex-row items-center justify-around my-3`}>
                    <TouchableOpacity style={tw`items-center flex-1`}>
                        <AntDesign name="plus" color={"#fff"} size={18} />
                        <MonoText style={tw`text-white`}>List</MonoText>
                    </TouchableOpacity>
                    <DefaultView style={tw`flex-1 items-center justify-center`}>
                        <TouchableOpacity
                            style={tw`bg-white flex-row items-center px-2 py-1 rounded`}
                        >
                            <Ionicons name="play" color={"#000"} size={22} />
                            <MonoText style={tw`ml-1 text-black`}>Play</MonoText>
                        </TouchableOpacity>
                    </DefaultView>
                    <TouchableOpacity style={tw`items-center flex-1`}
                        onPress={() => navigation.navigate('InfoMovie')}
                    >
                        <Ionicons
                            name="information-circle-outline"
                            color={"#fff"}
                            size={18}
                        />
                        <MonoText style={tw`ml-1 text-white`}>Information</MonoText>
                    </TouchableOpacity>
                </DefaultView>
            </LinearGradient>
        </ImageBackground>
    );
};

export default FeaturedMovies;
