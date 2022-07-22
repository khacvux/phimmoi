import tw from "twrnc";
import { Image, TouchableOpacity } from "react-native";
import { MonoText } from "./StyledText";

const UserItem = ({ navigation, infoUser }) => {
    const handleNavigate = () => {
      if (navigation) return navigation.navigate("Login", {
        infoUser: infoUser?.item || infoUser
      });
      else return;
    };
  
    return (
      <TouchableOpacity activeOpacity={0.6} onPress={handleNavigate}>
        <Image
          source={
            infoUser?.item?.avatarUrl || infoUser?.avatarUrl
              ? { uri: (infoUser?.item?.avatarUrl) }
              : require("../assets/images/netflix-avatar2.jpg")
          }
          style={tw`w-30 h-30 rounded-lg mx-3`}
        />
        <MonoText style={tw`text-center my-2 text-base`}>
          {infoUser ? (infoUser.item?.name || infoUser?.name) : ""}
        </MonoText>
      </TouchableOpacity>
    );
  };

export default UserItem;
