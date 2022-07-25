import { View as DefaultView, TouchableOpacity } from "react-native";
import { Text, View, TextInput } from "./Themed";
import tw from "twrnc";
import { MonoText } from "./StyledText";
import UserItem from "./UserItem";
import InputFiled from "./InputFiled";
import { Formik } from "formik";
import { LoginModel } from "../redux/auth/models";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/actions";
import { RootReducerModel } from "../redux/rootReducer";
import { removeAccountOnDevice } from "../redux/saveAccount/actions";


const FormLogin = ({ navigation, infoUser }) => {
  const dispatch = useDispatch();
  const message = useSelector((state: RootReducerModel) => state.auth.message);
  console.log(infoUser)

  const initialValues: LoginModel = {
    email: "",
    password: "",
  };

  const handleRemove = (): void => {
    dispatch(removeAccountOnDevice(infoUser))
    navigation.goBack()
  }

  const handleLogin = (values: LoginModel) => {
    dispatch(login({
      email: infoUser ? infoUser.email : values.email,
      password: values.password
    }));
  };

  return (
    <DefaultView style={tw`relative flex h-full`}>
      <View style={tw`flex-1`}>
        <DefaultView style={tw`w-full items-center mt-10 `}>
          <UserItem navigation={undefined} infoUser={infoUser} />
        </DefaultView>
        <Formik
          initialValues={initialValues}
          onSubmit={(values: LoginModel) => handleLogin(values)}
        >
          {({ handleChange, handleSubmit, values }) => (
            <DefaultView>
              <DefaultView style={tw`mt-5`}>
                {infoUser ? (
                  <></>
                ) : (
                  <InputFiled
                    value={values.email}
                    placeholder="Email"
                    onChangeText={handleChange("email")}
                    secureTextEntry={false}
                  />
                )}
                <InputFiled
                  value={values.password}
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  secureTextEntry={true}
                />
                <MonoText style={tw`m-1 text-gray-200`}>{message}</MonoText>
              </DefaultView>
              <DefaultView style={tw`mt-4`}>
                <TouchableOpacity
                  style={tw`bg-[#E53631] rounded-[1] py-4`}
                  activeOpacity={0.7}
                  onPress={handleSubmit}
                >
                  <MonoText style={tw`text-center text-lg`}>Sign in</MonoText>
                </TouchableOpacity>
              </DefaultView>
            </DefaultView>
          )}
        </Formik>
        <TouchableOpacity
          style={tw`my-3 mx-2`}
          activeOpacity={0.7}
          onPress={(): void => {
            navigation.goBack()
            navigation.navigate("Signup")

          }}
        >
          <MonoText>Sign up?</MonoText>
        </TouchableOpacity>
      </View>

      <View style={tw`w-full items-center justify-center my-2`}>
        <TouchableOpacity style={tw`m-2`} onPress={handleRemove}>
          <MonoText style={tw`text-[#E53631]`}>Remove account from device?</MonoText>
        </TouchableOpacity>
      </View>
    </DefaultView>
  );
};

export default FormLogin;
