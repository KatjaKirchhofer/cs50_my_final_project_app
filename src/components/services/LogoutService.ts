import {Alert} from "react-native";
import {Dictionary} from "../../types/Dictionary";
import {showSuccessMessage} from "../shared/MessageService";

export const logout = (navigation: any, dictionary: Dictionary) => {
  Alert.alert(
    dictionary.logout,
    dictionary.questionLogout,
    [
      {
        text: dictionary.no,
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: dictionary.yes, onPress: () => {
          navigation.navigate('Welcome');
          showSuccessMessage(dictionary.success, dictionary.logoutSuccess)
        } }
    ]
  );
}