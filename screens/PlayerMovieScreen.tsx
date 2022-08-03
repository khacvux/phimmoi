import tw from "twrnc";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { View as DefaultView, Dimensions, StatusBar } from "react-native";
import VideoPlayer from 'expo-reanimated-av-player';
import { useSharedValue } from 'react-native-reanimated';


const PlayerMovieScreen = ({ navigation, route }) => {
  const videoHeight = useSharedValue(0);
  const isFullScreen = useSharedValue(false);
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')
  const info = route.params.info
  return (
    <DefaultView
      style={tw`w-full h-full bg-white items-center`}
    >
      <StatusBar hidden />
      <VideoPlayer
        source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        headerBarTitle={info?.name}
        videoDefaultHeight={SCREEN_WIDTH*(9/16)}
        onToggleAutoPlay={(state: boolean) => {
          console.log(`onToggleAutoPlay state: ${state}`);
        }}
        videoHeight={videoHeight}
        resizeMode="cover"
        isFullScreen={isFullScreen}
        onTapBack={(): void => {
          navigation.goBack()
        }}
        onTapMore={() => {
          console.log('onTapMore');
        }}
        style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
      />
    </DefaultView>
  );
};

export default PlayerMovieScreen;
