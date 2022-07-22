import { Dimensions, Image, TouchableOpacity } from "react-native";
import { View, Text } from "../Themed";
import tw from "twrnc";
import { ResultSearch } from "../../redux/movie/models";
const SearchResult = ({ navigation, item }) => {
  const { width: SCREEN_WIDTH } = Dimensions.get("window");
  const data: ResultSearch = item.item;
  return (
    <TouchableOpacity
      style={tw`px-4 flex flex-row items-center mb-2`}
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate("InfoMovie", {
          info: data,
        })
      }
    >
      <Image
        source={
          data?.posterUrl
            ? { uri: data?.posterUrl }
            : require("../../assets/images/netflix-avatar3.png")
        }
        style={[
          { width: SCREEN_WIDTH / 3.3, height: SCREEN_WIDTH / 5.5 },
          tw`rounded`,
        ]}
      />

      <Text style={tw` ml-2`}>{data.name}</Text>
    </TouchableOpacity>
  );
};

export default SearchResult;
