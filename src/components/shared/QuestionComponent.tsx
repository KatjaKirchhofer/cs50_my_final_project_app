import React, {useState} from "react";
import {View} from "../Themed";
import SuccessInputs from "../success/SuccessInputs";

interface Interface {
  navigationMethod: () => void
  placeholder: string
  type: string
}

const QuestionComponent = ({navigationMethod, placeholder, type}: Interface) => {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <View>
    <SuccessInputs
      showSuccess={showSuccess}
      setShowSuccess={setShowSuccess}
      navigationMethod={navigationMethod}
      placeholder={placeholder}
      type={type}
    />
  </View>
  )

}

export default QuestionComponent;