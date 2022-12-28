import React from "react";
import {TouchableOpacity} from "react-native";
import {Text} from "../Themed";
import globalStyles from "../../constants/globalStyles";

interface Interface {
  text: string
  action: any
  disabled: boolean
  outlined?: boolean
}

const AppButton = ({text, action, disabled, outlined}: Interface) => {

  return (
    <TouchableOpacity
      style={disabled ? globalStyles.buttonDisabled : outlined ? globalStyles.outlinedButton : globalStyles.button}
      onPress={action}
      disabled={disabled}
    >
      <Text style={outlined ? globalStyles.outlinedButtonText : globalStyles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}
export default AppButton;