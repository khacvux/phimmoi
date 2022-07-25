import { View } from "../components/Themed";
import tw from "twrnc";
import * as ScreenOrientation from "expo-screen-orientation";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View as DefaultView } from "react-native";
import { Video } from "expo-av";
import { useRef, useState } from "react";

const PlayerMovieScreen = ({ navigation }) => {
  const video = useRef(null);
  const [status, setStatus] = useState<any>();

  ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
  );
  const handlePlay = () => {
    status?.isPlaying
      ? video?.current.pauseAsync()
      : video?.current.playAsync();
  };
  
  return (
    <TouchableOpacity
      style={tw`w-full h-full bg-black items-center justify-center`}
      activeOpacity={0.9}
      onPress={handlePlay}
    >
      <Video
        ref={video}
        style={tw`w-full h-full bg-red-900`}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        style={tw`w-full h-full`}
        resizeMode="contain"
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        usePoster
        isLooping
      />
     
      <DefaultView
        style={tw`absolute top-0 bottom-0 left-0 right-0 items-center justify-center z-100`}
      >
        {!status?.isPlaying ? (
          <Ionicons name="play" size={50} color="#fff" />
        ) : (
          <></>
        )}
      </DefaultView>

      <TouchableOpacity
        onPress={() => {
          ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.PORTRAIT
          );
          navigation.goBack();
        }}
        style={tw`absolute top-5 right-5 z-100`}
      >
        <AntDesign name="close" size={25} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default PlayerMovieScreen;
