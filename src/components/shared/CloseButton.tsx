import React from "react";
import {TouchableOpacity} from "react-native";
import {AntDesign} from "@expo/vector-icons";

interface Interface {
  action: any
}

const CloseButton = ({action}: Interface) => {
  return (
    <TouchableOpacity
      onPress={action}
    >
      <AntDesign name="close" size={24} color="black" />
    </TouchableOpacity>
  )
}
export default CloseButton