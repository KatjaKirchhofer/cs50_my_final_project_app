
import QuestionComponent from "../components/shared/QuestionComponent";
import {View} from "../components/Themed";
import globalStyles from "../constants/globalStyles";
import {Image} from "react-native";
import * as React from "react";
import {useNavigation} from "@react-navigation/native";
import {dictionary} from "../constants/Dictionary";

export default function GratitudeScreen() {
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
          source={require('../../assets/images/hands-g0062da300_1920.jpg')}
        />
      </View>
      <QuestionComponent
        navigationMethod={() => navigation.navigate("Root", {
          screen: "Goals"
        })}
        placeholder={dictionary.questionGratitude}
      />
    </View>
  );
}

