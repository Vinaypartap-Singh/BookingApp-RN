import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function SearchResults({ data, input, setInput }) {
  const navigation = useNavigation();
  // Filter the data based on the input value
  const filteredData =
    input === ""
      ? data // Display all data when input is empty
      : data.filter((item) =>
          item.place.toLowerCase().includes(input.toLowerCase())
        );

  return (
    <View>
      <FlatList
        data={filteredData} // Use the filtered data for rendering
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => {
              navigation.navigate("Home", { destination: item.place });
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
                marginVertical: 20,
                borderWidth: 1,
                paddingVertical: 10,
                paddingHorizontal: 30,
                justifyContent: "flex-start",
                borderRadius: 10,
                borderColor: "gray",
              }}
            >
              <Image
                source={{ uri: item.placeImage }}
                style={{ width: 90, height: 90, borderRadius: 10 }}
              />
              <View style={{ gap: 5 }}>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  {item.place}
                </Text>
                <Text style={{ fontWeight: 500, fontSize: 15 }}>
                  {item.shortDescription}
                </Text>
                <Text style={{ fontWeight: 500, fontSize: 15 }}>
                  {item.properties.length} Properties
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()} // Provide a unique key
      />
    </View>
  );
}

const styles = StyleSheet.create({});
