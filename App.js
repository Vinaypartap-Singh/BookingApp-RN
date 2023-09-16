import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import { themeColor } from "./theme/theme";
import { ModalPortal } from "react-native-modals";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StackNavigator />
      <ModalPortal />
      <StatusBar style="light" />
    </View>
  );
}
