import { View, Text } from "../../components/Themed";
import React from "react";
import { FlatList } from "react-native";
import tw from "twrnc";
import { MonoText } from "../StyledText";
import NormalListItem from "./NormalListItem";

const NormalList = ({navigation}) => {
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
        <View style={tw`mb-4`}>
            <MonoText style={tw`text-xl ml-6 mb-2`}>New Release</MonoText>
            <FlatList
                data={data}
                renderItem={() => <NormalListItem navigation={navigation} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                ListHeaderComponent={() => <View style={tw`px-2`} />}
            />
        </View>
    );
};

export default NormalList;
