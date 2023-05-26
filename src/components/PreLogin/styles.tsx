import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  buttonSubmit: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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
  textButtonSubmitHalf: {
    fontSize: 16,
    color: '#fff',
  },
  menu: {
    position: 'absolute',
    width: '95%',
    top: 30,
    alignItems: 'flex-end',
    marginRight: 15
  },
  logoLoginContainer: {
    width: '100%',
    height: 260,
    marginBottom: 10,
  },
  logoLogin: {
    height: '110%',
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  main: {
    marginLeft: 10,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  halfRow: {
    width: '50%',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    marginTop: 120,
    marginBottom: 60,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
  hyperlink: {
    fontSize: 14,
    color: '#00a5e4',
    alignSelf:'center',
    textAlign:'center',
    textDecorationLine: "underline",
    marginTop: 15,
  },
  socialRow: {
    width: '70%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
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
  buttonModalRight: {
    alignSelf: 'flex-end',
    color: '#00a5e4',
    fontWeight: 'bold',
  }
  
});

export default styles;