
import * as React from "react";
import QuestionComponent from "../components/shared/QuestionComponent";
import {View} from "../components/Themed";
import {Image} from "react-native";
import globalStyles from "../constants/globalStyles";
import {useNavigation} from "@react-navigation/native";
import {dictionary} from "../constants/Dictionary";

export default function SuccessScreen() {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
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
    />
    </View>
  );
}

