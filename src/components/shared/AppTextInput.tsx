import React, { SetStateAction } from "react";
import {View, Text} from "../Themed";
import {TextInput} from "react-native";
import globalStyles from "../../constants/globalStyles";


export interface Props {
  value: string,
  action: React.Dispatch<SetStateAction<any>>,
  headline: string,
  placeholder: string
  multiline?: boolean,
  numberOfLines?: number

}
const AppTextInput = ({
                            value, action, headline,placeholder, multiline, numberOfLines,
                          }: Props) => {


  return (
    <View>
      <Text>{headline}</Text>
      <TextInput
        style={globalStyles.textInput}
        onChangeText={(t) => {
          action(t);
        }}
        value={value}
        placeholder={placeholder}
        keyboardType="default"
        multiline={multiline}
        numberOfLines={numberOfLines}
        textAlignVertical="top"
      />
    </View>
  );
};
export default AppTextInput;
