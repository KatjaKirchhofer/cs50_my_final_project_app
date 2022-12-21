import { Text, View } from '../components/Themed';
import globalStyles from "../constants/globalStyles";
import {dictionary} from "../constants/Dictionary";
import SuccessInputs from "../components/success/SuccessInputs";
import {useState} from "react";

export default function HomeScreen() {
  const [showSuccess, setShowSuccess] = useState(false);

  let date = new Date();
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  const today = dd + "." + mm + '.' + yyyy;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{dictionary.mySuccess}</Text>
      {!showSuccess ?
        <Text style={globalStyles.subTitle}>{dictionary.dailyEntry}</Text>
        :
        <View style={globalStyles.row}>
        <Text style={globalStyles.subTitle}>am: </Text>
        <Text style={globalStyles.subTitle}>{today} </Text>
        </View>
      }
      <SuccessInputs
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
      />
    </View>
  );
}

