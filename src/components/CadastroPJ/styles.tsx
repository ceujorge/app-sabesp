import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: 16,
  },
  halfView: {
    width: '45%'
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
    marginBottom: 30,
    paddingRight: 40,
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
  buttonOutlineMini: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    borderColor: '#00a5e4',
    borderWidth: 2,
    borderStyle: 'solid',
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonOutlineMiniContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  floatingInputButton:{
    position: 'absolute',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    backgroundColor: '#00a5e4',
    paddingTop: 8,
    paddingBottom: 8,
    top: 18,
    right: 10,
    zIndex: 9999,
  },
  textFloatingInputButton: {
    fontSize: 14,
    color: '#fff',
  },
  steps: {
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  activeStep: {
    paddingHorizontal: 5,
    color: '#303030',
  },
  inactiveStep: {
    paddingHorizontal: 5,
    color: '#e0e0e0',
  },
  checkBoxContainer: {
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 15,
    flexDirection: "row",
  },
  checkBoxLabel: {
    fontSize: 14,
    color: '#606060',
    alignSelf:'center',
    textAlign:'center',
    marginLeft: 10,
  },
  checkboxBold: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  checkboxText: {
    fontSize: 18,
    color: '#505050',
    marginLeft: 10,
    marginBottom: 20,
  },
  checkboxSubText: {
    fontSize: 12,
    color: '#505050',
    marginLeft: 10,
    marginBottom: 5,
  },
  hyperlink: {
    fontSize: 14,
    color: 'blue',
    alignSelf: 'center',
    textAlign: 'center',
    textDecorationLine: "underline",
    marginBottom: 10,
    marginTop: 10,
  },
  linkContainer: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  radioTexto: {
    marginTop: 5,
    fontSize: 14,
    color: '#606060',
    textAlign: 'left',
  },
  codConfirma: {
    marginLeft: 10,
    width: '13%',
    height: 40,
    textAlign: 'center'
  },
  loginPassword: {
    width: '90%',
    margin: 12,
  },
  imgDocumento: {
    width: 75,
    height: 55,
    marginRight: 10,
  },
  imgDocumento2: {
    width: 50,
    height: 55,
    marginRight: 10,
  },
  itemNumber: {
    marginRight: 20,
    color: '#00a5e4',
    fontWeight: 'bold',
    fontSize: 20
  },
});

export default styles;