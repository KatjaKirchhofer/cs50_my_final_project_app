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
    marginBottom: 10,
    borderBottomWidthWidth: 1,
    borderBottomColor: Colors.primary
  },
  borderBottom: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 40,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  outlinedButton: {
    backgroundColor: "white",
    borderRadius: 40,
    borderColor: Colors.primary,
    borderWidth: 3,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  outlinedButtonText: {
    fontSize: 20,
    color: Colors.primary,
  },
  buttonDisabled: {
    backgroundColor: Colors.grey,
    borderRadius: 40,
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
  alignCenter: {
    alignItems: "center"
  },
  centeredModalView: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 22,
  },
  modalWrapper: {
    justifyContent: "center", alignItems: "center",
  },
  modalFirstView: {
    marginTop: 20,
    flex: 1,
  },
  modalSecondView: {
    width: "90%",
    height: "90%",
    padding: 20,
    borderRadius: 20,

  },
  alignEnd: {
    alignItems: "flex-end"
  },
})
export default globalStyles