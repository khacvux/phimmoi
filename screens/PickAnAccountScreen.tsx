import { View, Text, SafeAreaView } from "../components/Themed";
import tw from "twrnc";
import UserItem from "../components/UserItem/UserItem";
import { MonoText } from "../components/StyledText";
import { FlatList, TouchableOpacity, View as DefaultView } from "react-native";

import { AntDesign } from "@expo/vector-icons";

const PickAnAccountScreen = ({ navigation }) => {
    const data = [
        {
            image: require("../assets/images/netflix-avatar.png"),
            name: "Khacvux"
        },
        {
            image: require("../assets/images/netflix-avatar.png"),
            name: "Khacvux"
        },
        {
            image: require("../assets/images/netflix-avatar.png"),
            name: "Khacvux"
        },
        {
            image: require("../assets/images/netflix-avatar.png"),
            name: "Khacvux"
        }
    ];

    return (
        <SafeAreaView>
            <View style={tw`w-full h-full flex items-center justify-center`}>
                <DefaultView style={tw` flex-1 justify-end`}>
                    <MonoText style={tw`text-center mb-8 text-lg`}>Which one?</MonoText>
                </DefaultView>
                <FlatList
                    data={data}
                    horizontal
                    renderItem={(item) => <UserItem navigation={navigation} />}
                    contentContainerStyle={tw` flex-row`}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    pagingEnabled
                    ListHeaderComponent={() => <DefaultView style={tw`px-4`} />}
                    ListFooterComponent={() => {
                        return (
                            <TouchableOpacity
                                style={tw`w-30 h-30 items-center justify-center bg-[#eee] mr-7 ml-2 rounded-lg `}
                                activeOpacity={0.6}
                                onPress={() => navigation.navigate("Signup")}
                            >
                                <AntDesign name="plus" size={30} style={tw``} />
                            </TouchableOpacity>
                        );
                    }}
                />

                {/* <UserItem /> */}
            </View>
        </SafeAreaView>
    );
};

export default PickAnAccountScreen;
