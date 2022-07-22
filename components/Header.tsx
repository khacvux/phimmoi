import { LinearGradient } from "expo-linear-gradient";
import { View, Text } from "./Themed";
import tw from "twrnc";

const Header = () => {
  return (
    <LinearGradient
      colors={["rgba(0, 0, 0, 1.5)", "rgba(0, 0, 0, 0.00003)"]}
      style={tw`w-full h-20 items-center justify-center`}
    >
        <Text>sds</Text>
    </LinearGradient>
  );
};

export default Header;
