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

const AccountScreen = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <View style={tw`h-full w-full`}>
      <SafeAreaView style={tw`flex flex-col w-full h-full `}>
        <View style={tw`flex-1`}>
          <Text></Text>
        </View>
        <View style={tw` mb-3 mt-2 mx-3`}>
          <TouchableOpacity
            style={tw`w-full py-5 rounded-md bg-gray-900 items-center justify-center`}
            activeOpacity={0.6}
            onPress={handleLogOut}
          >
            <MonoText>Log out</MonoText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AccountScreen;
