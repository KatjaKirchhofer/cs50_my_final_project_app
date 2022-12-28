import {showDangerMessage, showSuccessMessage} from "../shared/MessageService";

export  const enableLogin = (name: string, password: string) => {
  return !(name !== "" && password !== "");
}

export  const submitLogin = (navigation: any,
  name: string, password: string, userName: string, userPassword: string
) => {
    if (name !== userName) {
      showDangerMessage("Warning", "flascher Username")
    }

    if (password !== userPassword) {
      showDangerMessage("Warning", "flasches Password")
    }

    if (name === userName && password === userPassword) {
      showSuccessMessage("Welcome", userName)
      navigation.navigate("Root")
    }
}