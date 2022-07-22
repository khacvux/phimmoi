import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import NewMovie from "../components/NewMovie";
import { View, Text, SafeAreaView } from "../components/Themed";
import { RootReducerModel } from "../redux/rootReducer";

const NewMovieScreen = ({ navigation }) => {
  const listNewest = useSelector(
    (state: RootReducerModel) => state.movie.listNewest
  );
  return (
    <SafeAreaView>
      <FlatList
        data={listNewest}
        renderItem={(item) => <NewMovie navigation={navigation} item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default NewMovieScreen;
