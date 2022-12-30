
import * as React from "react";
import QuestionComponent from "../components/shared/QuestionComponent";
import {View} from "../components/Themed";
import {Image} from "react-native";
import globalStyles from "../constants/globalStyles";
import {useNavigation} from "@react-navigation/native";
import store from "../store/store";
import {QuestionTypes} from "../enums/QuestionTypes";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function SuccessScreen() {
  const navigation = useNavigation();
  const dictionary = store.getState().dictionary;


  return (
    <View  style={globalStyles.container}>
      <KeyboardAwareScrollView>
    <View style={{paddingTop: 10}}>
      <Image
        style={{
          resizeMode: "cover",
          height: 230,
          width: "100%",
        }}
        source={require('../../assets/images/inspiration-gb99adca4e_1920.jpg')}
      />
    </View>
    <QuestionComponent
      navigationMethod={() => navigation.navigate("Root", {
        screen: "Gratitude"
      })}
      placeholder={dictionary.questionGoodYesterday}
      type={QuestionTypes.SUCCESS}
    />
      </KeyboardAwareScrollView>
    </View>
  );
}

