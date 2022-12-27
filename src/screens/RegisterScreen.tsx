import React, {useState} from "react";
import {View} from "../components/Themed";
import globalStyles from "../constants/globalStyles";
import AppText from "../components/shared/AppText";
import {dictionary} from "../constants/Dictionary";
import {SafeAreaView} from "react-native";
import AppTextInput from "../components/shared/AppTextInput";
import RegisterButton from "../components/welcome/RegisterButton";
import {useNavigation} from "@react-navigation/native";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRep, setPasswordRep] = useState("");
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <SafeAreaView>
        <AppText text={"logo"}/>

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
        <RegisterButton
          text={dictionary.save}
          action={()=> navigation.navigate("Home")}
        />
      </SafeAreaView>
    </View>
  )
}
export default RegisterScreen