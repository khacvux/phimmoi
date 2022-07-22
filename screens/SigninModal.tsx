import { View, Text, TextInput } from "../components/Themed";
import tw from "twrnc";
import { View as DefaultView, TouchableOpacity } from "react-native";
import { MonoText } from "../components/StyledText";
import FormLogin from "../components/FormLogin";
import { useSelector } from "react-redux";
import { RootReducerModel } from "../redux/rootReducer";
import LoadingAnimation from "../components/LoadingAnimation";

const SigninModal = ({ navigation, route }) => {
  const infoUser = route.params?.infoUser;
  const loading = useSelector(
    (state: RootReducerModel) => state.loading.loading
  );
  return (
    <View style={tw`w-full h-full px-2`}>
      <FormLogin navigation={navigation} infoUser={infoUser} />
      {loading ? <LoadingAnimation /> : <></>}
    </View>
  );
};

export default SigninModal;
