import React, {useEffect, useState} from "react";
import {View} from "../components/Themed";
import {Image, SafeAreaView} from "react-native";
import globalStyles from "../constants/globalStyles";
import WelcomeHead from "../components/welcome/WelcomeHead";
import {dictionaryDe, dictionaryEN, dictionaryEs} from "../constants/Dictionary";
import {useNavigation} from "@react-navigation/native";
import LanguageModal from "../components/settings/LanguageModal";
import AppButton from "../components/shared/AppButton";
import store from "../store/store";


const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("de");
  const dictionary = store.getState().dictionary;

  const setLanguage = () => {
    if (selectedLanguage === "en") {
      store.dispatch({
        type: "setLang",
        payload: {
          dictionary: dictionaryEN
        }
      })
    }

    if (selectedLanguage === "es") {
      store.dispatch({
        type: "setLang",
        payload: {
          dictionary: dictionaryEs
        }
      })
    }
  }


  useEffect(() => {
    store.dispatch({
      type: "setLang",
      payload: {
        dictionary: dictionaryDe
      }
    })
  }, []);

  useEffect(() => {
    store.dispatch({
      type: "setLang",
      payload: {
        dictionary: dictionaryDe
      }
    })
    setLanguage()
  }, [selectedLanguage]);


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