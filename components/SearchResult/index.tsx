import { Dimensions, Image, TouchableOpacity } from "react-native";
import { View, Text } from "../Themed";
import tw from "twrnc";
const SearchResult = ({navigation}) => {
    const { width: SCREEN_WIDTH } = Dimensions.get("window");

    return (
        <TouchableOpacity
            style={tw`px-4 flex flex-row items-center mb-2`}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('InfoMovie')}
        >
            <Image
                source={{
                    uri: "https://i.ytimg.com/vi/5TlJtpytXtk/maxresdefault.jpg"
                }}
                style={[
                    { width: SCREEN_WIDTH / 3.4, height: SCREEN_WIDTH / 5 },
                    tw`rounded`
                ]}
            />

            <Text style={tw`text-base ml-2`}>Muon noi voi em</Text>
        </TouchableOpacity>
    );
};

export default SearchResult;
