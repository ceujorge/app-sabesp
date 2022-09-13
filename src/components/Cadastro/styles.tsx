import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cadastroTexto: {
    fontSize: 14,
    color: '#606060',
    textAlign: 'center',
    marginBottom: 30,
  },
  cadastroTextoBold: {
    fontSize: 18,
    color: '#303030',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
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
  textButtonSubmit: {
      fontSize: 20,
      color: '#fff',
  },
});

export default styles;