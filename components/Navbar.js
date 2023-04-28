import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

function Navbar(props) {
  const navigation = useNavigation();

  return (
    <View>
      <StatusBar />
      <View>
        <View style={style.divhear}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <View style={style.divshk}>
              <Text>{props.value1}</Text>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              position: "absolute",
              marginLeft: 50,
              color: "white",
              top: 42,
            }}
          >
            {props.value}
          </Text>
          <Image
            source={require("./Focused.jpg")}
            resizeMode="cover"
            style={{ width: 370, height: 30, position: "absolute", top: 90 }}
          ></Image>
        </View>
        <Image
          style={{
            width: 30,
            height: 30,
            position: "absolute",
            marginLeft: 350,
            marginTop: 40,
            zIndex: 999,
          }}
          source={require("./Search.jpg")}
        ></Image>
      </View>

      <View>
        <Image
          style={{
            width: 395,
            position: "absolute",
            top: 570,
            height: 200,
            zIndex: 99,
          }}
          resizeMode="contain"
          source={require("./Inboxbarposht.jpg")}
        ></Image>
      </View>
      <StatusBar />
    </View>
  );
}
const style = StyleSheet.create({
  divshk: {
    width: 30,
    height: 30,
    backgroundColor: "yellow",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginLeft: 10,
    position: "absolute",
    top: -25,
  },
  divhear: {
    height: 130,
    backgroundColor: "#2d7cd3",
    display: "flex",
    justifyContent: "center",
    zIndex: 10,
  },
});

export default Navbar;
