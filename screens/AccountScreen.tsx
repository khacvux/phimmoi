import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "../components/Themed";
import tw from "twrnc";
import { MonoText } from "../components/StyledText";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth/actions";
import { Ionicons } from "@expo/vector-icons";

const AccountScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <SafeAreaView style={tw`w-full h-full`}>
      <View style={tw`w-full h-10 justify-between px-3 py-2 mb-2`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View
            style={tw`w-8 h-8 rounded-full bg-[#eee] items-center justify-center`}
          >
            <Ionicons name="arrow-back-outline" size={20} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={tw`flex-1 flex`}>
        <View style={tw`flex-1`}>
          <Text></Text>
        </View>
        <View style={tw` mb-3 mt-2 mx-3`}>
          <TouchableOpacity
            style={tw`w-full py-5 rounded-md items-center justify-center`}
            activeOpacity={0.6}
            onPress={handleLogOut}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          >
            <MonoText>Log out</MonoText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;
