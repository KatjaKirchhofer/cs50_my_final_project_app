import React from "react";
import {View} from "../Themed";
import globalStyles from "../../constants/globalStyles";
import AppText from "../shared/AppText";
import { MaterialIcons } from '@expo/vector-icons';
import Colors from "../../constants/Colors";

const WelcomeHead = () => {
  return (
    <View style={[globalStyles.row, globalStyles.spaceBetween]}>
      <AppText
        text={"logo"}
        headline
      />
      <AppText
        text={"name"}
        headline
      />
      <View style={{justifyContent: "center"}}>
      <MaterialIcons
        name="language"
        size={24}
        color={Colors.text}
      />
      </View>
    </View>
  )
}
export default WelcomeHead;