import React from "react";
import {Text} from "../Themed";
import globalStyles from "../../constants/globalStyles";

interface Interface {
  text: string
  headline?: boolean
}

const AppText = ({text, headline}: Interface) => {
  return (
    <Text
      style={headline ? globalStyles.title : globalStyles.text}
      lightColor="rgba(0,0,0,0.8)"
      darkColor="rgba(255,255,255,0.8)">
      {text}
    </Text>
  )
}
export default AppText;