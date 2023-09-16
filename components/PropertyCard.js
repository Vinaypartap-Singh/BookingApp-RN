import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function PropertyCard({
  adults,
  children,
  place,
  rooms,
  selectedDate,
  property,
  availableRooms,
}) {
  return (
    <View style={{ marginVertical: 20, paddingHorizontal: 20 }}>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          flexDirection: "row",
          gap: 10,
        }}
      >
        <View>
          <Image
            source={{ uri: property.image }}
            style={{ height: 250, width: 150, borderRadius: 10 }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>{property.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
