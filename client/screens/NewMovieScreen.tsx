import { FlatList } from "react-native";
import NewMovie from "../components/NewMovie";
import { View, Text, SafeAreaView } from "../components/Themed";

const NewMovieScreen = ({navigation}) => {
    const data = [
        {
            name: "Khacvux"
        },
        {
            name: "Khacvux"
        },
        {
            name: "Khacvux"
        },
        {
            name: "Khacvux"
        }
    ];
    return (
        <SafeAreaView>
            <FlatList
                data={data}
                renderItem={() => <NewMovie navigation={navigation} />}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

export default NewMovieScreen;
