import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { themeColor } from "../theme/theme";
import { StarIcon } from "react-native-heroicons/outline";

export default function ConfirmationScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route?.params;
  const hotelInfo = data.data;
  console.log(hotelInfo);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Confirm Booking",
      headerTitleStyle: {
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: themeColor.primaryColor,
      },
    });
  }, []);

  return (
    <View style={{ padding: 10 }}>
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 18, width: 240, fontWeight: "bold" }}>
              {hotelInfo.name}
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View
                style={{
                  marginTop: 10,
                  backgroundColor: themeColor.primaryColor,
                  padding: 7,
                  borderRadius: 50,
                }}
              >
                <StarIcon color={"white"} size={18} />
              </View>
              <Text style={{ fontWeight: 600, marginTop: 9 }}>
                {hotelInfo.rating}
              </Text>
              <View
                style={{
                  backgroundColor: themeColor.primaryColor,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 10,
                  marginTop: 8,
                }}
              >
                <Text style={{ color: "white" }}>Genius Level</Text>
              </View>
            </View>
          </View>

          <View>
            <View
              style={{
                backgroundColor: themeColor.propertyInfoTS,
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "white" }}>Travel Sustainable</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 10, marginTop: 20 }}>
          <View>
            <Text
              style={{
                color: themeColor.hotelCheckInOutText,
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              Check In
            </Text>
            <Text style={{ fontWeight: 500, marginTop: 4, fontSize: 16 }}>
              {hotelInfo.startDate}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: themeColor.hotelCheckInOutText,
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              Check Out
            </Text>
            <Text style={{ fontWeight: 500, marginTop: 4, fontSize: 16 }}>
              {hotelInfo.endDate}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 10, marginTop: 20 }}>
          <View>
            <Text style={{ fontWeight: 700, fontSize: 16 }}>
              Rooms and Guests
            </Text>
            <Text
              style={{
                color: themeColor.hotelCheckInOutText,
                fontWeight: 500,
                fontSize: 16,
                marginTop: 4,
              }}
            >
              Rooms {hotelInfo.adults} adults {hotelInfo.children} children
            </Text>
          </View>
        </View>

        <View style={{ alignItems: "start" }}>
          <TouchableOpacity
            style={{
              marginTop: 15,
              backgroundColor: themeColor.primaryColor,
              paddingHorizontal: 20,
              paddingVertical: 14,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: 600 }}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
