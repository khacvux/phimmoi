import { View, SafeAreaView } from "../components/Themed";
import tw from "twrnc";
import {
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    Text,
    ScrollView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { MonoText } from "../components/StyledText";

const InfoMovieModal = ({ navigation }) => {
    const { width: SCREEN_WIDTH } = Dimensions.get("window");

    return (
        <SafeAreaView style={tw`bg-black h-full`}>
            <ScrollView>
                <ImageBackground
                    source={{
                        uri: "https://bloganchoi.com/wp-content/uploads/2022/06/review-phim-em-va-trinh-1.jpg"
                    }}
                    style={[
                        { width: SCREEN_WIDTH, height: SCREEN_WIDTH * 1.1 },
                        tw`justify-end`
                    ]}
                    resizeMode="cover"
                >
                    <TouchableOpacity
                        style={tw`absolute top-3 right-3`}
                        onPress={() => navigation.goBack()}
                    >
                        <AntDesign name="close" size={22} color="#eee" />
                    </TouchableOpacity>
                    <LinearGradient
                        colors={["rgba(0, 0, 0, 0.00003)", "rgba(0, 0, 0, 1)"]}
                        style={tw`w-full h-70 justify-end px-5`}
                    >
                        <Text style={tw`text-white text-xl my-2 font-bold`}>
                            Em va Trinh
                        </Text>
                        <TouchableOpacity
                            style={tw`flex flex-row items-center justify-center bg-white rounded-sm py-2 my-1`}
                            activeOpacity={0.7}
                            onPress={() => {
                                navigation.goBack()
                                setTimeout(() => navigation.navigate('PlayerMovie'), 500)
                            }}
                        >
                            <Ionicons name="play" />
                            <MonoText style={tw`text-black mx-1`}>Play</MonoText>
                        </TouchableOpacity>
                    </LinearGradient>
                </ImageBackground>
                <MonoText style={tw`text-white px-5 my-2`}>
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
            </ScrollView>
        </SafeAreaView>
    );
};

export default InfoMovieModal;
