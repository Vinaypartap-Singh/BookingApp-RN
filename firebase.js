import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBB7nCn0_JnTS-Jk_Jd7EkIKgRiWEIz2Gg",
  authDomain: "booking-app-rn.firebaseapp.com",
  projectId: "booking-app-rn",
  storageBucket: "booking-app-rn.appspot.com",
  messagingSenderId: "794885464032",
  appId: "1:794885464032:web:3ea02722812f747a4e5585",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);
