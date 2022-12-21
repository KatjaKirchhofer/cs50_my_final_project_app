import React, {SetStateAction, useEffect, useState} from "react";
import AppTextInput from "../shared/AppTextInput";
import {dictionary} from "../../constants/Dictionary";
import {Text, View} from "../Themed";
import {ScrollView, TouchableOpacity} from "react-native";
import globalStyles from "../../constants/globalStyles";
import SuccessContent from "./SuccessContent";

interface Interface {
  showSuccess: boolean
  setShowSuccess: React.Dispatch<SetStateAction<boolean>>
}

const SuccessInputs = ({showSuccess, setShowSuccess}: Interface) => {
  const [successOne, setSuccessOne] = useState<string>("");
  const [successTwo, setSuccessTwo] = useState<string>("");
  const [successTree, setSuccessTree] = useState<string>("");
  const [successArray, setSuccessArray] = useState<string[]>([]);
  const [disabled, setDisabled] = useState(true);

  const disableButton = () => {
    if ((successOne && successTwo && successTree) === "") {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }

  const resetForm = () => {
    setSuccessOne("");
    setSuccessTwo("");
    setSuccessTree("");
    setDisabled(true)
  }

  const saveSuccess = () => {
    const array: string[] = [successOne, successTwo, successTree];
    setSuccessArray(array)
    setShowSuccess(true);
    resetForm()
  }

  useEffect(() => {
    disableButton()
  }, [successOne, successTwo, successTree]);


  return (
    <ScrollView>
      {!showSuccess &&
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
        <TouchableOpacity
          style={disabled ? globalStyles.buttonDisabled : globalStyles.button}
          disabled={disabled}
          onPress={saveSuccess}
        >
          <Text style={globalStyles.buttonText}>{dictionary.save}</Text>
        </TouchableOpacity>
      </View>}
      {showSuccess &&
        <SuccessContent
          successArray={successArray}
        />
      }
    </ScrollView>
  )
}
export default SuccessInputs;