import { View, Text } from "../Themed";
import tw from "twrnc";
import { Image, TouchableOpacity } from "react-native";
import { MonoText } from "../StyledText";

const UserItem = ({navigation}) => {
    return (
        <TouchableOpacity
            activeOpacity={.6}
            onPress={() => navigation.navigate('Root')} 
        >
            <Image
                source={require("../../assets/images/netflix-avatar.png")}
                style={tw`w-30 h-30 rounded-lg mx-3`}
            />
            <MonoText style={tw`text-center my-2 text-base`}>Khacvux</MonoText>
        </TouchableOpacity>
    );
};

export default UserItem;
