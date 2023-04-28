import { View, Text, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native";
import { ScrollView } from "react-native";
import { useState, useCallback } from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useIsFocused } from "@react-navigation/native";
import { useDrawerStatus } from "@react-navigation/drawer";

function Hyrje({ navigation }) {
  const isDrawerOpen = useDrawerStatus() === "open";
  useEffect(() => {
    if (!isDrawerOpen) {
      console.log("draweri u mbyll");
      fetch("https://74f2-46-252-40-254.ngrok-free.app/api/marrinbox1", {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      })
        .then((r) => r.json())
        .then((d) => {
          setInbox(d["mesazhe"]);
          setSh(d["sh"]);
        });
    }
  }, [isDrawerOpen]);
  const fetchEmailData = useCallback(() => {
    fetch("https://74f2-46-252-40-254.ngrok-free.app/api/marrinbox1", {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((r) => r.json())
      .then((d) => {
        setInbox(d["mesazhe"]);
        setSh(d["sh"]);
      });
  }, []);
  const [sh, setSh] = useState("");
  const isFocused = useIsFocused();
  useEffect(() => {
    console.log("useEffect executed! isFocused:", isFocused);

    if (isFocused) {
      console.log("fetching inbox data...");
      fetch("https://74f2-46-252-40-254.ngrok-free.app/api/marrinbox1", {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      })
        .then((r) => r.json())
        .then((d) => {
          setInbox(d["mesazhe"]);
          setSh(d["sh"]);
          console.log("inbox data fetched:", d);
        })
        .catch((e) => {
          console.log("Error fetching inbox data:", e);
        });
    }
  }, [isFocused]);

  const [inbox, setInbox] = useState([]);

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY === 0) {
      setDisvogel("none");
      setdismadh("flex");
    } else {
      setDisvogel("flex");
      setdismadh("none");
    }
  };
  const [dismadh, setdismadh] = useState("flex");
  const [disvogel, setDisvogel] = useState("none");

  const openmes = (e, d) => {
    e.preventDefault();
    const data = new FormData();
    data.append("id", d);
    data.append("status", "inbox");
    fetch("https://74f2-46-252-40-254.ngrok-free.app/api/hapmesazhe1", {
      body: data,
      method: "POST",
    })
      .then((r) => r.json())
      .then((d) => {
        if (d["proces"] == "done") {
          navigation.navigate("Messagehap");
        }
      });
  };
  return (
    <View>
      <View
        style={{
          width: 120,
          height: 53,
          backgroundColor: "#2d7cd3",
          position: "absolute",
          top: 670,
          left: 250,
          zIndex: 5000,
          borderRadius: 50,
          display: disvogel,
        }}
      >
        <FontAwesome
          name="angle-up"
          style={{ position: "absolute", left: 75 }}
          size={42}
          color="white"
        />
        <TouchableOpacity onPress={() => navigation.navigate("Sendmessage")}>
          <Entypo
            name="new-message"
            style={{ position: "absolute", top: 12, left: 20 }}
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <View
          style={{
            width: 1,
            height: 40,
            borderLeftColor: "white",
            borderLeftWidth: 1,
            borderLeftStyle: "solid",
            position: "absolute",
            left: 60,
            top: 6,
          }}
        ></View>
      </View>

      <View
        style={{
          display: dismadh,
          width: 190,
          height: 53,
          backgroundColor: "#2d7cd3",
          position: "absolute",
          top: 670,
          left: 180,
          zIndex: 2000,
          borderRadius: 50,
        }}
      >
        <FontAwesome
          name="angle-up"
          style={{ position: "absolute", left: 145 }}
          size={42}
          color="white"
        />
        <TouchableOpacity onPress={() => navigation.navigate("Sendmessage")}>
          <Text
            style={{
              position: "absolute",
              top: 15,
              fontSize: 14,
              left: 40,
              fontWeight: 500,
              color: "white",
            }}
          >
            New email
          </Text>
        </TouchableOpacity>
        <Entypo
          name="new-message"
          style={{ position: "absolute", top: 12, left: 10 }}
          size={24}
          color="white"
        />
        <View
          style={{
            width: 1,
            height: 40,
            borderLeftColor: "white",
            borderLeftWidth: 1,
            borderLeftStyle: "solid",
            position: "absolute",
            left: 130,
            top: 6,
          }}
        ></View>
      </View>
      <Navbar value="Inbox" value1={sh} />
      <View style={{ height: 640 }}>
        <ScrollView onScroll={handleScroll}>
          {inbox.map((m) => (
            <TouchableOpacity key="1" onPress={(e) => openmes(e, m.id)}>
              <View key="2" style={style.contelement}>
                <View key="3" style={style.coneelephoto}>
                  <Text key="4">{m.shkronja}</Text>
                </View>
                <Text key="5" style={style.namerec}>
                  {m.emrid}
                </Text>
                <Text key="6" style={style.subject}>
                  {m.subject}
                </Text>
                <Text key="7" style={style.contrec}>
                  {m.mesazhi}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <StatusBar />
    </View>
  );
}
const style = StyleSheet.create({
  inboxpart: {
    height: 693,
    width: 395,
    backgroundColor: "red",
    position: "absolute",
    marginTop: 50,
  },
  contelement: {
    height: 80,
    backgroundColor: "white",
  },
  coneelephoto: {
    width: 40,
    height: 40,
    backgroundColor: "yellow",
    borderRadius: 50,
    marginLeft: 15,
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  namerec: {
    position: "absolute",
    marginLeft: 70,
    marginTop: 13,
    fontSize: 17,
  },
  subject: {
    position: "absolute",
    marginLeft: 70,
    marginTop: 35,
  },
  contrec: {
    position: "absolute",
    marginLeft: 70,
    marginTop: 53,
  },
});

export default Hyrje;
