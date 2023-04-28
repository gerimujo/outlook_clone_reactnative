import { View, Text, Image, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

function Create() {
  const navigator = useNavigation();
  const [value, setValue] = useState("");
  const [pos, setPos] = useState(0);
  const [err, setErr] = useState("");
  const es = "Enter the email adress in the format someone@example.com";
  const [nameck, setNameck] = useState("checkbox-blank-outline");
  const [color, setColor] = useState("#0072c6");
  const [dis, setDis] = useState("none");
  const [dis2, setdis2] = useState("flex");
  const [dis3, setdis3] = useState("none");
  const [dis4, setDis4] = useState("none");
  const [stat, setstaat] = useState(0);
  const [errpass, seterrpass] = useState("");
  const gobackfromscreen2 = () => {
    setdis3("none");
    setdis2("flex");
    setDis4("none");
  };
  const gobackfromscreen3 = () => {
    setdis3("flex");
    setdis2("none");
    setDis4("none");
  };
  const es1 =
    "Passwords must have at least 8 characters and contain at least two of the following:uppersave letters, lowercase letters, numbers, and symbols.";
  const next = () => {
    if (value.includes("@") == false || value.length == 0) {
      setErr("Enter the email adress in the format someone@example.com");
      setPos(50);
    } else {
      setdis2("none");
      setErr("");
      setPos(0);
      setdis3("flex");
      setDis4("none");
    }
  };
  const change = (e) => {
    setValue(e.nativeEvent.text);
  };
  const [pass, setpass] = useState("");

  const chnagepas = (e) => {
    setpass(e.nativeEvent.text);
    if (errpass.length > 0 && e.nativeEvent.text.length == 0) {
      setstaat(30);
      seterrpass("Password is required");
    } else if (e.nativeEvent.text.length > 8 && errpass.length > 0) {
      setstaat(0);
      seterrpass("");
    }
  };
  const clicknextpass = () => {
    if (pass.length < 8) {
      setstaat(80);
      seterrpass(
        "Passwords must have at least 8 characters and contain at least two of the following:uppersave letters, lowercase letters, numbers, and symbols"
      );
    } else {
      setdis3("none");
      setDis4("flex");
    }
  };
  const nextname = (e) => {
    e.preventDefault();

    if (name.length > 0 && lanme.length > 0) {
      const data = new FormData();
      data.append("emri", name);
      data.append("mbiemri", lanme);
      data.append("email", value);
      data.append("password", pass);
      fetch("https://74f2-46-252-40-254.ngrok-free.app/api/createaccount", {
        body: data,
        method: "POST",
      })
        .then((r) => r.json())
        .then((d) => {
          if (d["proces"] == "done") {
            navigator.navigate("Homepage");
            setValue("");
            setpass("");
            setName("");
            setLname("");
            setdis2("flex");
            setdis3("none");
            setDis4("none");
          }
        });
    }
  };
  const [errname, setErrname] = useState("");
  const [errlname, setErrlname] = useState("");
  const [namestat, setnamestat] = useState(0);
  const [lnamestat, setlnamestat] = useState(0);
  const [name, setName] = useState("");
  const [lanme, setLname] = useState("");

  const goback = () => {
    navigator.navigate("Homepage");
    navigator.openDrawer();
  };

  const chnagename = (e) => {
    setName(e.nativeEvent.target);
  };
  const changelanme = (e) => {
    setLname(e.nativeEvent.target);
  };
  const create = () => {
    const data = new FormData();
    data.append("emri", name);
    data.append("mbiemri", lanme);
    data.append("email", value);
    data.append("password", pass);
    fetch("http://localhost:8000/api/createaccount", {
      body: data,
      method: "POST",
    })
      .then((r) => r.json())
      .then((d) => {
        if (d["proces"] == "done") {
          navigator.navigate("Homepage");
        }
      });
  };
  return (
    <View
      style={{
        width: 395,
        height: 830,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <View>
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
        <View style={{ display: dis2 }}>
          <Text
            style={{
              position: "absolute",
              top: 140,
              height: 100,
              color: "red",
              fontSize: 15,
              width: 300,
              marginLeft: 30,
            }}
          >
            {err}
          </Text>
          <Text
            style={{
              fontSize: 25,
              position: "absolute",
              marginTop: 90,
              fontWeight: 500,
              marginLeft: 25,
            }}
          >
            Create account
          </Text>
          <TextInput
            placeholder="someone@example.com"
            style={{
              width: 330,
              height: 40,
              borderBottomColor: "black",
              borderBottomWidth: 1,
              borderStyle: "solid",
              position: "absolute",
              top: 135 + pos,
              marginLeft: 30,
            }}
            value={value}
            onChange={(e) => change(e)}
          />

          <Text
            style={{
              position: "absolute",
              top: 190 + pos,
              left: 30,
              color: "#0072c6",
            }}
          >
            Get a new email adress
          </Text>
          <TouchableOpacity onPress={() => goback()}>
            <View
              style={{
                position: "absolute",
                top: 260 + pos,
                marginLeft: 170,
                width: 100,
                height: 30,
                backgroundColor: "#D3D3D3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>Back</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={next}>
            <View
              style={{
                position: "absolute",
                top: 260 + pos,
                marginLeft: 275,
                width: 100,
                height: 30,
                backgroundColor: "#0072c6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ display: dis3 }}>
        <TouchableOpacity onPress={() => gobackfromscreen2()}>
          <AntDesign
            name="arrowleft"
            style={{ position: "absolute", top: 95, left: 35 }}
            size={20}
            color="grey"
          />
        </TouchableOpacity>
        <Text style={{ position: "absolute", top: 91, left: 60, fontSize: 17 }}>
          {value}
        </Text>
        <Text
          style={{
            position: "absolute",
            marginTop: 130,
            fontSize: 25,
            fontWeight: 600,
            marginLeft: 30,
          }}
        >
          Create a password
        </Text>
        <Text
          style={{
            position: "absolute",
            top: 175,
            height: 100,
            width: 350,
            left: 30,
            fontSize: 15,
          }}
        >
          Enter the password you would like to use with your account
        </Text>
        <Text
          style={{
            color: "red",
            width: 330,
            position: "absolute",
            top: 220,
            height: 300,
            left: 30,
          }}
        >
          {errpass}
        </Text>
        <TextInput
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            borderStyle: "solid",
            position: "absolute",
            top: 230 + stat,
            width: 330,
            left: 30,
          }}
          value={pass}
          onChange={(e) => chnagepas(e)}
          placeholder="Create password"
          secureTextEntry={dis == "flex" ? false : true}
        ></TextInput>
        <TouchableOpacity
          onPress={() => setDis(dis == "none" ? "flex" : "none")}
        >
          <MaterialCommunityIcons
            name={nameck}
            style={{ position: "absolute", top: 280 + stat, left: 30 }}
            size={24}
            color="black"
          />
          <MaterialIcons
            style={{
              position: "absolute",
              top: 280 + stat,
              left: 30,
              display: dis,
            }}
            name="check-box"
            size={24}
            color={color}
          />
        </TouchableOpacity>
        <Text
          style={{
            position: "absolute",
            top: 280 + stat,
            left: 70,
            fontSize: 15,
          }}
        >
          Show password
        </Text>
        <MaterialIcons
          style={{ position: "absolute", top: 320 + stat, left: 30 }}
          name="check-box"
          size={24}
          color={color}
        />
        <Text
          style={{
            position: "absolute",
            top: 320 + stat,
            left: 70,
            width: 280,
          }}
        >
          I would like information, tips and offeres about Microsoft products
          and services
        </Text>
        <TouchableOpacity onPress={clicknextpass}>
          <View
            style={{
              position: "absolute",
              top: 420 + stat,
              marginLeft: 275,
              width: 100,
              height: 30,
              backgroundColor: "#0072c6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white" }}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ display: dis4 }}>
        <TouchableOpacity onPress={() => gobackfromscreen3("")}>
          <AntDesign
            name="arrowleft"
            style={{ position: "absolute", top: 95, left: 35 }}
            size={20}
            color="grey"
          />
        </TouchableOpacity>
        <Text style={{ position: "absolute", top: 91, left: 60, fontSize: 17 }}>
          {value}
        </Text>
        <Text
          style={{
            position: "absolute",
            top: 140,
            left: 30,
            fontSize: 25,
            fontWeight: 500,
          }}
        >
          What's your name?
        </Text>
        <Text style={{ position: "absolute", width: 320, left: 30, top: 190 }}>
          We need a little more info before you can use this app.
        </Text>
        <Text
          style={{
            position: "absolute",
            top: 240,
            fontSize: 15,
            left: 30,
            color: "red",
          }}
        >
          {errname}
        </Text>
        <TextInput
          placeholder="Name"
          style={{
            width: 320,
            hieght: 30,
            borderBottomWidth: 1,
            borderBottomColor: "black",
            borderBottomStyle: "solid",
            position: "absolute",
            top: 240 + namestat,
            marginLeft: 30,
          }}
          value={name}
          onChange={(e) => setName(e.nativeEvent.text)}
        ></TextInput>
        <TextInput
          placeholder="Last Name"
          style={{
            width: 320,
            hieght: 30,
            borderBottomWidth: 1,
            borderBottomColor: "black",
            borderBottomStyle: "solid",
            position: "absolute",
            top: 290 + lnamestat,
            marginLeft: 30,
          }}
          value={lanme}
          onChange={(e) => setLname(e.nativeEvent.text)}
        ></TextInput>
        <Text
          style={{
            position: "absolute",
            top: 320,
            fontSize: 15,
            left: 30,
            color: "red",
          }}
        >
          {errlname}
        </Text>
        <TouchableOpacity onPress={(e) => nextname(e)}>
          <View
            style={{
              position: "absolute",
              top: 400,
              marginLeft: 275,
              width: 100,
              height: 30,
              backgroundColor: "#0072c6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Create;
