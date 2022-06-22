import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity
} from "../components/Themed";
import tw from "twrnc";
import { MonoText } from "../components/StyledText";
import {
    Dimensions,
    Image,
    ScrollView,
    TouchableOpacity as DefaultTouchableOpacity,
    View as DefaultView
} from "react-native";
import { AntDesign, Feather, Octicons } from "@expo/vector-icons";

const MenuScreen = () => {
    const { width: SCREEN_WIDTH } = Dimensions.get("window");
    return (
        <SafeAreaView style={tw`w-full h-full`}>
            <View style={tw`relative`}>
                <MonoText style={tw`text-center text-xl my-2`}>Profile</MonoText>
                <DefaultTouchableOpacity style={tw`absolute right-2 top-2`}>
                    <MonoText>Save</MonoText>
                </DefaultTouchableOpacity>
            </View>
            <View style={tw`items-center`}>
                <DefaultTouchableOpacity style={tw`relative my-2`} activeOpacity={0.7}>
                    <Image
                        source={require("../assets/images/netflix-avatar.png")}
                        style={[
                            { width: SCREEN_WIDTH / 3, height: SCREEN_WIDTH / 3 },
                            tw`rounded`
                        ]}
                    />
                    <DefaultView
                        style={tw`bg-white rounded-full absolute bottom-1 right-1 p-2 `}
                    >
                        <Feather name="edit-2" size={16} />
                    </DefaultView>
                </DefaultTouchableOpacity>
                <View
                    style={[
                        { width: SCREEN_WIDTH * 0.75 },
                        tw`border border-[#eee] p-2 rounded-lg my-2`
                    ]}
                >
                    <MonoText style={tw`-mb-2`}>Name</MonoText>
                    <TextInput style={tw`pb-1 text-lg h-9`} value="Khacvux" />
                </View>
            </View>
            <ScrollView style={tw`px-3 mt-4`}>
                <TouchableOpacity
                    lightColor="#eee"
                    darkColor="rgba(255,255,255,0.1)"
                    style={tw`px-3 py-4 rounded flex-row items-center my-1`}
                >
                    <View
                        style={tw`w-7 h-7 rounded-lg bg-[#eee] items-center justify-center`}
                    >
                        <AntDesign name="check" size={20}/>
                    </View>
                    <MonoText style={tw`text-lg ml-2`}>List</MonoText>
                </TouchableOpacity>
                <TouchableOpacity
                    lightColor="#eee"
                    darkColor="rgba(255,255,255,0.1)"
                    style={tw`px-3 py-4 rounded flex-row items-center my-1`}
                >
                    <View
                        style={tw`w-7 h-7 rounded-lg bg-[#eee] items-center justify-center`}
                    >
                        <Octicons name="person" size={20} />
                    </View>
                    <MonoText style={tw`text-lg ml-2`}>Account</MonoText>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default MenuScreen;
