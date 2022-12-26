import { StyleSheet } from "react-native";
import Colors from "./Colors";


const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '300',
    marginVertical: 10
  },
  textInput: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop: 10,
    marginBottom: 30,
    borderWidth: 1,
    borderRadius: 5
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 7,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
  buttonDisabled: {
    backgroundColor: Colors.grey,
    borderRadius: 7,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  row: {
    flexDirection: "row"
  },
  spaceBetween: {
    justifyContent: "space-between"
  },
  text: {
    fontSize: 17,
    lineHeight: 24,
  },

})
export default globalStyles