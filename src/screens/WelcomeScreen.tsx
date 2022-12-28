import React, {useState} from "react";
import {View} from "../components/Themed";
import {Image, SafeAreaView} from "react-native";
import globalStyles from "../constants/globalStyles";
import WelcomeHead from "../components/welcome/WelcomeHead";
import {dictionary} from "../constants/Dictionary";
import {useNavigation} from "@react-navigation/native";
import LanguageModal from "../components/settings/LanguageModal";
import AppButton from "../components/shared/AppButton";


const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("de");

  return (
    <View style={globalStyles.container}>
    <SafeAreaView>
      <WelcomeHead
        setModalVisible={setModalVisible}
      />
      <View style={{paddingTop: 50}}>
      <Image
        style={{
          resizeMode: "cover",
          height: "70%",
          width: "100%",
        }}
        source={require('../../assets/images/diary-g3423914d7_1920.jpg')}
      />
      </View>
      <View style={{marginTop: -50}}>
      <AppButton
        text={dictionary.register}
        action={() => navigation.navigate("Register")}
        disabled={false}
      />
      <View style={{paddingTop: 20}}>
      <AppButton
        text={dictionary.login}
        action={() => navigation.navigate("Login")}
        disabled={false}
        outlined
      />
      </View>
      </View>
      <LanguageModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
    </SafeAreaView>
    </View>

  )
}
export default WelcomeScreen