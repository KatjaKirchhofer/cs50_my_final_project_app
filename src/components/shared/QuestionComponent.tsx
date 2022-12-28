import React, {useState} from "react";
import {View} from "../Themed";
import globalStyles from "../../constants/globalStyles";
import AppText from "./AppText";
import {dictionary} from "../../constants/Dictionary";
import SuccessInputs from "../success/SuccessInputs";

interface Interface {
  navigationMethod: () => void
  placeholder: string
}

const QuestionComponent = ({navigationMethod, placeholder}: Interface) => {
  const [showSuccess, setShowSuccess] = useState(false);

  let date = new Date();
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  const today = dd + "." + mm + '.' + yyyy;

  return (
    <View >
    {showSuccess &&
    <View style={[globalStyles.row, globalStyles.marginVertical15]}>
      <AppText
        text={dictionary.at}
      />
      <AppText
        text={today}
      />
    </View>
    }
    <SuccessInputs
      showSuccess={showSuccess}
      setShowSuccess={setShowSuccess}
      navigationMethod={navigationMethod}
      placeholder={placeholder}
    />
  </View>
  )

}

export default QuestionComponent;