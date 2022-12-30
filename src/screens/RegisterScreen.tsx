import React, {useEffect, useState} from "react";
import {View} from "../components/Themed";
import globalStyles from "../constants/globalStyles";
import AppText from "../components/shared/AppText";
import {SafeAreaView} from "react-native";
import AppTextInput from "../components/shared/AppTextInput";
import AppButton from "../components/shared/AppButton";
import {useNavigation} from "@react-navigation/native";
import {enableSubmit, submitForm} from "../components/services/RegisterService";
import store from "../store/store";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRep, setPasswordRep] = useState("");
  const [disabled, setDisabled] = useState(true);
  const navigation = useNavigation();
  const dictionary = store.getState().dictionary;


  useEffect(() => {
    const buttonDisabled = enableSubmit(name, password, passwordRep);
    setDisabled(buttonDisabled)
  }, [name, password, passwordRep]);

  return (
    <View style={globalStyles.container}>
      <SafeAreaView>
        <KeyboardAwareScrollView>
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
            <AppTextInput
              value={passwordRep}
              action={setPasswordRep}
              placeholder={dictionary.repPassword}
            />
          </View>
          <AppButton
            text={dictionary.save}
            action={() => submitForm(navigation, password, passwordRep, dictionary, name)}
            disabled={disabled}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </View>
  )
}
export default RegisterScreen