import { StyleSheet } from "react-native";
import Constants from 'expo-constants';
import Collapsible from "react-native-collapsible";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
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
  parcelaTexto: {
    fontSize: 14,
    color: '#303030',
    textAlign: 'center',
    marginBottom: 30,
    marginRight: 12,
    marginLeft: 12,
    width: '90%',
  },
  parcelaTextoLeft: {
    fontSize: 14,
    color: '#303030',
    marginBottom: 15,
    marginRight: 12,
    marginLeft: 12,
  },
  parcelaTextoRight: {
    position: 'absolute',
    fontSize: 14,
    color: '#303030',
    right: 12,
    marginBottom: 15,
    marginRight: 12,
    marginLeft: 12,
  },
  parcelaTextoSmallLeft: {
    fontSize: 10,
    color: '#303030',
    marginBottom: 15,
    marginRight: 12,
    marginLeft: 12,
  },
  parcelaTextoSmallRight: {
    position: 'absolute',
    fontSize: 10,
    color: '#303030',
    right: 12,
    marginBottom: 15,
    marginRight: 12,
    marginLeft: 12,
  },
  parcelaTextoBold: {
    fontSize: 14,
    color: '#303030',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  parcelaTextoBoldLeft: {
    fontSize: 14,
    color: '#303030',
    fontWeight: 'bold',
    marginBottom: 15,
    marginRight: 12,
    marginLeft: 12,
  },
  parcelaTextoBoldRight: {
    position: 'absolute',
    right: 12,
    fontSize: 14,
    color: '#303030',
    fontWeight: 'bold',
    marginBottom: 15,
    marginRight: 12,
    marginLeft: 12,
  },
  buttonSubmit: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    backgroundColor: '#00a5e4',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 15,
    marginBottom: 15,
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
  textButtonOutline: {
    fontSize: 20,
    color: '#00a5e4',
  }, 
  collapsibleHeader: {
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  collapsibleHeaderText: {
    marginLeft: 12,
    fontSize: 18,
    alignSelf: 'flex-start',
  },
  collapsible: {
    paddingTop: 8,
  },
  caret: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginLeft: 5,
  },
  collapsibleFooterText: {
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
    width: '61%'
  },
  table: {
    width: '90%',
    margin: 12,
    borderRadius: 10,
  },
  tableCol: {
    backgroundColor: '#e0e0e0',
    borderColor: '#909090',
    borderBottomWidth: 0.5
  },
  cardsData: {
    borderColor: '#909090',
    borderWidth: 0.5,
  },
  buttonArea: {
    borderColor: '#909090',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default styles;