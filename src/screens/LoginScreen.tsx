import React, {useEffect, useState} from "react";
import {View} from "../components/Themed";
import globalStyles from "../constants/globalStyles";
import AppText from "../components/shared/AppText";
import {SafeAreaView} from "react-native";
import AppTextInput from "../components/shared/AppTextInput";
import AppButton from "../components/shared/AppButton";
import {useNavigation} from "@react-navigation/native";
import {enableLogin, submitLogin} from "../components/services/LoginService";
import store from "../store/store";
import userStore from "../store/userStore";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

const LoginScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const navigation = useNavigation();
  const dictionary = store.getState().dictionary;
  const users = userStore.getState();


  useEffect(() => {
    const buttonDisabled = enableLogin(name, password);
    setDisabled(buttonDisabled)
  }, [name, password]);

  return (
    <View style={globalStyles.container}>
      <KeyboardAwareScrollView>
        <SafeAreaView>
          <View style={[globalStyles.alignCenter, {paddingTop: 20}]}>
            <AppText text={"logo"}/>
          </View>
          <View style={{paddingTop: 150, paddingBottom: 70}}>
            <AppTextInput
              value={name}
              action={setName}
              placeholder={dictionary.enterName}
            />
            <AppTextInput
              value={password}
              action={setPassword}
              placeholder={dictionary.password}
            />
          </View>
          <AppButton
            text={dictionary.save}
            action={() => submitLogin(navigation, name, password, users, dictionary)}
            disabled={disabled}
          />
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </View>
  )
}
export default LoginScreen