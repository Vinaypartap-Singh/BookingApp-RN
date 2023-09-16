import {
  Button,
  Image,
  ScrollView,
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
  PlusIcon,
  MinusIcon,
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
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedOffer, setSelectedOffer] = useState(0);
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

  const offers = [
    {
      id: 1,
      title: "Guests",
      description: "You are at genius level one in our loyalty program.",
    },
    {
      id: 2,
      title: "10% Discounts",
      description: "Enjoy Discounts at participating worldwide events.",
    },
  ];

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
              placeholder={"Select You Dates"}
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
              placeholder={`${rooms} room + ${adults} adults + ${children} children`}
              placeholderTextColor={themeColor.primaryColor}
            />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "600",
                color: themeColor.primaryColor,
              }}
            >
              Travel More Spend Less
            </Text>

            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {offers.map((data, index) => {
                const isActive = data.id == selectedOffer;

                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setSelectedOffer(data.id)}
                    style={{
                      width: 250,
                      backgroundColor: isActive
                        ? themeColor.primaryColor
                        : "white",
                      marginRight: 20,
                      marginVertical: 10,
                      borderRadius: 10,
                      paddingLeft: 20,
                      paddingRight: 10,
                      paddingVertical: 30,
                    }}
                  >
                    <Text
                      style={{
                        color: isActive ? "white" : "black",
                        fontSize: 20,
                        fontWeight: "500",
                      }}
                    >
                      {data.title}
                    </Text>
                    <Text
                      style={{
                        color: isActive ? "white" : "black",
                        fontSize: 14,
                        fontWeight: "500",
                        lineHeight: 20,
                        marginTop: 10,
                      }}
                    >
                      {data.description}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Image
              source={{
                uri: "https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png",
              }}
              style={{ width: 250, height: 50 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Modal View */}
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
          <View
            style={{
              marginTop: 40,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "600", fontSize: 20 }}>Rooms</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
              }}
            >
              <TouchableOpacity
                onPress={() => setRooms(Math.max(1, rooms - 1))}
                style={{
                  backgroundColor: themeColor.primaryColor,
                  padding: 5,
                  borderRadius: 50,
                }}
              >
                <MinusIcon color={"white"} size={16} />
              </TouchableOpacity>
              <Text>{rooms}</Text>
              <TouchableOpacity
                onPress={() => setRooms((c) => c + 1)}
                style={{
                  backgroundColor: themeColor.primaryColor,
                  padding: 5,
                  borderRadius: 50,
                }}
              >
                <PlusIcon color={"white"} size={16} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              marginTop: 40,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "600", fontSize: 20 }}>Adults</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
              }}
            >
              <TouchableOpacity
                onPress={() => setAdults(Math.max(1, rooms - 1))}
                style={{
                  backgroundColor: themeColor.primaryColor,
                  padding: 5,
                  borderRadius: 50,
                }}
              >
                <MinusIcon color={"white"} size={16} />
              </TouchableOpacity>
              <Text>{adults}</Text>
              <TouchableOpacity
                onPress={() => setAdults((c) => c + 1)}
                style={{
                  backgroundColor: themeColor.primaryColor,
                  padding: 5,
                  borderRadius: 50,
                }}
              >
                <PlusIcon color={"white"} size={16} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              marginTop: 40,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "600", fontSize: 20 }}>Children</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
              }}
            >
              <TouchableOpacity
                onPress={() => setChildren(Math.max(0, children - 1))}
                style={{
                  backgroundColor: themeColor.primaryColor,
                  padding: 5,
                  borderRadius: 50,
                }}
              >
                <MinusIcon color={"white"} size={16} />
              </TouchableOpacity>
              <Text>{children}</Text>
              <TouchableOpacity
                onPress={() => setChildren((c) => c + 1)}
                style={{
                  backgroundColor: themeColor.primaryColor,
                  padding: 5,
                  borderRadius: 50,
                }}
              >
                <PlusIcon color={"white"} size={16} />
              </TouchableOpacity>
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
}

const styles = StyleSheet.create({});
