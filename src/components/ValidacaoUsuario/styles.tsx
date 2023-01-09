import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
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
  successIcon: {
    color: '#00a000'
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold', 
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },
  defaultText: {
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
    margin: 20,
  },
  textCenter: {
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
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
  textButtonSubmit: {
    fontSize: 20,
    color: '#fff',
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
    marginLeft: 12,
    marginTop: 30,
  },
  textButtonOutline: {
    fontSize: 20,
    color: '#00a5e4',
  }, 
  buttonOutlineMiniContainer: {
    width: '90%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  cadastroInput: {
    width: '90%',
    margin: 12,
  },
  cadastroInputHalf: {
    width: '42%',
    margin: 12,
  },
  cadastroInputHalfRight: {
    width: '100%',
    marginLeft: 15,
  },
  cadastroInputHalfRightContainer: {
    marginTop: 10,
    width: '45%',
    backgroundColor: '#e7e7e7',
    height: 65,
    borderBottomWidth: 1,
    borderBottomColor: '#606060',
  },
  scrollArea: {
    width: '100%',
  },
  comboBox: {
    borderRadius: 5,
    borderColor: '#f0f0f0',
    borderWidth: 2,
    borderStyle: 'solid',
    height: 65,
    margin: 12,
    marginBottom: 30,
    paddingTop: 20,
    paddingLeft: 15,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
  },
  rowCenter: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
  },
  imgDocumento: {
    width: 95,
    height: 75,
    marginRight: 10,
  },
  halfView: {
    width: '45%'
  },
  switchContainer: {
    width: '95%',
    margin: 15,
    flexDirection: 'row',
  },
  switch: {
    marginRight: 15,
  },
  link: {
    fontSize: 14,
    color: 'blue',
    alignSelf:'center',
    textAlign:'center',
    textDecorationLine: "underline",
  },
  linkContainer: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonFornecimento:{
    position: 'absolute',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
    backgroundColor: '#00a5e4',
    paddingTop: 8,
    paddingBottom: 8,
    top: 30,
    right: 35,
    zIndex: 9999,
  },
  textButtonFornecimento: {
      fontSize: 14,
      color: '#fff',
  },
});

export default styles;