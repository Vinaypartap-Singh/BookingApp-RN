import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { themeColor } from "../theme/theme";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function Header() {
  const data = [
    {
      name: "Stays",
      icon: <Ionicons name="bed-outline" size={24} color="white" />,
    },
    {
      name: "Flights",
      icon: <Ionicons name="airplane-outline" size={24} color="white" />,
    },
    {
      name: "Car Rental",
      icon: <Ionicons name="car-outline" size={24} color="white" />,
    },
    {
      name: "Taxi",
      icon: <AntDesign name="car" size={24} color="white" />,
    },
  ];
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        backgroundColor: themeColor.primaryColor,
        paddingHorizontal: 5,
        paddingVertical: 20,
      }}
    >
      {data.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{
              borderColor: "white",
              borderWidth: 1,
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 50,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginRight: 10,
            }}
          >
            {data.icon}
            <Text style={{ color: "white", fontWeight: "500", fontSize: 14 }}>
              {data.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
