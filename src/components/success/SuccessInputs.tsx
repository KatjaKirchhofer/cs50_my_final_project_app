import React, {SetStateAction, useEffect, useState} from "react";
import AppTextInput from "../shared/AppTextInput";
import { View} from "../Themed";
import {KeyboardAvoidingView, Platform} from "react-native";
import AppButton from "../shared/AppButton";
import store from "../../store/store";
import {showSuccessMessage} from "../shared/MessageService";
import answerStore from "../../store/answerStore";

interface Interface {
  showSuccess: boolean
  setShowSuccess: React.Dispatch<SetStateAction<boolean>>
  navigationMethod: ()=> void
  placeholder: string
  type: string
}

const SuccessInputs = ({showSuccess, setShowSuccess, navigationMethod, placeholder, type}: Interface) => {
  const [successOne, setSuccessOne] = useState<string>("");
  const [successTwo, setSuccessTwo] = useState<string>("");
  const [successTree, setSuccessTree] = useState<string>("");
  const [successArray, setSuccessArray] = useState<string[]>([]);
  const [disabled, setDisabled] = useState(true);
  const dictionary = store.getState().dictionary;

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
    answerStore.dispatch({
      type: "answerAdded",
      payload: {
        type: type,
        descriptionOne: successOne,
        descriptionTwo: successTwo,
        descriptionThree: successTree
      }
    })
    const array: string[] = [successOne, successTwo, successTree];
    setSuccessArray(array)
    setShowSuccess(true);
    resetForm();
    showSuccessMessage(dictionary.success, dictionary.saveSuccess)
    navigationMethod()
  }

  useEffect(() => {
    disableButton()
  }, [successOne, successTwo, successTree]);


  return (
    <View>
      {!showSuccess &&
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
        <AppTextInput
          value={successOne}
          action={setSuccessOne}
          placeholder={placeholder}
          multiline
          numberOfLines={3}
        />
        <AppTextInput
          value={successTwo}
          action={setSuccessTwo}
          placeholder={placeholder}
          multiline
          numberOfLines={3}
        />
        <AppTextInput
          value={successTree}
          action={setSuccessTree}
          placeholder={placeholder}
          multiline
          numberOfLines={3}
        />
        <View style={{paddingTop: 30}}>
        <AppButton
          text={dictionary.save}
          action={saveSuccess}
          disabled={disabled}
        />
        </View>
         </KeyboardAvoidingView>}
      {/*{showSuccess &&*/}
      {/*<SuccessContent*/}
      {/*  successArray={successArray}*/}
      {/*/>*/}
      {/*}*/}
    </View>

  )
}
export default SuccessInputs;