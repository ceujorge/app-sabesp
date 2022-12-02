import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontWeight: 'bold', 
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },
  headerPJ: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 30,
  },
  avatar: {
    marginLeft: 15,
    marginTop: 7,
    marginRight: 10, 
    width: 93,
    height: 93,
    alignSelf: 'flex-start',
  },
  textHeaderPJ: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 12,
    marginTop: 10,
  },
  cardRow: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  contatoIcon: {
    marginLeft: 35,
    marginRight: 35,
    width: 50,
    height: 60,
    alignSelf: 'center',
  },
  icon1: {
    marginLeft: 30,
    marginRight: 30,
    width: 60,
    height: 60,
    alignSelf: 'center',
  },
  icon2: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    width: 60,
    height: 70,
  },
  icon3: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    width: 60,
    height: 75,
  },
  buttonOutline: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 40,
    borderColor: '#00a5e4',
    borderWidth: 2,
    borderStyle: 'solid',
    marginTop: 20,
  },
  textButtonOutline: {
    fontSize: 14,
    color: '#00a5e4',
  },
  defaultText: {
    fontSize: 14,
    alignSelf: 'center',
  },
  cardText: {
    fontSize: 14,
    textAlign: 'left',
    marginTop: 30,
  },
  cardLink: {
    marginTop: 15,
    fontSize: 14,
    color: '#00a5e4',
    fontWeight: 'bold',
  }
});

export default styles;