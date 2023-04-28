import { View, Text, TextInput, TextBase } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Entypo,
  EvilIcons,
  AntDesign,
  MaterialIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { useCallback } from "react";
import react from "react";

function Sendmessage({ navigation }) {
  const [emeailim, setEMailim] = useState("geri.o@hotmail.com");
  const [emailsend, setEMailsend] = useState("");
  const [subject, setSubject] = useState("");
  const [messazh, setMesazh] = useState("");
  const [shkronj, setShkronj] = useState("F");
  const [color, setColor] = useState("#5EBB60");
  const isFocused = useIsFocused();

  const fetchEmailData = useCallback(() => {
    fetch("https://74f2-46-252-40-254.ngrok-free.app/api/mesazheSendmarr1", {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((r) => r.json())
      .then((d) => {
        setEMailim(d["email"]);
        setShkronj(d["sh"]);
        setColor(d["ngj"]);
        console.log("ktu funksionon");
      });
  }, []);

  useEffect(() => {
    if (isFocused) {
      fetchEmailData();
    }
  }, [isFocused, fetchEmailData]);
  const proces = (d) => {
    setEMailim(d["email"]);
    setShkronj(d["sh"]);
    setColor(d["ngj"]);
    console.log("ktu funksionon");
  };
  useEffect(() => {
    if (setMesazh.length > 0) {
      setColor1("#2d7cd3");
    } else {
      setColor1("grey");
    }
  });

  useEffect(() => {
    fetch("https://74f2-46-252-40-254.ngrok-free.app/api/mesazheSendmarr1", {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((r) => r.json())
      .then((d) => {
        setEMailim(d["email"]);
        setShkronj(d["sh"]);
        setColor(d["ngj"]);
        console.log("ktu funksionon");
      });
  }, []);
  const send = (e) => {
    e.preventDefault();
    if (emailsend.includes("@") && subject.length > 0 && messazh.length > 0) {
      const data = new FormData();
      data.append("emailsend", emailsend);
      data.append("subject", subject);
      data.append("mesazh", messazh);
      fetch("https://74f2-46-252-40-254.ngrok-free.app/api/sendmesazh1", {
        body: data,
        method: "POST",
      })
        .then((r) => r.json())
        .then((d) => {
          if (d["proces"] == "done") {
            navigation.navigate("Homepage");
          }
        });
    }

    console.log(messazh);
  };
  const [color1, setColor1] = useState("grey");

  return (
    <View style={{ position: "absolute", top: 0, left: 0 }}>
      <View style={{ width: 395, height: 90, backgroundColor: "#2d7cd3" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Homepage")}>
          <Entypo
            name="cross"
            size={34}
            style={{ position: "absolute", left: 20, top: 40 }}
            color="white"
          />
        </TouchableOpacity>
        <View
          style={{
            width: 35,
            height: 35,
            borderRadius: 50,
            backgroundColor: color,
            postion: "absolute",
            left: 70,
            top: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>{shkronj}</Text>
        </View>
        <Text
          style={{
            position: "absolute",
            top: 30,
            fontSize: 19,
            left: 120,
            fontWeight: 500,
            color: "white",
          }}
        >
          New message
        </Text>
        <Text
          style={{ position: "absolute", left: 115, top: 55, color: "white" }}
        >
          {emeailim}
        </Text>
      </View>
      <View
        style={{
          width: 395,
          height: 45,
          borderBottomColor: "grey",
          borderBottomWidth: 0.5,
          borderBottomStyle: "solid",
        }}
      >
        <Text
          style={{
            position: "absolute",
            fontSize: 15,
            left: 20,
            top: 10,
            color: "grey",
          }}
        >
          To
        </Text>
        <TextInput
          value={emailsend}
          onChange={(e) => setEMailsend(e.nativeEvent.text)}
          style={{
            position: "absolute",
            width: 300,
            left: 50,
            top: 8,
          }}
        ></TextInput>
        <EvilIcons
          name="chevron-down"
          style={{ position: "absolute", top: 5, left: 350 }}
          size={34}
          color="black"
        />
      </View>
      <TextInput
        placeholder="      Subject"
        onChange={(e) => setSubject(e.nativeEvent.text)}
        value={subject}
        style={{
          position: "absolute",
          borderWidth: 1,
          borderColor: "black",
          borderStyle: "solid",
          top: 135,
          fontSize: 15,
          height: 50,
          width: 395,
        }}
      ></TextInput>
      <TextInput
        value={messazh}
        onChange={(e) => {
          setMesazh(e.nativeEvent.text);
        }}
        style={{
          borderWidth: 0,
          borderColor: "red",
          borderStyle: "solid",
          position: "absolute",
          top: 185,
          width: 390,
          height: 40,
        }}
      ></TextInput>
      <View
        style={{
          borderColor: "grey",
          borderWidth: 0.5,
          borderStyle: "solid",
          position: "absolute",
          top: 780,
          width: 380,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AntDesign
          name="addfolder"
          style={{ position: "absolute", top: 7, left: 15 }}
          size={24}
          color="grey"
        />
        <Entypo
          name="attachment"
          style={{ position: "absolute", left: 65, top: 7 }}
          size={24}
          color="grey"
        />
        <MaterialIcons
          name="photo-camera"
          style={{ position: "absolute", left: 115, top: 7 }}
          size={24}
          color="grey"
        />
        <MaterialIcons
          name="text-format"
          style={{ position: "absolute", left: 165, top: 7 }}
          size={24}
          color="grey"
        />
        <FontAwesome
          style={{ position: "absolute", left: 215, top: 7 }}
          name="microphone"
          size={24}
          color="grey"
        />
        <TouchableOpacity onPress={(e) => send(e)}>
          <Ionicons
            name="send"
            style={{ position: "absolute", left: 350, top: 7 }}
            size={24}
            color={color1}
          />
        </TouchableOpacity>
      </View>
      <StatusBar />
    </View>
  );
}
export default Sendmessage;
