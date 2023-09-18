import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { HeartIcon } from "react-native-heroicons/outline";
import { themeColor } from "../theme/theme";
import { StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

export default function PropertyCard({
  adults,
  children,
  place,
  rooms,
  selectedDate,
  property,
  availableRooms,
}) {
  const navigation = useNavigation();
  console.log(adults);
  return (
    <>
      <View style={{ marginVertical: 20, paddingHorizontal: 20 }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("PropertyInfo", {
              name: property.name,
              rating: property.rating,
              oldPrice: property.oldPrice,
              newPrice: property.newPrice,
              photos: property.photos,
              adults: adults,
              children: children,
              rooms: rooms,
              selectedDates: selectedDate,
              availableRooms: availableRooms,
            })
          }
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View>
            <Image
              source={{ uri: property.image }}
              style={{ height: 280, width: 150, borderRadius: 10 }}
            />
          </View>
          <View>
            <View style={{ marginTop: 20, flexDirection: "row" }}>
              <Text style={{ width: 200 }}>{property.name}</Text>
              <HeartIcon color={themeColor.red} size={18} />
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                alignItems: "center",
                gap: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: themeColor.primaryColor,
                  padding: 6,
                  borderRadius: 50,
                }}
              >
                <StarIcon color={"white"} size={14} />
              </View>
              <View>
                <Text>{property.rating}</Text>
              </View>
              <View
                style={{
                  backgroundColor: themeColor.placeBtn,
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  borderRadius: 10,
                }}
              >
                <Text>Genius Level</Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  width: 220,
                  marginTop: 10,
                  fontWeight: 500,
                  color: "gray",
                }}
              >
                {property.address.length > 50
                  ? property.address.substr(0, 50)
                  : property}
              </Text>
              <Text style={{ marginTop: 5, fontWeight: "500", fontSize: 14 }}>
                Price for 1 night and {adults} adults
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <Text
                style={{
                  color: themeColor.red,
                  fontSize: 18,
                  textDecorationLine: "line-through",
                }}
              >
                ₹{property.oldPrice * adults}
              </Text>
              <Text style={{ fontWeight: "500" }}>
                ₹{property.newPrice * adults}
              </Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <Text style={{ fontWeight: "500", color: "gray" }}>
                Deluxe Room
              </Text>
              <Text style={{ fontWeight: "500", color: "gray" }}>
                Hotel Room 1 Bed
              </Text>
            </View>
            <View style={{ marginTop: 5, alignItems: "flex-start" }}>
              <View
                style={{
                  backgroundColor: themeColor.placeBtn,
                  paddingHorizontal: 8,
                  paddingVertical: 6,
                  borderRadius: 5,
                }}
              >
                <Text>Limited Time Deal</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
