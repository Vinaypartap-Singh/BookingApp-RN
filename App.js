import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import { themeColor } from "./theme/theme";
import { ModalPortal } from "react-native-modals";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StackNavigator />
        <ModalPortal />
        <StatusBar style="light" />
      </View>
    </Provider>
  );
}
