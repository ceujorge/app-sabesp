import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: 15,
  },
  halfView: {
    width: '45%'
  },
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold', 
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },
  cadastroTexto: {
    fontSize: 14,
    color: '#606060',
    textAlign: 'center',
    marginBottom: 30,
  },
  cadastroTextoLeft: {
    fontSize: 14,
    color: '#606060',
    marginBottom: 20,
  },
  cadastroTextoBold: {
    fontSize: 18,
    color: '#303030',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  cadastroTituloBold: {
    fontSize: 18,
    color: '#303030',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  cadastroInput: {
    width: '90%',
    margin: 15,
  },
  cadastroInputHalfLeft: {
    width: '45%',
    marginRight: 15,
    marginBottom: 30,
  },
  cadastroInputHalfRight: {
    width: '100%',
    marginLeft: 15,
  },
  cadastroInputHalfRightContainer: {
    width: '50%',
    backgroundColor: '#e7e7e7',
    height: 65,
    borderBottomWidth: 1,
    borderBottomColor: '#606060',
  },
  cpfLabel: {
    width: '90%',
    marginHorizontal: 10,
    marginTop: 10,
    paddingLeft: 15,
    marginBottom: -40,
  },
  cpfInput: {
    width: '90%',
    margin: 12,
  },
  buttonSubmit: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: '#00a5e4',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },
  buttonSubmitDisabled: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: '#aeaeae',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },
  textButtonSubmit: {
    fontSize: 20,
    color: '#fff',
  },
  buttonOutline: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderColor: '#00a5e4',
    borderWidth: 2,
    borderStyle: 'solid',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },
  textButtonOutline: {
      fontSize: 20,
      color: '#00a5e4',
  },
  steps: {
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  activeStep: {
    padding: 5,
    color: '#303030',
    textAlign: 'center',
  },
  inactiveStep: {
    padding: 5,
    color: '#e0e0e0',
    textAlign: 'center',
  },
  loginPassword: {
    width: '90%',
    margin: 12,
  },
  imgRenomear: {
    width: 55,
    height: 40,
    marginRight: 10,
    marginTop: 30,
  },
  questionIcon: {
    marginTop: 17,
    marginLeft: 5,
    color: '#555555'
  },
  questionX: {
    marginTop: 17,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#000',
  },
  modalView: {
    margin: 15,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  collapsibleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginLeft: 15,
    marginTop: 10,
    paddingBottom: 10,
    borderBottomColor: '#606060',
    borderBottomWidth: 0.5,
  },
  collapsibleHeaderText: {
    fontSize: 16,
  },
  caret: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 3,
  },
  collapsible: {
    paddingTop: 3,
    marginLeft: 25,
    flexDirection: 'column',
  },
  collapsibleItem: {
    fontSize: 16,
  },
  checkBoxContainer: {
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 15,
    flexDirection: "row",
  },
  switchContainer: {
    width: '95%',
    margin: 15,
    flexDirection: 'row',
  },
  switch: {
    marginRight: 15,
  },
  switchText: {
    marginTop: 10,
    fontSize: 16,
    marginRight: 50,
  },
});

export default styles;