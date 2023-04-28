import Homepage from "./Homepage";
import { FontAwesome } from "@expo/vector-icons";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./Homescreen";
import { Octicons, EvilIcons } from "@expo/vector-icons";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import Create from "./Create";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Navbar from "./Navbar";
import Messagehap from "./Messagehap";
import Hyrje from "./Hyrje";
import { StatusBar } from "expo-status-bar";
import {
  TouchableHighlight,
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { LogBox } from "react-native";
import React from "react";
import { useEffect } from "react";
import { useIsDrawerOpen } from "@react-navigation/drawer";
import Login from "./Login";
import { useIsFocused } from "@react-navigation/native";
import Sendmessage from "./Sendmess";
import Sendlist1 from "./Sendlist1";
import { hydrate } from "react-dom";
import { useCallback } from "react";
import { DrawerNavigationState } from "@react-navigation/native";
import { DrawerStatus } from "@react-navigation/native";
import { useDrawerStatus } from "@react-navigation/drawer";

import react from "react";

//LogBox.ignoreAllLogs(true);

export function content({ navigation }) {
  LogBox.ignoreAllLogs(true);
  const [acc, SetAcc] = useState([]);
  //const isFocused1 = useIsDrawerOpen();
  const isFocused = useIsFocused();
  const isDrawerOpen = useDrawerStatus() === "open";

  useEffect(() => {
    if (!isDrawerOpen) {
      setOpen1("none");
    }
  }, [isDrawerOpen]);

  const fetchEmailData = useCallback(() => {
    fetch("https://74f2-46-252-40-254.ngrok-free.app/api/marrhyrjedata1", {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        SetAcc(data["data"]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      fetch("https://74f2-46-252-40-254.ngrok-free.app/api/marrhyrjedata1", {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          SetAcc(data["data"]);
          setemail2(data["email"]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [isDrawerOpen]);
  const [emaiw, setemail2] = useState("");
  useEffect(() => {
    fetch("https://74f2-46-252-40-254.ngrok-free.app/api/marrhyrjedata1", {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        SetAcc(data["data"]);
        setemail2(data["email"]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [open1, setOpen1] = useState("none");
  // const isDrawerOpe ;

  const navigatecreate = () => {
    setOpen1("none");

    navigation.navigate("Create");
  };
  const navigationhyr = () => {
    setOpen1("none");

    navigation.navigate("Login");
  };
  const hyracc = (e, id) => {
    e.preventDefault();
    const data = new FormData();
    data.append("id", id);

    fetch("https://74f2-46-252-40-254.ngrok-free.app/api/hyrracc1", {
      body: data,
      method: "POST",
    })
      .then((r) => r.json())
      .then((d) => {
        if (d["proces"] == "done") {
          navigation.closeDrawer();
          navigation.navigate("Homepage");
        }
      });
  };
  return (
    <View>
      <View>
        <TouchableHighlight
          onPress={() => setOpen1(open1 == "none" ? "flex" : "none")}
        >
          <View
            style={{
              backgroundColor: "black",
              width: 395,
              height: 700,
              zIndex: 2000,
              opacity: 0.3,
              position: "absolute",
              top: 0,
              left: 0,

              display: open1,
            }}
          ></View>
        </TouchableHighlight>
      </View>
      <View
        style={{ position: "absolute", zIndex: 2001, top: 610, display: open1 }}
      >
        <View
          style={{
            display: "flex",
            height: 220,
            backgroundColor: "white",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            width: 400,
            elevation: 5,
          }}
        >
          <Ionicons
            name="md-remove-outline"
            size={70}
            style={{ position: "absolute", top: -25, left: 150 }}
            color="black"
          />
          <TouchableOpacity onPress={() => navigationhyr()}>
            <MaterialIcons
              name="inbox"
              style={{ marginLeft: 18, marginTop: 50 }}
              size={24}
              color={"grey"}
            />
            <Text
              style={{
                fontSize: 15,
                position: "absolute",
                marginLeft: 73,
                top: 40,
              }}
            >
              Add an account
            </Text>
            <Text
              style={{
                fontSize: 15,
                position: "absolute",
                marginLeft: 73,
                top: 60,
                color: "grey",
              }}
            >
              Outlook, Exchange, Gmail, iCloud..
            </Text>
          </TouchableOpacity>
          <MaterialIcons
            name="groups"
            style={{ marginLeft: 18, marginTop: 35 }}
            size={24}
            color={"grey"}
          />
          <Text
            style={{
              fontSize: 15,
              position: "absolute",
              marginLeft: 73,
              top: 100,
            }}
          >
            Add a shared mailbox
          </Text>
          <Text
            style={{
              fontSize: 15,
              position: "absolute",
              marginLeft: 73,
              top: 120,
              color: "grey",
            }}
          >
            Shared and delegated mailboxes
          </Text>
          <TouchableOpacity
            onPress={() => navigatecreate()}
            style={{ backgroundColor: "transparent" }}
          >
            <View>
              <AntDesign
                name="plus"
                style={{ marginLeft: 18, marginTop: 35 }}
                size={24}
                color={"grey"}
              />
              <Text
                style={{
                  fontSize: 15,
                  position: "absolute",
                  marginLeft: 73,
                  top: 30,
                }}
              >
                Create new account
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  position: "absolute",
                  left: 73,
                  marginTop: 50,
                  zIndex: 5000,
                  color: "grey",
                }}
              >
                Free email and calendar
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "rgb(241, 237, 237)",
          width: 71,
          height: 840,

          borderColor: "black",
          borderWidth: 0,
          borderStyle: "solid",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Homepage")}>
          <Image
            resizeMode="contain"
            style={{ width: 50, marginLeft: 10, marginTop: 7 }}
            source={require("./Homeanash.jpg")}
          ></Image>
        </TouchableOpacity>
        {acc.map((m) => (
          <TouchableOpacity
            key="1"
            onPress={(e) => {
              hyracc(e, m.id);
            }}
          >
            <View key="2" style={style.account}>
              <Text key="3">{m.sh}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          onPress={() => setOpen1(open1 == "none" ? "flex" : "none")}
        >
          <Image
            style={{ width: 60, marginLeft: 7 }}
            resizeMode="contain"
            source={require("./Openacc.jpg")}
          ></Image>
        </TouchableOpacity>
        <MaterialIcons
          name="play-circle-outline"
          size={27}
          style={{ position: "absolute", marginTop: 650, marginLeft: 20 }}
          color="grey"
        />
        <Octicons
          name="question"
          style={{ position: "absolute", marginTop: 700, marginLeft: 20 }}
          size={24}
          color="grey"
        />
        <AntDesign
          name="setting"
          style={{ position: "absolute", marginTop: 750, marginLeft: 20 }}
          size={24}
          color="grey"
        />
      </View>
      <View
        style={{
          position: "absolute",
          left: 70,
          top: 0,
          borderBottomColor: "rgb(241, 237, 237)",
          borderBottomWidth: 1,
          borderStyle: "solid",
          width: 252,
          height: 85,
        }}
      >
        <Text
          style={{
            marginTop: 20,
            fontSize: 20,
            fontWeight: 400,
            marginLeft: 10,
          }}
        >
          Outlook
        </Text>
        <Text style={{ marginLeft: 10 }}>{emaiw}</Text>
      </View>
      <View
        style={{
          width: 252,
          height: 200,
          position: "absolute",
          top: 85,
          left: 70,
          borderColor: "black",
          borderWidth: 0,
          borderStyle: "solid",
          width: 252,
          height: 705,
        }}
      >
        <Text
          style={{
            marginLeft: 20,
            marginTop: 12,
            fontSize: 15,
            fontWeight: 500,
          }}
        >
          Folders
        </Text>
        <Octicons
          style={{ position: "absolute", top: 12, left: 210 }}
          name="pencil"
          size={20}
          color="grey"
        />
        <TouchableOpacity onPress={() => navigation.navigate("Homepage")}>
          <MaterialIcons
            name="inbox"
            style={{ marginLeft: 18, marginTop: 25 }}
            size={24}
            color={"grey"}
          />
          <Text style={{ position: "absolute", top: 25, marginLeft: 65 }}>
            Inbox
          </Text>
        </TouchableOpacity>
        <FontAwesome
          name="pencil-square-o"
          style={{ marginLeft: 19, marginTop: 25 }}
          size={24}
          color={"grey"}
        />
        <Text style={{ position: "absolute", top: 110, marginLeft: 65 }}>
          Draft
        </Text>
        <Octicons
          name="archive"
          style={{ marginLeft: 18, marginTop: 25 }}
          size={24}
          color={"grey"}
        />
        <Text style={{ position: "absolute", top: 160, marginLeft: 65 }}>
          Archive
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Sendlist")}>
          <Ionicons
            name="send-sharp"
            style={{ marginLeft: 18, marginTop: 25 }}
            size={24}
            color={"grey"}
          />
          <Text style={{ position: "absolute", top: 30, marginLeft: 65 }}>
            Sent
          </Text>
        </TouchableOpacity>
        <MaterialIcons
          name="groups"
          style={{ marginLeft: 18, marginTop: 25 }}
          size={24}
          color={"grey"}
        />
        <Text style={{ position: "absolute", top: 260, marginLeft: 65 }}>
          Groups
        </Text>
        <AntDesign
          name="delete"
          style={{ marginLeft: 18, marginTop: 25 }}
          size={24}
          color={"grey"}
        />
        <Text style={{ position: "absolute", top: 310, marginLeft: 65 }}>
          Deleted
        </Text>
        <AntDesign
          name="folder1"
          style={{ marginLeft: 18, marginTop: 25 }}
          size={24}
          color={"grey"}
        />
        <Text style={{ position: "absolute", top: 360, marginLeft: 65 }}>
          Junk
        </Text>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  account: {
    borderColor: "green",
    borderWidth: 3,
    borderStyle: "solid",
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginBottom: 7,
    backgroundColor: "yellow",
  },
});

function Drawer() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: 322,
        },
      }}
      drawerPosition="right"
      drawerContent={content}
    >
      <Drawer.Screen
        key="12"
        name="Hom"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Drawer.Screen
        key="7"
        name="Homepage"
        options={{ headerShown: false }}
        component={Hyrje}
      ></Drawer.Screen>
      <Drawer.Screen key="8" name="Home" component={Navbar}></Drawer.Screen>
      <Drawer.Screen
        key="9"
        name="Create"
        options={{ headerShown: false }}
        component={Create}
      />
      <Drawer.Screen
        key="10"
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      />
      <Drawer.Screen
        key="11"
        name="Sendmessage"
        options={{ headerShown: false }}
        component={Sendmessage}
      />
      <Drawer.Screen
        key="12"
        name="Messagehap"
        options={{ headerShown: false }}
        component={Messagehap}
      />
      <Drawer.Screen
        key="13"
        name="Sendlist"
        options={{ headerShown: false }}
        component={Sendlist1}
      />
    </Drawer.Navigator>
  );
}
export default Drawer;
