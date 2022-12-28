import React from "react";
import {TouchableOpacity} from "react-native";
import {Text} from "../Themed";
import globalStyles from "../../constants/globalStyles";

interface Interface {
  text: string
  action: any
  disabled: boolean
}

const AppButton = ({text, action, disabled}: Interface) => {

  return (
    <TouchableOpacity
      style={disabled ? globalStyles.buttonDisabled : globalStyles.button}
      onPress={action}
      disabled={disabled}
    >
      <Text style={ globalStyles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}
export default AppButton;