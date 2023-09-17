import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { StatusBar } from "expo-status-bar";

export default function MapScreen() {
  const route = useRoute();
  const data = route?.params;
  const mapView = useRef(null);
  const coordinates = [];
  const details = data.searchPlaces.map((item) =>
    item.properties?.map((data) => {
      coordinates.push({
        latitude: Number(data.latitude),
        longitude: Number(data.longitude),
      });
    })
  );

  useEffect(() => {
    mapView.current.fitToCoordinates(coordinates, {
      edgePadding: { top: 110, left: 110, right: 110, bottom: 110 },
    });
  }, []);

  return (
    <View>
      <StatusBar style="dark" />
      <MapView ref={mapView} style={{ width: "100%", height: "100%" }}>
        {route.params.searchPlaces.map((item) =>
          item.properties.map((property) => {
            return (
              <Marker
                title={property.name}
                coordinate={{
                  latitude: Number(property.latitude),
                  longitude: Number(property.longitude),
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#003580",
                    paddingHorizontal: 7,
                    paddingVertical: 4,
                    borderRadius: 4,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      color: "white",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    ₹{property.newPrice}
                  </Text>
                </TouchableOpacity>
              </Marker>
            );
          })
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({});
