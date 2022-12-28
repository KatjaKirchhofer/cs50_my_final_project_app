import React, {SetStateAction} from "react";
import {Modal} from "react-native";
import {View} from "../Themed";
import globalStyles from "../../constants/globalStyles";
import CloseButton from "../shared/CloseButton";
import ChangeLanguage from "./ChangeLanguage";


export interface Props {
  setModalVisible: React.Dispatch<SetStateAction<boolean>>,
  modalVisible: boolean,
  selectedLanguage: string,
  setSelectedLanguage: React.Dispatch<SetStateAction<string>>
}

function LanguageModal({
                         setModalVisible,
                         modalVisible, selectedLanguage, setSelectedLanguage
                       }: Props) {


  return (
    <View style={globalStyles.modalWrapper}>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
      >
        <View
          style={globalStyles.modalFirstView}
        >
          <View style={{
            width: "100%",
            height: "100%",
            padding: 20,
          }}
          >
            <View style={[globalStyles.alignEnd, {paddingTop: 20}]}>
              <CloseButton
                action={() => setModalVisible(false)}
              />
            </View>
            <ChangeLanguage
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
              setModalVisible={setModalVisible}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default LanguageModal;
