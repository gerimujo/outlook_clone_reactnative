import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  SimpleLineIcons,
  Octicons,
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import { useState, useCallback } from "react";
import { useIsFocused } from "@react-navigation/native";

function Messagehap({ navigation }) {
  const [subject, setSubject] = useState("Subjet123");
  const [scroll, setScroll] = useState(690);
  const [toreply, setTop] = useState(778);
  const [relpys, setReply] = useState("");
  const textInputRef = useRef(null);

  const handleButtonClick = () => {
    textInputRef.current.focus();
  };
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", focus);
    Keyboard.addListener("keyboardDidHide", lostfocus);
  });
  //scroolll real690    do behet 560
  //reply real 778      do behet 658
  const reply = () => {
    setScroll(560);
    setTop(658);
    //pjesa e focus
  };
  const focus = () => {
    setScroll(280);
    setTop(380);
  };
  const lostfocus = () => {
    setScroll(560);
    setTop(658);
  };
  useEffect(() => {
    fetch("https://74f2-46-252-40-254.ngrok-free.app/api/marrmesazhehap1", {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((r) => r.json())
      .then((d) => {
        setSubject(d["subjekti"]);
        setMainmessage([d["mesazhet"][0]]);
        if (d["mesazhet"].length > 1) {
          const mes = d.mesazhet.slice(1);
          setReplies(mes);
        } else {
          setReplies([]);
        }
        setEmailun(d["emailun"]);
        setEmriun(d["emriun"]);
        setEmailai(d["emailai"]);
        setEmriai(d["emriai"]);
        setKodi(d["id"]);

        setScroll(690);
        setTop(778);
      });
  }, []);
  const [mainmessage, setMainmessage] = useState([
    {
      emaild: "geri.muj0@gmail.com",
      emrid: "geri",
      shkronja: "J",
      mesazhi: "hh",
    },
  ]);

  const [replies, setReplies] = useState([]);

  const fetchEmailData = useCallback(() => {
    fetch("https://74f2-46-252-40-254.ngrok-free.app/api/marrmesazhehap1", {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((r) => r.json())
      .then((d) => {
        setSubject(d["subjekti"]);
        setMainmessage([d["mesazhet"][0]]);
        if (d["mesazhet"].length > 1) {
          const mes = d.mesazhet.slice(1);
          setReplies(mes);
        } else {
          setReplies([]);
        }
        setEmailun(d["emailun"]);
        setEmriun(d["emriun"]);
        setEmailai(d["emailai"]);
        setEmriai(d["emriai"]);
        setKodi(d["id"]);
        setStatus(d["status"]);
        setScroll(690);
        setTop(778);
      });
  }, []);
  const [emailun, setEmailun] = useState("");
  const [emriun, setEmriun] = useState("");
  const [emailai, setEmailai] = useState("");
  const [emriai, setEmriai] = useState("");
  const [kodi, setKodi] = useState("");
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      fetchEmailData();
    }
  }, [isFocused, fetchEmailData]);
  const [color, setColor] = useState("grey");
  const [status, setStatus] = useState("");
  const send = (e) => {
    e.preventDefault();
    if (color !== "grey") {
      const data = new FormData();
      data.append("text", relpys);
      data.append("emailun", emailun);
      data.append("emriun", emriun);
      data.append("emailai", emailai);
      data.append("emriai", emriai);
      data.append("kodi", kodi);
      fetch("https://74f2-46-252-40-254.ngrok-free.app/api/sendReply1", {
        body: data,
        method: "POST",
      })
        .then((r) => r.json())
        .then((d) => {
          if (d["proces"] == "done") {
            if (status == "sent") {
              navigation.navigate("Sendlist");
            } else {
              navigation.navigate("Homepage");
            }
            setReply("");
          }
        });
    }
  };

  return (
    <View>
      <StatusBar />
      <Text>geri</Text>
      <View
        style={{
          width: 395,
          height: 90,
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "#2d7cd3",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            if (status == "inbox") {
              navigation.navigate("Homepage");
            } else if (status == "sent") {
              navigation.navigate("Sendlist");
            }
          }}
        >
          <AntDesign
            name="arrowleft"
            style={{ position: "absolute", top: 50, left: 15 }}
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <SimpleLineIcons
          name="microphone"
          style={{ position: "absolute", top: 50, left: 210 }}
          size={20}
          color="white"
        />
        <FontAwesome5
          name="trash-alt"
          style={{ position: "absolute", top: 50, left: 260 }}
          size={20}
          color="white"
        />
        <Octicons
          name="archive"
          style={{ position: "absolute", top: 52, left: 310 }}
          size={20}
          color="white"
        />
        <SimpleLineIcons
          name="options-vertical"
          style={{ position: "absolute", top: 52, left: 360 }}
          size={20}
          color="white"
        />
      </View>

      <ScrollView
        style={{
          height: scroll,
          width: 400,

          top: 67,
          backgroundColor: "white",
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ height: 65, backgroundColor: "rgb(241, 237, 237)" }}>
            <Text
              style={{
                top: 20,
                left: 20,
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              {subject}
            </Text>
          </View>

          <View
            style={{
              width: 380,
              height: 70,
            }}
          >
            <View
              style={{
                width: 45,
                height: 45,
                borderRadius: 50,
                backgroundColor: "yellow",
                display: "flex",
                left: 20,
                top: 18,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>{mainmessage[0]["shkronja"]}</Text>
            </View>
            <Text
              style={{
                position: "absolute",
                left: 80,
                top: 15,
                fontSize: 18,
                fontWeight: 400,
              }}
            >
              {mainmessage[0]["emrid"]}
            </Text>
            <Text
              style={{
                position: "absolute",
                left: 80,
                top: 40,
                fontSize: 15,
                color: "grey",
              }}
            >
              {mainmessage[0]["emaild"]}
            </Text>
            <SimpleLineIcons
              name="options-vertical"
              style={{ position: "absolute", top: 40, left: 360 }}
              size={20}
              color="grey"
            />
          </View>
          <Text style={{ width: 280, left: 30, fontSize: 15 }}>
            {mainmessage[0]["mesazhi"]}
          </Text>
          <View
            style={{ height: "auto", width: 390, backgroundColor: "white" }}
          >
            <Text></Text>
            <Text></Text>

            {replies &&
              replies.map((d) => (
                <View key="1" class="main">
                  <View
                    key="2"
                    style={{
                      height: 10,
                      width: 395,
                      backgroundColor: "rgb(241, 237, 237)",
                    }}
                  ></View>
                  <View
                    key="3"
                    style={{
                      width: 380,
                      height: 70,
                    }}
                  >
                    <View
                      key="4"
                      style={{
                        width: 45,
                        height: 45,
                        borderRadius: 50,
                        backgroundColor: "yellow",
                        display: "flex",
                        left: 20,
                        top: 18,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text key="5">{d.shkronja}</Text>
                    </View>
                    <Text
                      key="6"
                      style={{
                        position: "absolute",
                        left: 80,
                        top: 15,
                        fontSize: 18,
                        fontWeight: 400,
                      }}
                    >
                      {d.emrid}
                    </Text>
                    <Text
                      key="7"
                      style={{
                        position: "absolute",
                        left: 80,
                        top: 40,
                        fontSize: 15,
                        color: "grey",
                      }}
                    >
                      {d.emaild}{" "}
                    </Text>
                    <SimpleLineIcons
                      key="8"
                      name="options-vertical"
                      style={{ position: "absolute", top: 40, left: 360 }}
                      size={20}
                      color="grey"
                    />
                  </View>
                  <Text key="9" style={{ width: 300, left: 30, fontSize: 17 }}>
                    {d.mesazhi}{" "}
                  </Text>
                  <Text key="10"></Text>
                  <Text key="11" style={{ left: 30, fontSize: 15 }}>
                    Sent from{"  "}
                    <Text key="12" style={{ color: "#2d7cd3" }}>
                      Outlook for Android
                    </Text>
                  </Text>
                  <Text key="13"></Text>
                  <Text key="14"></Text>
                </View>
              ))}
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          width: 390,
          height: 200,
          backgroundColor: "white",
          position: "absolute",
          top: toreply,
        }}
      >
        <MaterialCommunityIcons
          name="arrow-left-top"
          style={{ left: 25, top: 10 }}
          size={24}
          color="grey"
        />
        <Ionicons
          name="md-chevron-down-sharp"
          style={{ left: 55, top: -17 }}
          size={24}
          color="grey"
        />
        <TouchableOpacity onPress={() => reply()}>
          <Text
            style={{
              position: "absolute",
              left: 100,
              top: -40,
              fontSize: 17,
              color: "grey",
            }}
          >
            Reply
          </Text>
        </TouchableOpacity>
        <TextInput
          style={{ width: 370 }}
          ref={textInputRef}
          onPress={handleButtonClick}
          value={relpys}
          onChange={(e) => {
            setReply(e.nativeEvent.text);
            if (e.nativeEvent.text.length > 0) {
              setColor("#2d7cd3");
            } else {
              setColor("grey");
            }
          }}
        ></TextInput>
        <View
          style={{ position: "absolute", top: 130, width: 390, height: 50 }}
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
              color={color}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default Messagehap;
