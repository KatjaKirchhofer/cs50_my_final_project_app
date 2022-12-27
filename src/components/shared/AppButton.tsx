import React from "react";
import {TouchableOpacity} from "react-native";
import {Text} from "../Themed";
import globalStyles from "../../constants/globalStyles";

interface Interface {
  text: string
  action: any
}

const AppButton = ({text, action}: Interface) => {

  return (
    <TouchableOpacity
      style={globalStyles.button}
      onPress={action}
    >
      <Text style={globalStyles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}
export default AppButton;