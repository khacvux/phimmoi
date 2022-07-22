import { View, Text } from "../../components/Themed";
import { View as DefaultView } from "react-native";
import tw from "twrnc";
import { Dimensions, ImageBackground, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const FeaturedListItem = ({ navigation, item }) => {
  const { width: SCREEN_WIDTH } = Dimensions.get("window");
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate("InfoMovie", {
        info: item.item
      })}
    >
      <ImageBackground
        source={
          item?.item
            ? { uri: item.item.posterUrl }
            : require("../../assets/images/netflix-avatar2.png")
        }
        resizeMode="cover"
        style={[
          { width: SCREEN_WIDTH / 2.4, height: SCREEN_WIDTH * 0.7 },
          tw`rounded-sm overflow-hidden justify-end mr-2`,
        ]}
      >
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.00003)", "rgba(0, 0, 0, 1)"]}
          style={tw`w-full h-50 justify-end`}
        >
          <DefaultView style={tw` w-full h-1/3 justify-center`}>
            <Text style={tw`text-center my-2 text-white`}>
              {item?.item.name}
            </Text>
          </DefaultView>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default FeaturedListItem;
