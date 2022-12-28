import {showDangerMessage, showSuccessMessage} from "../shared/MessageService";
import {Dictionary} from "../../types/Dictionary";

export  const enableLogin = (name: string, password: string) => {
  return !(name !== "" && password !== "");
}

export  const submitLogin = (navigation: any,
  name: string, password: string, userName: string, userPassword: string,
                             dictionary: Dictionary
) => {
    if (name !== userName) {
      showDangerMessage(dictionary.warning, dictionary.wrongName)
    }

    if (password !== userPassword) {
      showDangerMessage(dictionary.warning, dictionary.wrongPassword)
    }

    if (name === userName && password === userPassword) {
      showSuccessMessage(dictionary.welcome, userName)
      navigation.navigate("Root")
    }
}