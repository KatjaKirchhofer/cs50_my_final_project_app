import {StatusBar} from 'expo-status-bar';
import {Modal, Platform, SafeAreaView, StyleSheet} from 'react-native';
import {dictionary} from "../constants/Dictionary";
import {Text, View} from '../components/Themed';
import globalStyles from "../constants/globalStyles";
import CloseButton from "../components/shared/CloseButton";
import ChangeLanguage from "../components/settings/ChangeLanguage";
import React, {SetStateAction} from "react";
import AppText from "../components/shared/AppText";

interface Interface {
  modalVisible: boolean
  setModalVisible: React.Dispatch<SetStateAction<boolean>>
  selectedLanguage: string
  setSelectedLanguage: React.Dispatch<SetStateAction<string>>
}

export default function ModalScreen({
                                      modalVisible, setModalVisible,
                                      selectedLanguage, setSelectedLanguage
                                    }: Interface) {
  return (
    <View style={styles.centeredView}>

    <Modal
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible)
      }}
    >

      <SafeAreaView style={styles.modalView}>
        <View style={styles.centeredView}>
          <View style={[globalStyles.row, globalStyles.spaceBetween, {backgroundColor: "green"}]}>
            <Text style={styles.title}>{dictionary.settings}</Text>
            <AppText text={"hallo???"}/>
            <CloseButton
              action={() => setModalVisible(false)}
            />
          </View>
          <ChangeLanguage
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />

          {/* Use a light status bar on iOS to account for the black space above the modal */}
          <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'}/>
        </View>
      </SafeAreaView>

    </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 200,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    flex: 1,
    width: "100%",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

});
