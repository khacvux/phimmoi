import { View, SafeAreaView } from "../components/Themed";
import tw from "twrnc";
import {
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Text,
  ScrollView,
  View as DefaultView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { MonoText } from "../components/StyledText";
import { MovieModel } from "../redux/movie/models";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerModel } from "../redux/rootReducer";
import { useEffect, useState } from "react";
import {
  checkSave,
  saveToLibrary,
  unsaveToLibrary,
} from "../redux/library/actions";

const InfoMovieModal = ({ navigation, route }) => {
  const { width: SCREEN_WIDTH } = Dimensions.get("window");
  const info: MovieModel = route.params.info;
  const save = useSelector((state: RootReducerModel) => state.library.save);
  const token = useSelector((state: RootReducerModel) => state.auth.token);
  const [isSave, setSave] = useState(save);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(checkSave({ token, _id: info?._id }));
  }, []);

  const handleSave = () => {
    setSave(true);
    dispatch(
      saveToLibrary({
        name: info?.name,
        posterUrl: info?.posterUrl,
        _id: info?._id,
        token,
      })
    );
  };

  const handleUnsave = () => {
    setSave(false);
    dispatch(
      unsaveToLibrary({
        name: info?.name,
        posterUrl: info?.posterUrl,
        _id: info?._id,
        token,
      })
    );
  };

  return (
    <SafeAreaView style={tw`bg-black h-full`}>
      <ScrollView>
        <ImageBackground
          source={
            info
              ? {
                  uri: info?.posterUrl,
                }
              : require("../assets/images/netflix-avatar2.png")
          }
          style={[
            { width: SCREEN_WIDTH, height: SCREEN_WIDTH * 1.1 },
            tw`justify-end`,
          ]}
          resizeMode="cover"
        >
          <TouchableOpacity
            style={tw`absolute top-3 right-3`}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="close" size={22} color="#eee" />
          </TouchableOpacity>
          <LinearGradient
            colors={["rgba(0, 0, 0, 0.00003)", "rgba(0, 0, 0, 1)"]}
            style={tw`w-full h-70 justify-end px-5`}
          >
            <DefaultView
              style={tw`flex-row justify-between items-center w-full my-1`}
            >
              <Text style={tw`text-white text-xl my-2 font-bold`}>
                {info?.name}
              </Text>
              {isSave ? (
                <TouchableOpacity
                  style={[
                    tw`p-2 rounded`,
                    { backgroundColor: "rgba(0,0,0,0.35)" },
                  ]}
                  onPress={handleUnsave}
                >
                  <AntDesign name="check" size={17} color="#eee" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={[
                    tw`p-2 rounded `,
                    { backgroundColor: "rgba(0,0,0,0.35)" },
                  ]}
                  onPress={handleSave}
                >
                  <AntDesign name="plus" size={17} color="#eee" />
                </TouchableOpacity>
              )}
            </DefaultView>

            <TouchableOpacity
              style={tw`flex flex-row items-center justify-center bg-white rounded-sm py-2 my-1`}
              activeOpacity={0.7}
              onPress={() => {
                navigation.goBack();
                setTimeout(() => navigation.navigate("PlayerMovie", {
                  info: info
                }), 500);
              }}
            >
              <Ionicons name="play" />
              <MonoText style={tw`text-black mx-1`}>Play</MonoText>
            </TouchableOpacity>
          </LinearGradient>
        </ImageBackground>
        <MonoText style={tw`text-white px-5 my-2`}>
          {info?.description}
        </MonoText>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoMovieModal;
