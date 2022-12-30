import React from "react";
import {View} from "../components/Themed";
import AppText from "../components/shared/AppText";
import store from "../store/store";
import answerStore from "../store/answerStore";
import {FlatList, Image, ListRenderItem} from "react-native";
import {Answer} from "../types/AnswerType";
import globalStyles from "../constants/globalStyles";

const ResultScreen = () => {
  const dictionary = store.getState().dictionary;
  const answers = answerStore.getState();
  let date = new Date();
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  const today = dd + "." + mm + '.' + yyyy;


  const renderAnswers: ListRenderItem<Answer> = ({item}) => {
    return (
      <View>

        <AppText text={item.type} headline/>
        <AppText text={item.descriptionOne} />
        <AppText text={item.descriptionTwo} />
        <AppText text={item.descriptionThree}/>
      </View>
    )
  }

  console.log(answers)

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
      <AppText text={dictionary.result}/>
      <AppText text={today}/>
      <FlatList data={answers} renderItem={renderAnswers}/>
    </View>
  )
}
export default ResultScreen