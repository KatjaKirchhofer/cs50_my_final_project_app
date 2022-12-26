import React, {useState} from "react";
import AppText from "../shared/AppText";
import {dictionary} from "../../constants/Dictionary";
import {View} from "../Themed";
import {Languages} from "../../enums/Languages";
import RNPickerSelect from 'react-native-picker-select';

const ChangeLanguage = () => {
  type PickerItem = {
    value: number,
    label: string
  }

  const [value, setValue] = useState(0);

  const items: PickerItem[] = [{
    value: 1,
    label: Languages.GERMAN
  },{
    value: 2,
    label: Languages.ENGLISH
  },{
    value: 3,
    label: Languages.SPANISH
  }]

  return (
    <View>
    <AppText
      text={dictionary.changeLanguage}
      headline
    />
      <RNPickerSelect
        onValueChange={(value) => {
          setValue(value)
        }}
        value={value}
        placeholder={{  }}
        useNativeAndroidPickerStyle
        style={
          {
            viewContainer: {
              width: "90%",
            },
            inputIOS: {
              fontSize: 22,
              width: "50%",
              paddingTop: 3,
              paddingBottom: 3,
              marginVertical: 10,
            },
            inputAndroid: {
              fontSize: 22,
              width: "100%",
              paddingTop: 3,
              paddingBottom: 3,
              marginVertical: 10,
            },
          }
        }
        items={items}
      />
    </View>
  )
}
export default ChangeLanguage;