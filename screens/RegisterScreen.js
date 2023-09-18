import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { themeColor } from "../theme/theme";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <StatusBar style="auto" />
      <View>
        <Text
          style={{
            color: themeColor.primaryColor,
            fontWeight: "bold",
            fontSize: 24,
            textAlign: "center",
          }}
        >
          Register
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontWeight: 600,
            color: "grey",
            textAlign: "center",
          }}
        >
          Create a new account
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            paddingHorizontal: 20,
            paddingVertical: 15,
            marginHorizontal: 30,
            borderRadius: 10,
          }}
        >
          <TextInput
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            paddingHorizontal: 20,
            paddingVertical: 15,
            marginHorizontal: 30,
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            paddingHorizontal: 20,
            paddingVertical: 15,
            marginHorizontal: 30,
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <TextInput
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          disabled={password.length < 8 && email === "" && username === ""}
          style={{
            backgroundColor: themeColor.primaryColor,
            paddingHorizontal: 50,
            paddingVertical: 15,
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ fontWeight: 600, color: "white" }}>Signup</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 15,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontWeight: 600,
            color: "grey",
          }}
        >
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              marginLeft: 10,
              fontWeight: "bold",
              color: themeColor.primaryColor,
            }}
          >
            Login Now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
