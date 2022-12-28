import React, { SetStateAction } from "react";
import {View} from "../Themed";
import {TextInput} from "react-native";
import globalStyles from "../../constants/globalStyles";
import Colors from "../../constants/Colors";


export interface Props {
  value: string,
  action: React.Dispatch<SetStateAction<any>>,
  placeholder: string
  multiline?: boolean,
  numberOfLines?: number

}
const AppTextInput = ({
                            value, action, placeholder, multiline, numberOfLines,
                          }: Props) => {


  return (
    <View style={globalStyles.borderBottom}>
      <TextInput
        style={globalStyles.textInput}
        onChangeText={(t) => {
          action(t);
        }}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={Colors.primary}
        keyboardType="default"
        multiline={multiline}
        numberOfLines={numberOfLines}
        textAlignVertical="top"
      />
    </View>
  );
};
export default AppTextInput;
