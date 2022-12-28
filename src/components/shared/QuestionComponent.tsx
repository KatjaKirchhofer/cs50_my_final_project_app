import React, {useState} from "react";
import {View} from "../Themed";
import SuccessInputs from "../success/SuccessInputs";

interface Interface {
  navigationMethod: () => void
  placeholder: string
}

const QuestionComponent = ({navigationMethod, placeholder}: Interface) => {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <View>
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