import { View, Text, SafeAreaView } from "../components/Themed";
import tw from "twrnc";
import UserItem from "../components/UserItem";
import { MonoText } from "../components/StyledText";
import { FlatList, TouchableOpacity, View as DefaultView } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootReducerModel } from "../redux/rootReducer";
import { AccountModel } from "../redux/auth/models";
import FormLogin from "../components/FormLogin";
import LoadingAnimation from "../components/LoadingAnimation";

const PickAnAccountScreen = ({ navigation }) => {
  const accountsSaved = useSelector(
    (state: RootReducerModel) => state.save.accountsSaved
  );
  const loading = useSelector(
    (state: RootReducerModel) => state.loading.loading
  );

  return (
    <SafeAreaView>
      <View style={tw`w-full h-full flex items-center justify-center`}>
        {accountsSaved.length ? (
          <>
            <DefaultView style={tw` flex-1 justify-end`}>
              <MonoText style={tw`text-center mb-8 text-lg`}>
                Which one?
              </MonoText>
            </DefaultView>
            <FlatList
              data={accountsSaved}
              horizontal
              renderItem={(item: AccountModel) => (
                <UserItem navigation={navigation} infoUser={item} />
              )}
              contentContainerStyle={tw` flex-row`}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              pagingEnabled
              ListHeaderComponent={() => <DefaultView style={tw`px-4`} />}
              ListFooterComponent={() => {
                return (
                  <TouchableOpacity
                    style={tw`w-30 h-30 items-center justify-center bg-[#eee] mr-7 ml-2 rounded-lg `}
                    activeOpacity={0.6}
                    onPress={() => navigation.navigate("Login")}
                  >
                    <AntDesign name="plus" size={30} style={tw``} />
                  </TouchableOpacity>
                );
              }}
            />
          </>
        ) : (
          <DefaultView style={tw`w-full h-full px-4 mt-35`}>
            <FormLogin navigation={navigation} infoUser={undefined} />
          </DefaultView>
        )}
      </View>
      {loading ? <LoadingAnimation /> : <></>}
    </SafeAreaView>
  );
};

export default PickAnAccountScreen;
