import { StyleSheet } from "react-native";
import { JumpingTransition } from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 20,
    alignItems: 'center',
  },
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
  avatarCenter: {
    marginLeft: 15,
    marginTop: 30,
    marginRight: 10, 
    marginBottom: 15,
    width: 113,
    height: 113,
    alignSelf: 'center',
  },
  textHeaderPJ: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 12,
    marginTop: 10,
  },
  centerDot: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'center',
  },
  cardRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  downloadIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    width: '20%',
  },
  downloadIcon: {
    color: '#000',
    margin: 10,
  },
  contatoIcon: {
    marginLeft: 25,
    marginRight: 25
    ,
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
  buttonSideText: {
    width: '50%',
    alignSelf: 'center',
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonSubmitHalf: {
    borderRadius: 5,
    width: '50%',
    height: 50,
    backgroundColor: '#00a5e4',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  textButtonSubmitHalf: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
  textButtonSubmit: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonOutline: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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
  faturaText: {
    fontSize: 14,
    color: '#606060',
    marginBottom: 5,
    textAlign: 'center',
  },
  largeText: {
    fontSize: 30,
    fontWeight: 'bold',
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
  },
  table: {
    width: '90%',
    margin: 15,
    borderRadius: 10,
  },
  tableCol: {
    width: 100,
    backgroundColor: '#1e3650',
    color: '#fff',
    borderBottomColor: '#00a5e4',
    borderBottomWidth: 0.5
  },
  cardsData: {
    borderColor: '#606060',
    borderWidth: 0.5,
  },
  oneFourth: {
    textAlign: 'center',
    width: '25%',
  },
  servicoCard: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    padding: 30,
  },
  servicoIcon: {
    alignSelf: 'center',
    height: 50,
    width: 40,
    margin: 5,
  },
  servicoIcon2: {
    alignSelf: 'center',
    height: 40,
    width: 50,
    margin: 5,
  },
  servicoIcon3: {
    alignSelf: 'center',
    height: 40,
    width: 40,
    margin: 5,
  },
});

export default styles;