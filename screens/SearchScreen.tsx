import { EvilIcons } from "@expo/vector-icons";
import { View, Text, SafeAreaView, TextInput } from "../components/Themed";
import tw from "twrnc";
import { FlatList, Keyboard, TouchableOpacity } from "react-native";
import SearchResult from "../components/SearchResult";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerModel } from "../redux/rootReducer";
import { useEffect, useState } from "react";
import { searchMovie } from "../redux/movie/actions";
import { MonoText } from "../components/StyledText";
import LoadingAnimation from "../components/LoadingAnimation";

const SearchScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const resultSearch = useSelector(
    (state: RootReducerModel) => state.movie.resultSearch
  );
  const listNewest = useSelector(
    (state: RootReducerModel) => state.movie.listNewest
  );
  const loading = useSelector(
    (state: RootReducerModel) => state.loading.loading
  );
  const token = useSelector((state: RootReducerModel) => state.auth.token);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    dispatch(searchMovie({ keyword, token }));
  }, [keyword]);

  return (
    <SafeAreaView>
      <View style={tw`rounded-md flex flex-row items-center px-2 m-1 my-3`}>
        <EvilIcons name="search" size={24} color="#E53631" />
        <TextInput
          placeholder="Search..."
          style={tw`mx-2 flex-1 py-3`}
          value={keyword}
          onChangeText={(val) => setKeyword(val)}
        />
        <TouchableOpacity
          style={tw`p-1`}
          onPress={() => {
            setKeyword('')
            Keyboard.dismiss();
          }}
        >
          <Text style={tw`text-sm font-light`}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`h-full`}>
        {loading ? (
          <View style={[{ backgroundColor: "rgba(0,0,0,0.75)" }, tw`h-full`]}>
            <View style={tw`w-full h-1/2 relative`}>
              <LoadingAnimation />
            </View>
          </View>
        ) : keyword && !resultSearch?.length ? (
          <View style={tw`mx-3 py-5`}>
            <Text style={tw`font-light tracking-[.2]`}>
              No result were found for '{keyword}'
            </Text>
          </View>
        ) : (
          <FlatList
            data={resultSearch}
            renderItem={(item) => (
              <SearchResult navigation={navigation} item={item} />
            )}
            showsVerticalScrollIndicator={false}
            pagingEnabled
            ListEmptyComponent={() => (
              <View>
                <MonoText style={tw`px-3 mb-3 text-lg`}>New release</MonoText>
                <FlatList
                  data={listNewest}
                  renderItem={(item) => (
                    <SearchResult navigation={navigation} item={item} />
                  )}
                />
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
