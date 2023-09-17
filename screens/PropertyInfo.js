import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { themeColor } from "../theme/theme";
import { StarIcon } from "react-native-heroicons/outline";

export default function PropertyInfo() {
  const navigation = useNavigation();
  const route = useRoute();
  const propertyInfo = route?.params;
  //   console.log("Property Info ", propertyInfo);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${propertyInfo.name}`,
      headerTitleStyle: {
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: themeColor.primaryColor,
      },
    });
  }, []);

  const difference = propertyInfo.oldPrice - propertyInfo.newPrice;
  const discount = (Math.abs(difference) / propertyInfo.oldPrice) * 100;

  return (
    <SafeAreaView>
      <ScrollView style={{ marginTop: 20, paddingHorizontal: 10 }}>
        {/* Images */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 10,
          }}
        >
          {propertyInfo.photos.slice(0, 6).map((photo, index) => {
            return (
              <Image
                key={index}
                source={{ uri: photo.image }}
                style={{
                  width: 130,
                  height: 130,
                  objectFit: "cover",
                  borderRadius: 5,
                }}
              />
            );
          })}

          <TouchableOpacity
            style={{
              alignItems: "center",
              backgroundColor: themeColor.primaryColor,
              paddingHorizontal: 25,
              paddingVertical: 15,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Show More
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
        {/* Hotel Info */}
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ alignItems: "flex-start" }}>
            <Text style={{ fontWeight: "500", fontSize: 20 }}>
              {propertyInfo.name}
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
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
              <Text style={{ fontWeight: "bold" }}>{propertyInfo.rating}+</Text>
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
          </View>
          <View>
            <View
              style={{
                backgroundColor: themeColor.propertyInfoTS,
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 5,
              }}
            >
              <Text>Travel Sustianable</Text>
            </View>
          </View>
        </View>

        {/* Other Info */}

        <View
          style={{
            borderTopWidth: 4,
            marginTop: 20,
            borderTopColor: "#dedede",
          }}
        >
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              fontWeight: "500",
              color: "gray",
            }}
          >
            Price for 1 night, {propertyInfo.adults} adults
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              gap: 10,
            }}
          >
            <Text
              style={{
                color: themeColor.red,
                textDecorationLine: "line-through",
                fontSize: 18,
              }}
            >
              ₹{propertyInfo.oldPrice}
            </Text>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              ₹{propertyInfo.newPrice}
            </Text>
          </View>
          <View style={{ alignItems: "flex-start" }}>
            <View
              style={{
                marginTop: 10,
                backgroundColor: themeColor.propertyInfoTS,
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 16 }}>{discount.toFixed(0)}% Off</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderTopWidth: 4,
            marginTop: 20,
            borderTopColor: "#dedede",
          }}
        >
          <View style={{ flexDirection: "row", gap: 30, marginTop: 20 }}>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>Check In</Text>
              <Text
                style={{
                  marginTop: 10,
                  color: themeColor.hotelCheckInOutText,
                  fontWeight: "bold",
                }}
              >
                {propertyInfo.selectedDates.startDate}
              </Text>
            </View>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                Check Out
              </Text>
              <Text
                style={{
                  marginTop: 10,
                  color: themeColor.hotelCheckInOutText,
                  fontWeight: "bold",
                }}
              >
                {propertyInfo.selectedDates.endDate}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 30, marginTop: 20 }}>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                Rooms and Guests
              </Text>
              <Text
                style={{
                  marginTop: 10,
                  color: themeColor.hotelCheckInOutText,
                  fontWeight: "bold",
                }}
              >
                {propertyInfo.rooms} Room(s) {propertyInfo.adults} Adult(s){" "}
                {propertyInfo.children} Children(s)
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
