import {showDangerMessage} from "../shared/MessageService";
import {Dictionary} from "../../types/Dictionary";
import {User} from "../../types/UserTypes";

export  const enableLogin = (name: string, password: string) => {
  return !(name !== "" && password !== "");
}

export  const submitLogin = (navigation: any,
  name: string, password: string, users: [],
                             dictionary: Dictionary
) => {
  users.forEach((user: User) =>
    {
      if (user.userName !== name) {
        showDangerMessage(dictionary.warning, dictionary.wrongName)
      } else {
        if (password !== user.password) {
          showDangerMessage(dictionary.warning, dictionary.wrongPassword)
        } else {
          navigation.navigate("Root")
        }
      }
    }
  )
}