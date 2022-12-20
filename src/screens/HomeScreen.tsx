import { Text, View } from '../components/Themed';
import globalStyles from "../constants/globalStyles";
import {dictionary} from "../constants/Dictionary";
import SuccessInputs from "../components/success/SuccessInputs";

export default function HomeScreen() {

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{dictionary.mySuccess}</Text>
      <Text style={globalStyles.subTitle}>{dictionary.dailyEntry}</Text>
      <SuccessInputs/>


    </View>
  );
}

