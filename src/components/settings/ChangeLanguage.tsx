import React, {SetStateAction} from "react";
import AppText from "../shared/AppText";
import {dictionary} from "../../constants/Dictionary";
import {View} from "../Themed";
import {Languages} from "../../enums/Languages";
import {Picker} from '@react-native-picker/picker';
import globalStyles from "../../constants/globalStyles";
import AppButton from "../shared/AppButton";

interface Interface {
  selectedLanguage: string
  setSelectedLanguage: React.Dispatch<SetStateAction<string>>
}

const ChangeLanguage = ({selectedLanguage, setSelectedLanguage}: Interface) => {

  const saveLanguage = () => {
    console.log(selectedLanguage)
  }

  return (
    <View style={globalStyles.alignCenter}>
      <View style={{paddingVertical: 25}}>
    <AppText
      text={dictionary.changeLanguage}
      headline
    />
      </View>
      <View style={{paddingBottom: 190 }}>
      <Picker
        selectedValue={selectedLanguage}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) =>  setSelectedLanguage(itemValue)}

      >
        <Picker.Item label={Languages.GERMAN} value="de" />
        <Picker.Item label={Languages.ENGLISH} value="en" />
        <Picker.Item label={Languages.SPANISH} value="es" />
      </Picker>
      </View>
      <AppButton
        text={"set"}
        action={saveLanguage}
        disabled={false}
      />
    </View>
  )
}
export default ChangeLanguage;