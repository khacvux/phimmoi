import { View, Text } from "../../components/Themed";
import tw from "twrnc";
import { Dimensions, ImageBackground, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const NormalListItem = ({navigation, item}) => {
    const { width: SCREEN_WIDTH } = Dimensions.get("window");
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('InfoMovie', {
            info: item.item
        })}>
            <ImageBackground
                source={item.item?.posterUrl ? {uri: item.item?.posterUrl} : require('../../assets/images/netflix-avatar2.png')}
                resizeMode="cover"
                style={[
                    { width: SCREEN_WIDTH / 3.4, height: SCREEN_WIDTH * 0.45 },
                    tw`rounded-sm overflow-hidden justify-end mr-1 bg-[#441B07]`
                ]}
            >
                <LinearGradient
                    colors={["rgba(0, 0, 0, 0.00003)", "rgba(0, 0, 0, 1)"]}
                    style={tw`w-full h-50 justify-end`}
                >
                    <Text style={tw`text-center mx-1 text-sm my-2 text-white`}>{item.item?.name}</Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
};

export default NormalListItem;
