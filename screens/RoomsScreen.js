import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { themeColor } from "../theme/theme";
import { InformationCircleIcon } from "react-native-heroicons/outline";
import HotelServices from "../components/HotelServices";

export default function RoomsScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const roomsInfo = route?.params;
  const [selectedRoom, setSelectedRoom] = useState();
  const [roomInfo, setRoomInfo] = useState();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Available Rooms",
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
    <>
      <ScrollView>
        <View style={{ padding: 20 }}>
          {roomsInfo.rooms?.map((data, index) => {
            const isSelected = selectedRoom === data.name;
            return (
              <View
                style={{
                  paddingHorizontal: 20,
                  marginTop: 20,
                  backgroundColor: "white",
                  padding: 20,
                  borderRadius: 10,
                }}
                key={index}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: themeColor.hotelCheckInOutText,
                      fontWeight: "bold",
                      fontSize: 18,
                    }}
                  >
                    {data.name}
                  </Text>
                  <InformationCircleIcon
                    color={themeColor.hotelCheckInOutText}
                  />
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text style={{ color: "gray", fontWeight: "700" }}>
                    {data.payment}
                  </Text>
                </View>
                <View style={{ alignItems: "flex-start", marginTop: 15 }}>
                  <View
                    style={{
                      backgroundColor: themeColor.propertyInfoTS,
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      borderRadius: 5,
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "700" }}>
                      Free Cancellation Available
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    marginTop: 15,
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: themeColor.red,
                      textDecorationLine: "line-through",
                      fontSize: 18,
                    }}
                  >
                    ₹{roomsInfo.oldPrice}
                  </Text>
                  <Text
                    style={{ color: "black", fontWeight: 500, fontSize: 18 }}
                  >
                    ₹{roomsInfo.newPrice}
                  </Text>
                </View>
                <View style={{ marginTop: 15 }}>
                  <HotelServices />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedRoom(data.name);
                    setRoomInfo(data);
                  }}
                  style={{
                    marginTop: 15,
                    borderWidth: 1,
                    paddingVertical: 10,
                    borderRadius: 5,
                    backgroundColor: isSelected
                      ? themeColor.hotelCheckInOutText
                      : "transparent",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: isSelected ? "white" : "black",
                    }}
                  >
                    {isSelected ? "Selected" : "Select"}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>

      {roomInfo ? (
        <TouchableOpacity
          style={{
            backgroundColor: themeColor.primaryColor,
            paddingVertical: 20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 18,
              color: "white",
            }}
          >
            Reserve
          </Text>
        </TouchableOpacity>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({});
