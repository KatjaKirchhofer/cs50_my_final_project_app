import React, {useState} from "react";
import {View} from "../components/Themed";
import globalStyles from "../constants/globalStyles";
import AppText from "../components/shared/AppText";
import {dictionary} from "../constants/Dictionary";
import {SafeAreaView} from "react-native";
import AppTextInput from "../components/shared/AppTextInput";
import AppButton from "../components/shared/AppButton";
import {useNavigation} from "@react-navigation/native";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRep, setPasswordRep] = useState("");
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
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
        <AppTextInput
          value={passwordRep}
          action={setPasswordRep}
          placeholder={dictionary.repPassword}
        />
        </View>
        <AppButton
          text={dictionary.save}
          action={()=> navigation.navigate("Root")}
        />
      </SafeAreaView>
    </View>
  )
}
export default RegisterScreen