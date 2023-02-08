import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  rowCenter: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
  },
  rowSpace: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  container: {
    marginLeft: 15,
    marginRight: 15
  },
  title: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  textCenter: {
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
  },
  textLeft: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  textRight: {
    fontSize: 16,
    alignSelf: 'flex-end',
    textAlign: 'right',
    marginBottom: 10,
  },
  textCenterBold: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textLeftBold: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  textRightBold: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    textAlign: 'right',
    marginBottom: 10,
  },
  center: {
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 15
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
  buttonFornecimento:{
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
  textButtonFornecimento: {
      fontSize: 14,
      color: '#fff',
  },
  checkBoxContainer: {
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: 'center',
  },
  checkBoxLabel: {
    fontSize: 14,
    color: '#606060',
    alignSelf:'center',
    textAlign:'center',
    marginLeft: 10,
  },
  hyperlink: {
    fontSize: 14,
    color: 'blue',
    alignSelf:'center',
    textAlign:'center',
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
});

export default styles;