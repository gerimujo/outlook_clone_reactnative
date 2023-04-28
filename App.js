import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/Homescreen";
import Hyrje from "./components/Hyrje";
import Homepage from "./components/Homepage";

import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";

const App = () => {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
};

export default App;
