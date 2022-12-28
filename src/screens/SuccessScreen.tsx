import { View } from '../components/Themed';
import globalStyles from "../constants/globalStyles";
import {dictionary} from "../constants/Dictionary";
import SuccessInputs from "../components/success/SuccessInputs";
import {useState} from "react";
import ModalScreen from "./ModalScreen";
import * as React from "react";
import AppText from "../components/shared/AppText";

export default function SuccessScreen() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("de");
  const [modalVisible, setModalVisible] = useState(false);

  let date = new Date();
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  const today = dd + "." + mm + '.' + yyyy;

  return (
    <View style={globalStyles.container}>
      {/*<TouchableOpacity*/}
      {/*  onPress={() => setModalVisible(true)}*/}
      {/*>*/}
      {/*  <FontAwesome*/}
      {/*    name="cog"*/}
      {/*    size={25}*/}
      {/*    style={{ marginRight: 15 }}*/}
      {/*  />*/}
      {/*</TouchableOpacity>*/}
      <View style={globalStyles.marginVertical15}>
      <AppText
        text={dictionary.mySuccess}
        headline
      />
      </View>
        <View style={globalStyles.marginVertical15}>
        <AppText
          text={dictionary.dailyEntry}
        />
        </View>
      {showSuccess &&
        <View style={[globalStyles.row, globalStyles.marginVertical15]}>
          <AppText
            text={dictionary.at}
          />
          <AppText
            text={today}
          />
        </View>
      }
      <SuccessInputs
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
      />
      <ModalScreen
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
    </View>

  );
}

