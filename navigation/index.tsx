import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import { useSelector } from "react-redux";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import PickAnAccountScreen from "../screens/PickAnAccountScreen";
import SignupScreen from "../screens/SignupScreen";
import SigninModal from "../screens/SigninModal";
import InfoMovieModal from "../screens/InfoMovieModal";
import HomeScreen from "../screens/HomeScreen";
import NewMovieScreen from "../screens/NewMovieScreen";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import SearchScreen from "../screens/SearchScreen";
import MenuScreen from "../screens/MenuScreen";
import PlayerMovieScreen from "../screens/PlayerMovieScreen";
import { RootReducerModel } from "../redux/rootReducer";
import AccountScreen from "../screens/AccountScreen";
import LibraryScreen from "../screens/LibraryScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const token = useSelector((state: RootReducerModel) => state.auth.token);
  return (
    <Stack.Navigator>
      {!token ? (
        <>
          <Stack.Screen
            name="PickAnAccount"
            component={PickAnAccountScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen
              name="Login"
              component={SigninModal}
              options={{
                title: "Sign in",
              }}
            />
          </Stack.Group>

          <Stack.Screen
            name="NotFound"
            component={NotFoundScreen}
            options={{ title: "Oops!" }}
          />
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="Modal" component={ModalScreen} />
          </Stack.Group>
        </>
      ) : (
        <>
          <Stack.Screen
            name="Root"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PlayerMovie"
            component={PlayerMovieScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Library"
            component={LibraryScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Account"
            component={AccountScreen}
            options={{ headerShown: false }}
          />
          <Stack.Group screenOptions={{ presentation: "containedModal" }}>
            <Stack.Screen
              name="InfoMovie"
              component={InfoMovieModal}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="NotFound"
              component={NotFoundScreen}
              options={{ title: "Oops!" }}
            />
          </Stack.Group>
        </>
      )}
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home" size={25} color={color} />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="NewMovieTab"
        component={NewMovieScreen}
        options={{
          title: "New Movies",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="film" size={21} color={color} />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="SearchTab"
        component={SearchScreen}
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="search" size={21} color={color} />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="MenuTab"
        component={MenuScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="menu"
              size={28}
              color={color}
              style={{ marginBottom: -3 }}
            />
          ),
          headerShown: false,
        }}
      />
      {/* <BottomTab.Screen
                name="TabOne"
                component={TabOneScreen}
                options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
                    title: "Tab One",
                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate("Modal")}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1
                            })}
                        >
                            <FontAwesome
                                name="info-circle"
                                size={25}
                                color={Colors[colorScheme].text}
                                style={{ marginRight: 15 }}
                            />
                        </Pressable>
                    )
                })}
            /> */}
      {/* <BottomTab.Screen
                name="TabTwo"
                component={TabTwoScreen}
                options={{
                    title: "Tab Two",
                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />
                }}
            /> */}
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  size: number;
}) {
  return <FontAwesome style={{ marginBottom: -3 }} {...props} />;
}
