import React from "react";
import {View} from "../components/Themed";
import AppText from "../components/shared/AppText";
import store from "../store/store";

const ResultScreen = () => {
  const dictionary = store.getState().dictionary;

  return (
    <View>
      <AppText text={"Results"}/>
    </View>
  )
}
export default ResultScreen