import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: '100%',
  },
  rowCenter: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
  },
  rowSpace: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  borderedContainer: {
    width: '95%',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 20,
    paddingLeft: 16,
    borderColor: '#d0d0d0',
    borderRadius: 5,
    borderWidth: 1,
  },
  regularText18: {
    fontSize: 18,
    color: '#303030',
    marginBottom: 15,
    marginTop: 15,
  },
  regularText18light: {
    fontSize: 18,
    color: '#909090',
    fontWeight: 'bold',
    marginTop: 30,
  },
  label: {
    fontSize: 14,
    color: '#909090',
  },
  labelText: {
    fontSize: 18,
    color: '#303030',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  linkContainer: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 10,
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
  centerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  information: {
    fontSize: 14,
    color: '#606060',
    textAlign: 'center',
    marginBottom: 30,
  },
  cardPagamento: {
    backgroundColor: '#fff',
    paddingTop: 25,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    color: '#606060',
    width: '80%',
    overflow: 'visible',
    height: 100,
    alignSelf: 'center'
  },
  cardPagamentoText: {
    fontSize: 14,
    color: '#303030', 
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
  },
  containerPagamento: {
    backgroundColor: '#1e3650',
    color: '#fff',
    width: width,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerPagamentoDropdown: {
    backgroundColor: '#1e3650',
    color: '#fff',
    width: width - 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlePagamento: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  cardContainerPagamento: {
    flexDirection: "row",
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  faturaSelecionadaTitle: {
    fontSize: 18,
    color: '#303030',
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 30,
    alignSelf: 'center',
  },
  textfatura: {
    fontSize: 14,
    color: '#606060',
    marginTop: 10,
    marginBottom: 10,
  },
  textfaturaRightBold: {
    fontSize: 14,
    color: '#606060',
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonBanco: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#1e3650',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
    marginBottom: 20,
  },
  textButtonBanco: {
      fontSize: 20,
      color: '#fff',
  },
  itemNumber: {
    marginTop: 10,
    marginRight: 20,
    color: '#00a5e4',
    fontWeight: 'bold',
  },
  loginBold: {
    fontSize: 18,
    color: '#303030',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  bancoLogo: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  codigoDeBarras: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    paddingTop: 30,
    paddingBottom: 30,
  },
  buttonCardBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonCard: {
      width: 60,
      height: 60,
      borderWidth: 0.5,
      borderColor: '#d0d0d0',
      borderRadius: 5,
      margin: 20,
      marginTop: 5,
      alignItems: 'center'
  },
  buttonCardIcon: {
      alignSelf: 'center',
      marginTop: 17,
  },
  buttonCardText: {
      fontSize: 8,
  },
  switchContainer: {
    width: '95%',
    flexDirection: 'row',
  },
  switch: {
    marginRight: 15,
  },
  buttonOutline: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    borderColor: '#00a5e4',
    borderWidth: 2,
    borderStyle: 'solid',
    paddingTop: 14,
    paddingBottom: 14,
    marginTop: 30,
  },
  textButtonOutline: {
      fontSize: 20,
      color: '#00a5e4',
  },
})

export default styles;