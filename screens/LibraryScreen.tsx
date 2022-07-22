import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "../components/Themed";
import { FlatGrid } from "react-native-super-grid";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerModel } from "../redux/rootReducer";
import { useEffect } from "react";
import { getLibrary } from "../redux/library/actions";
import MovieItem from "../components/MovieItem";

interface props {
  navigation: any;
}

const LibraryScreen = (props: props) => {
  const navigation = props.navigation;
  const dispatch = useDispatch();
  const token = useSelector((state: RootReducerModel) => state.auth.token);
  const library = useSelector(
    (state: RootReducerModel) => state.library.library
  );
  useEffect(() => {
    if (!library) dispatch(getLibrary(token));
  }, []);

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
      <View style={tw`flex-1`}>
        {library ? (
          <FlatGrid
            data={library}
            renderItem={(item) => (
              <MovieItem item={item} navigation={navigation} />
            )}
            itemDimension={100}
            spacing={7}
          />
        ) : (
          <></>
        )}
      </View>
    </SafeAreaView>
  );
};

export default LibraryScreen;
