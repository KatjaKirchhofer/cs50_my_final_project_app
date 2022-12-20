import React, {useState} from "react";
import AppTextInput from "../shared/AppTextInput";
import {dictionary} from "../../constants/Dictionary";
import {View} from "../Themed";

const SuccessInputs = () => {
  const [successOne, setSuccessOne] = useState("");
  const [successTwo, setSuccessTwo] = useState("");
  const [successTree, setSuccessTree] = useState("");
  return (
    <View>
    <AppTextInput
      value={successOne}
      action={setSuccessOne}
      headline={dictionary.first}
      placeholder={dictionary.questionGoodYesterday}
      multiline
      numberOfLines={3}
    />
  <AppTextInput
      value={successTwo}
      action={setSuccessTwo}
      headline={dictionary.second}
      placeholder={dictionary.questionGoodYesterday}
      multiline
      numberOfLines={3}
    />
      <AppTextInput
      value={successTree}
      action={setSuccessTree}
      headline={dictionary.third}
      placeholder={dictionary.questionGoodYesterday}
      multiline
      numberOfLines={3}
    />
    </View>
  )
}
export default SuccessInputs;