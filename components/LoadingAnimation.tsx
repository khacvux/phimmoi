import { View } from "react-native";
import tw from "twrnc";
import LottieView from "lottie-react-native";

const LoadingAnimation = () => {
  return (
    <View
      style={[
        { backgroundColor: "rgba(0,0,0,0.75)" },
        tw`absolute top-0 bottom-0 left-0 right-0 z-100 items-center justify-center`,
      ]}
    >
      <LottieView
        source={require("../assets/lottiefiles/loading-circle-time.json")}
        style={tw`w-16 h-16`}
        autoPlay
        loop={true}
      />
    </View>
  );
};

export default LoadingAnimation;
