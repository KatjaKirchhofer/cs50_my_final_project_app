import {showDangerMessage, showSuccessMessage} from "../shared/MessageService";
import {Dictionary} from "../../types/Dictionary";
import userStore from "../../store/userStore";

export const submitForm = (navigation: any, password: string,
                           passwordRep: string, dictionary: Dictionary, name: string) => {
  const passwordValid = checkPassword(password, passwordRep, dictionary)
  if (passwordValid) {
    userStore.dispatch({
      type: "userAdded",
      payload: {
        userName: name,
        password: password
      }
    })
    showSuccessMessage(dictionary.success, dictionary.registerSuccess)
    navigation.navigate("Login");
  }
}


const checkPassword = (password: string, passwordRep: string, dictionary: Dictionary) => {
  if (password !== passwordRep) {
    showDangerMessage(dictionary.warning, dictionary.passwordNotMatching);
    return false
  } else {
    return true
  }
}

export  const enableSubmit = (name: string, password: string, passwordRep: string) => {
  return !(name !== "" && password !== "" && passwordRep !== "");
}