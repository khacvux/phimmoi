import { EvilIcons } from "@expo/vector-icons";
import { View, Text, SafeAreaView, TextInput } from "../components/Themed";
import tw from "twrnc";
import { FlatList, Keyboard, TouchableOpacity } from "react-native";
import SearchResult from "../components/SearchResult";

const SearchScreen = ({navigation}) => {
    const data = [
        {
            name: "Khacvux"
        },
        {
            name: "Khacvux"
        },
        {
            name: "Khacvux"
        },
        {
            name: "Khacvux"
        }
    ];
    return (
        <SafeAreaView>
            <View style={tw`rounded-md flex flex-row items-center px-2 m-1 my-3`}>
                <EvilIcons name="search" size={24} color="#E53631" />
                <TextInput placeholder="Search..." style={tw`mx-2 flex-1 py-3`} />
                <TouchableOpacity
                    style={tw`p-1`}
                    onPress={() => {
                        Keyboard.dismiss();
                    }}
                >
                    <Text style={tw`text-sm font-light`}>Cancel</Text>
                </TouchableOpacity>
            </View>
            <View style={tw`h-full`}>
                <FlatList
                    data={data}
                    renderItem={() => <SearchResult navigation={navigation} />}
                    showsVerticalScrollIndicator={false}
                    pagingEnabled
                />
            </View>
        </SafeAreaView>
    );
};

export default SearchScreen;
