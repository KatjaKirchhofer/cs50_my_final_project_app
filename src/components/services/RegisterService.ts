import {showDangerMessage} from "../shared/MessageService";
import {dictionary} from "../../constants/Dictionary";

export const submitForm = (navigation: any, password: string, passwordRep: string) => {
  const passwordValid = checkPassword(password, passwordRep)
  if (passwordValid) {
    navigation.navigate("Root");
  }
}


const checkPassword = (password: string, passwordRep: string) => {
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