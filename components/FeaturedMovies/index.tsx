import { Dimensions, ImageBackground, TouchableOpacity } from "react-native";
import { View, Text } from "../Themed";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import { View as DefaultView } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { MonoText } from "../StyledText";
import { MovieModel } from "../../redux/movie/models";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkSave, saveToLibrary, unsaveToLibrary } from "../../redux/library/actions";
import { RootReducerModel } from "../../redux/rootReducer";


interface props {
  navigation: any;
  newest: MovieModel;
  token: string
}

const FeaturedMovies = (props: props) => {
  const { width: SCREEN_WIDTH } = Dimensions.get("window");
  const { navigation, newest, token } = props;
  const save = useSelector((state: RootReducerModel) => state.library.save)
  const [isSave, setSave] = useState(save)
  const dispatch = useDispatch()
  if(newest) {
    useEffect(() => {
      dispatch(checkSave({ token, _id: newest?._id }))
    }, [])
  }
  const handleSave = () => {
    setSave(true)
    dispatch(saveToLibrary({
      name: newest.name,
      posterUrl: newest.posterUrl,
      _id: newest._id,
      token
    }))
  }

  const handleUnsave = () => {
    setSave(false)
    dispatch(unsaveToLibrary({
      name: newest.name,
      posterUrl: newest.posterUrl,
      _id: newest._id,
      token
    }))
  }

  return (
    <ImageBackground
      source={
        newest?.posterUrl
          ? { uri: newest.posterUrl }
          : require("../../assets/images/netflix-avatar2.png")
      }
      style={[
        { width: SCREEN_WIDTH, height: SCREEN_WIDTH * 1.5 },
        tw`justify-end bg-[#441B07] `,
      ]}
      resizeMode="cover"
    >
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.00003)", "rgba(0, 0, 0, 1)"]}
        style={tw`w-full h-50 justify-end`}
      >
        <DefaultView style={tw`flex flex-row items-center justify-around my-3`}>
          {
            !isSave ? (
              <TouchableOpacity style={tw`items-center flex-1`} 
                onPress={handleSave}
              >
                <AntDesign name="plus" color={"#fff"} size={18} />
                <MonoText style={tw`text-white`}>Library</MonoText>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={tw`items-center flex-1`}
                onPress={handleUnsave}
              >
                <AntDesign name="checkcircleo" color={"#fff"} size={18} />
                <MonoText style={tw`text-white`}>Library</MonoText>
              </TouchableOpacity>
            )
          }
          <DefaultView style={tw`flex-1 items-center justify-center`}>
            <TouchableOpacity
              style={tw`bg-white flex-row items-center px-2 py-1 rounded`}
            >
              <Ionicons name="play" color={"#000"} size={22} />
              <MonoText style={tw`ml-1 text-black`}>Play</MonoText>
            </TouchableOpacity>
          </DefaultView>
          <TouchableOpacity
            style={tw`items-center flex-1`}
            onPress={() =>
              navigation.navigate("InfoMovie", {
                info: newest,
              })
            }
          >
            <Ionicons
              name="information-circle-outline"
              color={"#fff"}
              size={18}
            />
            <MonoText style={tw`ml-1 text-white`}>Information</MonoText>
          </TouchableOpacity>
        </DefaultView>
      </LinearGradient>
    </ImageBackground>
  );
};

export default FeaturedMovies;
