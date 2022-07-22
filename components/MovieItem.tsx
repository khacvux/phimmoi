import { View, Text, TouchableOpacity } from "./Themed";
import tw from "twrnc";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const MovieItem = ({ navigation, item }) => {
  return (
    <TouchableOpacity onPress={() =>  navigation.navigate('InfoMovie', {
      info: item.item
    })} >
      <ImageBackground
        style={tw`w-full h-55 justify-end items-center`}
        source={{ uri: item.item?.posterUrl }}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.00003)", "rgba(0, 0, 0, 1)"]}
          style={tw`w-full h-50 justify-end items-center`}
        >
          <Text style={tw`text-center`}>{item.item?.name}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MovieItem;
