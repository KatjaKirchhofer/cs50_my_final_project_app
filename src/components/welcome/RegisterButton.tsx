import React from "react";
import {TouchableOpacity} from "react-native";
import {Text} from "../Themed";
import globalStyles from "../../constants/globalStyles";

const RegisterButton = () => {
  return (
    <TouchableOpacity style={globalStyles.button}>
      <Text style={globalStyles.buttonText}>Register</Text>
    </TouchableOpacity>
  )
}
export default RegisterButton;