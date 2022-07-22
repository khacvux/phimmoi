import { View } from "../components/Themed";
import tw from "twrnc";
import FeaturedMovies from "../components/FeaturedMovies";
import FeaturedList from "../components/FeaturedList";
import { FlatList } from "react-native";
import NormalList from "../components/NormalList";
import VirtualizedScrollView from "../components/VitualizedScrollView";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getListMovie,
  getListNewestMovie,
  getNewestMovie,
} from "../redux/movie/actions";
import { RootReducerModel } from "../redux/rootReducer";
import { mainListModel } from "../redux/movie/reducer";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootReducerModel) => state.auth.token);
  const mainList = useSelector(
    (state: RootReducerModel) => state.movie.mainList
  );
  const newest = useSelector((state: RootReducerModel) => state.movie.newest);
  const listNewest = useSelector(
    (state: RootReducerModel) => state.movie.listNewest
  );
  useEffect(() => {
    dispatch(getListMovie(token));
    dispatch(getNewestMovie(token));
    dispatch(getListNewestMovie(token));
  }, []);

  return (
    <View style={tw`w-full h-full`}>
      {/* <DefaultView style={tw`absolute top-0 left-0 right-0 z-100`}>
        <Header />
      </DefaultView> */}
      <VirtualizedScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`pb-10`}
      >
        <FeaturedMovies navigation={navigation} newest={newest} token={token} />
        <FeaturedList navigation={navigation} listNewest={listNewest} />
        {mainList?.length ? (
          <FlatList
            data={mainList}
            renderItem={(item: mainListModel) => (
              <NormalList navigation={navigation} listMovie={item} />
            )}
            keyExtractor={(item: mainListModel) => item.name}
          />
        ) : (
          <></>
        )}
      </VirtualizedScrollView>
    </View>
  );
};

export default HomeScreen;
