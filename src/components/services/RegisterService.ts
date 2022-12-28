import {showDangerMessage} from "../shared/MessageService";

export const submitForm = (navigation: any, password: string, passwordRep: string) => {
  const passwordValid = checkPassword(password, passwordRep)
  if (passwordValid) {
    navigation.navigate("Root");
  }
}


const checkPassword = (password: string, passwordRep: string) => {
  if (password !== passwordRep) {
    showDangerMessage("Warning", "password is not matching");
    return false
  } else {
    return true
  }
}

export  const enableSubmit = (name: string, password: string, passwordRep: string) => {
  return !(name !== "" && password !== "" && passwordRep !== "");
}