import React, {SetStateAction} from "react";
import {View} from "../Themed";
import globalStyles from "../../constants/globalStyles";
import AppText from "../shared/AppText";
import {MaterialIcons} from '@expo/vector-icons';
import Colors from "../../constants/Colors";
import {TouchableOpacity} from "react-native";

interface Interface {
  setModalVisible: React.Dispatch<SetStateAction<boolean>>
}
const WelcomeHead = ({setModalVisible}: Interface) => {
  return (
    <View>
    <View style={[globalStyles.row, globalStyles.spaceBetween]}>
      <AppText
        text={"logo"}
        headline
      />
      <AppText
        text={"success app"}
        headline
      />
      <View style={{justifyContent: "center"}}>
        <TouchableOpacity
          onPress={()=> setModalVisible(true)}
        >
          <MaterialIcons
            name="language"
            size={24}
            color={Colors.text}
          />
        </TouchableOpacity>
      </View>
    </View>
      <View style={{justifyContent: "center"}}>
      <AppText text={"by Katja Kirchhofer, Munich - Germany"}/>
      </View>
    </View>
  )
}
export default WelcomeHead;