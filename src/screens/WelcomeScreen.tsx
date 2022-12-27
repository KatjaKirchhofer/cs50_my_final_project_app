import React from "react";
import {View} from "../components/Themed";
import {Image, SafeAreaView} from "react-native";
import globalStyles from "../constants/globalStyles";
import WelcomeHead from "../components/welcome/WelcomeHead";
import RegisterButton from "../components/welcome/RegisterButton";

const WelcomeScreen = () => {
  return (
    <View style={globalStyles.container}>
    <SafeAreaView>
      <WelcomeHead/>
      <View style={{paddingTop: 30}}>
      <Image
        style={{
          resizeMode: "cover",
          height: "70%",
          width: "100%",
        }}
        source={require('../../assets/images/diary-g3423914d7_1920.jpg')}
      />
      </View>
      <RegisterButton/>
    </SafeAreaView>
    </View>

  )
}
export default WelcomeScreen