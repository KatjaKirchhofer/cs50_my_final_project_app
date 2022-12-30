
import QuestionComponent from "../components/shared/QuestionComponent";
import {View} from "../components/Themed";
import globalStyles from "../constants/globalStyles";
import {Image} from "react-native";
import * as React from "react";
import {useNavigation} from "@react-navigation/native";
import store from "../store/store";
import {QuestionTypes} from "../enums/QuestionTypes";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

export default function GratitudeScreen() {
  const dictionary = store.getState().dictionary;

  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <KeyboardAwareScrollView>
      <View style={{paddingTop: 10}}>
        <Image
          style={{
            resizeMode: "cover",
            height: 230,
            width: "100%",
          }}
          source={require('../../assets/images/hands-g0062da300_1920.jpg')}
        />
      </View>
      <QuestionComponent
        navigationMethod={() => navigation.navigate("Root", {
          screen: "Goals"
        })}
        placeholder={dictionary.questionGratitude}
        type={QuestionTypes.GRATITUDE}
      />
      </KeyboardAwareScrollView>
    </View>
  );
}

