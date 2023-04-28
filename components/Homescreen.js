import { View, Text, ImageBackground, Image } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableHighlight, TouchableOpacity } from "react-native";
function HomeScreen({ navigation }) {
  return (
    <View>
      <ImageBackground
        resizeMode="cover"
        source={{
          uri: "https://r1.ilikewallpaper.net/iphone-wallpapers/download/75499/Matterhorn-Zermatt-Switzerland-iphone-wallpaper-ilikewallpaper_com.jpg",
        }}
        style={style.imageback}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Homepage")}>
          <Image
            source={require("./Logo.jpg")}
            style={{
              width: 70,
              height: 70,
              borderRadius: 50,
              marginLeft: 10,
              marginTop: 30,
            }}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
const style = StyleSheet.create({
  imageback: {
    width: 395,
    height: 830,
    position: "absolute",
    top: 0,
    left: 0,
  },
});
export default HomeScreen;
