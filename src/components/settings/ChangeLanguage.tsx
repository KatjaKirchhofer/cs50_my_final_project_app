import React, {SetStateAction, useEffect} from "react";
import AppText from "../shared/AppText";
import {dictionary} from "../../constants/Dictionary";
import {View} from "../Themed";
import {Languages} from "../../enums/Languages";
import {Picker} from '@react-native-picker/picker';

interface Interface {
  selectedLanguage: string
  setSelectedLanguage: React.Dispatch<SetStateAction<string>>
}

const ChangeLanguage = ({selectedLanguage, setSelectedLanguage}: Interface) => {

  useEffect(() => {
    console.log(selectedLanguage)
  }, [selectedLanguage]);

  return (
    <View>
    <AppText
      text={dictionary.changeLanguage}
      headline
    />
      <View>
      <Picker
        selectedValue={selectedLanguage}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) =>  setSelectedLanguage(itemValue)}

      >
        <Picker.Item label={Languages.GERMAN} value="de" />
        <Picker.Item label={Languages.ENGLISH} value="en" />
        <Picker.Item label={Languages.SPANISH} value="es" />
      </Picker>
      </View>
    </View>
  )
}
export default ChangeLanguage;