import { View } from "../../components/Themed";
import React from "react";
import FeaturedListItem from "./FeaturedListItem";
import { FlatList } from "react-native";
import tw from "twrnc";
import { MonoText } from "../StyledText";

const FeaturedList = ({ navigation, listNewest }) => {
  return (
    <View style={tw`my-5`}>
      <MonoText style={tw`text-xl ml-6 mb-2`}>New Release</MonoText>
      <FlatList
        data={listNewest}
        renderItem={(item) => (
          <FeaturedListItem navigation={navigation} item={item} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ListHeaderComponent={() => <View style={tw`px-2`} />}
      />
    </View>
  );
};

export default FeaturedList;
