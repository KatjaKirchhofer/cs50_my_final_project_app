import React from "react";
import QuestionComponent from "../components/shared/QuestionComponent";
import {View} from "../components/Themed";
import globalStyles from "../constants/globalStyles";
import {Image} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {dictionary} from "../constants/Dictionary";

const GoalsScreen = () => {
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
          source={require('../../assets/images/emotions-g75e9008b1_1920.jpg')}
        />
      </View>
      <QuestionComponent
        navigationMethod={() => navigation.navigate("Root", {
          screen: "Success"
        })}
        placeholder={dictionary.questionGoals}
      />
    </View>
  )
}
export default GoalsScreen;