import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function Login() {
  const [valueem, setValueem] = useState("");
  const [color, setColor] = useState("grey");
  const navigate = useNavigation();

  const goback = () => {
    navigate.navigate("Homepage");
    navigate.openDrawer();
  };

  const change = (e) => {
    setValueem(e.nativeEvent.text);
    if (
      e.nativeEvent.text.includes("@") &&
      e.nativeEvent.text.includes("com")
    ) {
      setColor("white");
    }
  };
  const [dish, setdish] = useState("flex");
  const next = (e) => {
    e.preventDefault();
    if (color == "white") {
      const data = new FormData();
      data.append("email", valueem);

      fetch("https://74f2-46-252-40-254.ngrok-free.app/api/merrhyrjemeail1", {
        body: data,
        method: "POST",
      })
        .then((r) => r.json())
        .then((d) => {
          if (d["proces"] == "done") {
            setPassreal(d["password"]);
            setdish("none");
          }
        });
    }
  };

  const singin = (e) => {
    e.preventDefault();
    if (passreal === passtype) {
      const data = new FormData();
      data.append("email", valueem);

      fetch("https://74f2-46-252-40-254.ngrok-free.app/api/hryjetamam1", {
        body: data,
        method: "POST",
      })
        .then((r) => r.json())
        .then((d) => {
          if (d["proces"] == "done") {
            navigate.navigate("Homepage");
          }
        });
    } else {
      setPasstype("nuk");
    }
  };
  const [passreal, setPassreal] = useState("");
  const [passtype, setPasstype] = useState("");
  return (
    <View style={{ width: 395 }}>
      <View style={{ display: dish }}>
        <TouchableOpacity onPress={() => goback()}>
          <AntDesign
            name="arrowleft"
            style={{ position: "absolute", top: 40, left: 20 }}
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <Text
          style={{
            position: "absolute",
            top: 38,
            left: 70,
            fontSize: 20,
            fontWeight: 500,
          }}
        >
          Add account
        </Text>
        <Ionicons
          name="md-qr-code-outline"
          style={{ position: "absolute", top: 40, left: 310 }}
          size={20}
          color="black"
        />
        <AntDesign
          name="questioncircleo"
          style={{ position: "absolute", top: 40, left: 360 }}
          size={20}
          color="black"
        />
        <Image
          style={{
            width: 350,

            height: 150,
            position: "absolute",
            top: 90,
            left: 20,
          }}
          resizeMode="contain"
          source={require("./Loginacc.jpg")}
        ></Image>
        <TextInput
          placeholder="    Enter your email"
          value={valueem}
          style={{
            width: 355,
            height: 43,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "grey",
            position: "absolute",
            top: 240,
            left: 18,
          }}
          onChange={(e) => change(e)}
        ></TextInput>
        <View
          style={{
            width: 355,
            height: 30,
            borderWidth: 1,
            borderColor: "#0072c6",
            borderStyle: "solid",
            position: "absolute",
            top: 320,
            left: 20,
            display: "flex",

            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 15, left: 70, height: 15, position: "absolute" }}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png",
            }}
          ></Image>
          <Text style={{ position: "absolute", left: 90, color: "#0072c6" }}>
            ADD GOOGLE ACCOUNT
          </Text>
        </View>
        <Text
          style={{
            position: "absolute",
            top: 370,
            left: 110,
            color: "#0072c6",
          }}
        >
          PRIVACY AND TERMS
        </Text>
        <TouchableOpacity onPress={(e) => next(e)}>
          <View
            style={{
              position: "absolute",
              width: 340,
              height: 45,
              backgroundColor: "#0072c6",
              top: 750,
              left: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: color }}>CONTINUE</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ display: dish == "none" ? "flex" : "none" }}>
        <Image
          source={{
            uri: "https://www.netier.com.au/wp-content/uploads/2018/07/Microsoft-Logo-icon-png-Transparent-Background.png",
          }}
          style={{
            width: 40,
            height: 40,
            position: "absolute",
            marginTop: 45,
            marginLeft: 25,
          }}
        ></Image>

        <Text
          style={{
            position: "absolute",
            fontSize: 20,
            marginTop: 50,
            marginLeft: 65,
          }}
        >
          Microsoft
        </Text>
        <Text style={{ position: "absolute", top: 90, left: 30 }}>
          {valueem}
        </Text>
        <Text
          style={{ position: "absolute", top: 91, left: 60, fontSize: 17 }}
        ></Text>
        <Text
          style={{
            position: "absolute",
            marginTop: 120,
            fontSize: 25,
            fontWeight: 600,
            marginLeft: 30,
          }}
        >
          Enter password
        </Text>

        <TextInput
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            borderStyle: "solid",
            position: "absolute",
            top: 180,
            width: 330,
            left: 30,
          }}
          secureTextEntry={true}
          placeholder="  Type password"
          value={passtype}
          onChange={(e) => setPasstype(e.nativeEvent.text)}
        ></TextInput>
        <TouchableOpacity></TouchableOpacity>
        <Text
          style={{
            position: "absolute",
            top: 220,
            left: 30,
            fontSize: 12,
            color: "#0072c6",
          }}
        >
          Show password
        </Text>
        <Text
          style={{
            position: "absolute",
            top: 250,
            left: 30,
            fontSize: 12,
            color: "#0072c6",
          }}
        >
          Email code to {valueem}
        </Text>

        <TouchableOpacity onPress={(e) => singin(e)}>
          <View
            style={{
              position: "absolute",
              top: 300,
              marginLeft: 275,
              width: 100,
              height: 30,
              backgroundColor: "#0072c6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white" }}>Sing in</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Login;
