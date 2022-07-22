import { View, Text } from "../../components/Themed";
import React, { useEffect } from "react";
import { FlatList } from "react-native";
import tw from "twrnc";
import { MonoText } from "../StyledText";
import NormalListItem from "./NormalListItem";

const NormalList = ({ navigation, listMovie }) => {
  return (
    <View style={tw`mb-4`}>
      <MonoText style={tw`text-xl ml-6 mb-2`}>{listMovie.item.name}</MonoText>
      <FlatList
        data={listMovie.item?.list}
        renderItem={(item) => (
          <NormalListItem navigation={navigation} item={item} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ListHeaderComponent={() => <View style={tw`px-2`} />}
      />
    </View>
  );
};

export default NormalList;
