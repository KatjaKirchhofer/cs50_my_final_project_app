import { StatusBar } from 'expo-status-bar';
import {Platform, StyleSheet} from 'react-native';
import {dictionary} from "../constants/Dictionary";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import globalStyles from "../constants/globalStyles";
import CloseButton from "../components/shared/CloseButton";

export default function ModalScreen({navigation}: any) {
  return (
    <View style={globalStyles.container}>
      <View style={[globalStyles.row, globalStyles.spaceBetween]}>
      <Text style={styles.title}>{dictionary.settings}</Text>
      <CloseButton
        action={() => navigation.goBack()}
      />
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
