import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { themeColor } from "../theme/theme";
import {
  BellIcon,
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Header from "../components/Header";
import DatePicker from "react-native-date-ranges";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [rooms, setRooms] = useState("1");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");

  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState();
  console.log(selectedDate);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
      headerTitleStyle: {
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: themeColor.primaryColor,
      },
      headerRight: () => <BellIcon color="white" style={{ marginRight: 20 }} />,
    });
  }, []);

  const customButton = (onConfirm) => {
    return (
      <Button
        title="Submit"
        color={themeColor.primaryColor}
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 18 },
        }}
        primary
      />
    );
  };

  return (
    <>
      <View>
        <Header />

        {/* Options */}
        <View style={{ paddingHorizontal: 30, marginTop: 20, gap: 20 }}>
          {/* Destination */}

          <TouchableOpacity
            style={{
              borderWidth: 1,
              paddingVertical: 20,
              paddingHorizontal: 20,
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
              gap: 10,
            }}
          >
            <MagnifyingGlassIcon color={"black"} size={24} />
            <TextInput
              placeholder="Enter Your Destination"
              placeholderTextColor={"gray"}
            />
          </TouchableOpacity>

          {/* Date Picker */}

          <TouchableOpacity
            style={{
              borderWidth: 1,
              paddingVertical: 20,
              paddingHorizontal: 20,
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
              gap: 0,
            }}
          >
            <CalendarDaysIcon color={"black"} size={24} />
            <DatePicker
              style={{ width: "95%", height: 30, borderWidth: 0 }}
              customStyles={{
                placeholderText: { fontSize: 14 },
                headerStyle: {
                  backgroundColor: themeColor.primaryColor,
                },
                contentText: {
                  fontSize: 14,
                },
              }}
              selectedBgColor={themeColor.primaryColor}
              customButton={(onConfirm) => customButton(onConfirm)}
              onConfirm={(startDate, endDate) =>
                setSelectedDate(startDate, endDate)
              }
              centerAlign
              allowFontScaling={false}
              placeholder={"Apr 27, 2018 → Jul 10, 2018"}
              mode={"range"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={{
              borderWidth: 1,
              paddingVertical: 20,
              paddingHorizontal: 20,
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
              gap: 10,
            }}
          >
            <UserIcon color={"black"} size={24} />
            <TextInput
              placeholder="1 room + 2 adults + 0 children"
              placeholderTextColor={"gray"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              onPress={() => setModalVisible(!modalVisible)}
              style={{
                backgroundColor: themeColor.primaryColor,
              }}
              textStyle={{ color: "white" }}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select rooms and guests" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 300 }}>
          <View>
            <Text>Rooms</Text>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
}

const styles = StyleSheet.create({});
