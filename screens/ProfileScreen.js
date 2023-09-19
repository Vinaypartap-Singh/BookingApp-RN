import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { ArrowRightOnRectangleIcon } from "react-native-heroicons/outline";
import BookingScreen from "./BookingScreen";
import { useNavigation } from "@react-navigation/native";
import { themeColor } from "../theme/theme";
import { useLayoutEffect } from "react";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useState } from "react";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const uid = auth.currentUser.uid;
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      let docRef = doc(db, "users", `${uid}`);
      let docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());
      }
    };

    getData();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Account Details",
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
    <SafeAreaView>
      <StatusBar style="dark" />
      <View
        style={{
          marginVertical: 30,
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          }}
          style={{ width: 70, height: 70, borderRadius: 1000 }}
        />
        <View style={{ alignItems: "flex-end", gap: 5 }}>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>
            {data?.username}
          </Text>
          <View
            style={{ flexDirection: "row", alignItems: "flex-end", gap: 5 }}
          >
            <TouchableOpacity>
              <Text style={{ fontSize: 16, fontWeight: 500 }}>Sign Out</Text>
            </TouchableOpacity>
            <ArrowRightOnRectangleIcon color={"black"} size={20} />
          </View>
        </View>
      </View>
      <BookingScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
