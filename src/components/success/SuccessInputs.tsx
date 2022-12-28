import React, {SetStateAction, useEffect, useState} from "react";
import AppTextInput from "../shared/AppTextInput";
import { View} from "../Themed";
import {ScrollView} from "react-native";
import SuccessContent from "./SuccessContent";
import AppButton from "../shared/AppButton";
import store from "../../store/store";

interface Interface {
  showSuccess: boolean
  setShowSuccess: React.Dispatch<SetStateAction<boolean>>
  navigationMethod: ()=> void
  placeholder: string
}

const SuccessInputs = ({showSuccess, setShowSuccess, navigationMethod, placeholder}: Interface) => {
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
    const array: string[] = [successOne, successTwo, successTree];
    setSuccessArray(array)
    setShowSuccess(true);
    resetForm();
    setTimeout(() => {
      navigationMethod()
    }, 3000);
  }

  useEffect(() => {
    disableButton()
  }, [successOne, successTwo, successTree]);


  return (
    <ScrollView>
      {!showSuccess &&
      <View style={{paddingTop: 20}}>
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