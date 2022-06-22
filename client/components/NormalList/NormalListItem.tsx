import { View, Text } from "../../components/Themed";
import tw from "twrnc";
import { Dimensions, ImageBackground, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const NormalListItem = ({navigation}) => {
    const { width: SCREEN_WIDTH } = Dimensions.get("window");

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('InfoMovie')}>
            <ImageBackground
                source={{
                    uri: "https://kenh14cdn.com/thumb_w/660/2020/7/13/parasite-2-15946170946381762253770.jpg"
                }}
                resizeMode="cover"
                style={[
                    { width: SCREEN_WIDTH / 3.4, height: SCREEN_WIDTH * 0.45 },
                    tw`rounded-sm overflow-hidden justify-end mr-1`
                ]}
            >
                <LinearGradient
                    colors={["rgba(0, 0, 0, 0.00003)", "rgba(0, 0, 0, 1)"]}
                    style={tw`w-full h-50 justify-end`}
                >
                    <Text style={tw`text-center text-lg my-2 text-white`}>Parasite</Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
};

export default NormalListItem;
