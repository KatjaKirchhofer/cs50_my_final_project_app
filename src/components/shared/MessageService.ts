import { showMessage } from "react-native-flash-message";
import Colors from "../../constants/Colors";

export const showSuccessMessage = (
  message: string,
  description: string,
) => {
  showMessage({
    message,
    description,
    type: "success",
    statusBarHeight: 50,
    style: { backgroundColor: Colors.success },
  });
};

export const showDangerMessage = (
  message: string,
  description: string,
) => {
  showMessage({
    message,
    description,
    type: "danger",
    statusBarHeight: 50,
    style: { backgroundColor: Colors.danger },
  });
};
