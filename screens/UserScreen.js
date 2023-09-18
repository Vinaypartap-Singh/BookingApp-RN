import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { themeColor } from "../theme/theme";

export default function UserScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route?.params;
  console.log(data);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Your Information",
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
    <View style={{ padding: 30 }}>
      <View style={{ gap: 30 }}>
        <View
          style={{
            borderWidth: 1,
            padding: 20,
            borderColor: "gray",
            borderRadius: 10,
          }}
        >
          <TextInput placeholder="First Name" autoCorrect={false} />
        </View>
        <View
          style={{
            borderWidth: 1,
            padding: 20,
            borderColor: "gray",
            borderRadius: 10,
          }}
        >
          <TextInput placeholder="Last Name" autoCorrect={false} />
        </View>
        <View
          style={{
            borderWidth: 1,
            padding: 20,
            borderColor: "gray",
            borderRadius: 10,
          }}
        >
          <TextInput placeholder="Email" autoCorrect={false} />
        </View>
        <View
          style={{
            borderWidth: 1,
            padding: 20,
            borderColor: "gray",
            borderRadius: 10,
          }}
        >
          <TextInput placeholder="Phone No" autoCorrect={false} />
        </View>
      </View>

      <TouchableOpacity style={{ marginTop: 30 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <View
              style={{ flexDirection: "row", gap: 20, alignItems: "center" }}
            >
              <Text
                style={{
                  color: themeColor.red,
                  fontSize: 20,
                  textDecorationLine: "line-through",
                }}
              >
                ₹{data.oldPrice * data.adults}
              </Text>
              <Text style={{ fontSize: 18 }}>
                ₹{data.newPrice * data.adults}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  color: "gray",
                  fontWeight: 500,
                  marginTop: 5,
                }}
              >
                You saved ₹{data.oldPrice - data.newPrice} rupees
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: themeColor.hotelCheckInOutText,
                paddingVertical: 15,
                paddingHorizontal: 20,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "white", fontWeight: 600 }}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
