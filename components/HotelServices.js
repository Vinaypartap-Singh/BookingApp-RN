import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { themeColor } from "../theme/theme";

export default function HotelServices() {
  const services = [
    {
      name: "Room Service",
    },
    {
      name: "Free Wifi",
    },
    {
      name: "Family Rooms",
    },
    {
      name: "Free Parking",
    },
    {
      name: "Swimming Pool",
    },
    {
      name: "Restaurant",
    },
    {
      name: "Fitness Center",
    },
  ];
  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Most Popular Facilities
      </Text>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: 15,
          }}
        >
          {services.map((data, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor: themeColor.placeBtn,
                  paddingHorizontal: 18,
                  paddingVertical: 10,
                  borderRadius: 10,
                }}
              >
                <Text style={{ fontWeight: 500 }}>{data.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
