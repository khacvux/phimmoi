import { View, Text } from "../../components/Themed";
import React from "react";
import FeaturedListItem from "./FeaturedListItem";
import { FlatList } from "react-native";
import tw from "twrnc";
import { MonoText } from "../StyledText";

const FeaturedList = ({navigation}) => {
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
    ]
    return (
        <View style={tw`my-5`}>
            <MonoText style={tw`text-xl ml-6 mb-2`}>Trending</MonoText>
            <FlatList
                data={data}
                renderItem={() => <FeaturedListItem navigation={navigation} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                ListHeaderComponent={() => <View style={tw`px-2`} />}
            />
        </View>
    );
};

export default FeaturedList;
