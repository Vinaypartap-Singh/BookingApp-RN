import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import {
  HomeIcon,
  HeartIcon,
  BellIcon,
  UserCircleIcon,
} from "react-native-heroicons/outline";
import {
  HomeIcon as HomeSolid,
  HeartIcon as HeartSolid,
  BellIcon as BellSolid,
  UserCircleIcon as UserCircleSolid,
} from "react-native-heroicons/solid";

import SavedScreen from "./screens/SavedScreen";
import BookingScreen from "./screens/BookingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { themeColor } from "./theme/theme";
export default function StackNavigator() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <HomeSolid color={themeColor.primaryColor} />
              ) : (
                <HomeIcon />
              ),
          }}
        />
        <Tab.Screen
          name="SavedScreen"
          component={SavedScreen}
          options={{
            headerShown: false,
            title: "Saved",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <HeartSolid color={themeColor.primaryColor} />
              ) : (
                <HeartIcon />
              ),
          }}
        />
        <Tab.Screen
          name="Bookings"
          component={BookingScreen}
          options={{
            headerShown: false,
            title: "Bookings",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <BellSolid color={themeColor.primaryColor} />
              ) : (
                <BellIcon />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            title: "Profile",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <UserCircleSolid color={themeColor.primaryColor} />
              ) : (
                <UserCircleIcon />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});