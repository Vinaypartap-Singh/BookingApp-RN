import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { themeColor } from "../theme/theme";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { StarIcon } from "react-native-heroicons/outline";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function BookingScreen() {
  const bookings = useSelector((state) => state.bookings.bookings);
  const [bookingItems, setBookingItems] = useState([]);
  const uid = auth.currentUser.uid;

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, "users", `${uid}`);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const bookingData = docSnap.data().bookingDetails;
        setBookingItems(bookingData);
      }
    };

    getData();
  }, []);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Bookings",
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
    <View style={{ padding: 20 }}>
      {Object.keys(bookingItems).length > 0 ? (
        <ScrollView>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Your Bookings
          </Text>
          {Object.keys(bookingItems).map((key, index) => {
            const data = bookingItems[key];
            return data.name ? (
              <View
                key={index}
                style={{
                  backgroundColor: "white",
                  padding: 20,
                  borderRadius: 10,
                  marginTop: 20,
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
                    <Text
                      style={{ fontSize: 18, width: 210, fontWeight: "bold" }}
                    >
                      {data.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                      }}
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
                        {data.rating}
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
                    <Text
                      style={{ fontWeight: 500, marginTop: 4, fontSize: 16 }}
                    >
                      {data.startDate}
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
                    <Text
                      style={{ fontWeight: 500, marginTop: 4, fontSize: 16 }}
                    >
                      {data.endDate}
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
                      Rooms {data.adults} adults {data.children} children
                    </Text>
                  </View>
                </View>
              </View>
            ) : null;
          })}
        </ScrollView>
      ) : (
        <View style={{ marginTop: 300 }}>
          <Text style={{ fontWeight: 700, fontSize: 20, textAlign: "center" }}>
            No Bookings
          </Text>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
