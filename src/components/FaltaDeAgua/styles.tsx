import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 20,
        justifyContent: 'center',
        textAlign: 'center'
    },
    borderedContainer: {
        padding: 15,
        borderRadius: 20,
        borderColor: '#d9d9d9',
        borderWidth: 1,
        textAlign: 'center',
        marginTop: 20,
        backgroundColor: '#ffffff'
    },
    center: {
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15,
    },
    text: {
        textAlign: 'left',
        fontSize: 14,
        marginBottom: 20,
        fontWeight: 'normal',
        width: '90%'
    },    
    textGray: {
      textAlign: 'left',
      fontSize: 14,
      marginBottom: 20,
      fontWeight: 'normal',
      color: '#909090'
  },
    textBold: {
        textAlign: 'center',
        fontSize: 14,
        marginBottom: 20,
        fontWeight: 'bold',
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
    input: {
        width: '95%',
        alignSelf: 'center',
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
    linkContainer: {
        alignItems: 'flex-start',
        textAlign: 'left',
        justifyContent: 'flex-start',
        marginBottom: 10,
    },
    hyperlink: {
        fontSize: 14,
        color: '#00a5e4',
        textDecorationLine: "underline",
        marginBottom: 10,
    },
    modalView: {
        margin: 15,
        backgroundColor: "#F1F6F9",
        borderRadius: 20,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        textAlign: 'left',
    },
    modalTitle: {
        textAlign: 'center',
        fontSize: 14,
        marginBottom: 10,
        color: '#00a5e4',
        fontWeight: 'bold',
    },
    modalText: {
        textAlign: 'center',
        fontSize: 14,
    },
    modalImagem: {
        borderRadius: 20,
        width: '100%',
        marginTop: 15,
        marginBottom: 15,
    },
    modalButton: {
        alignSelf: 'flex-end',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 15,
    },
    modalButtonText: {
        color: '#00a5e4',
        fontWeight: 'bold',
        fontSize: 16,
    },
    checkBoxContainer: {
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: "row",
    },
    radioTexto: {
      marginTop: 7,
      marginRight: 10,
      fontSize: 16,
      color: '#606060',
      textAlign: 'left',
    },
    itemNumber: {
      marginRight: 20,
      fontSize: 16,
      color: '#00a5e4',
      fontWeight: 'bold',
    },
    rowBorder: {
      flexDirection: "row",
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderTopColor: '#d9d9d9',
      borderBottomColor: '#d9d9d9',
      justifyContent: 'flex-start',
      paddingTop: 10,
      textAlign: 'left',
    }
});

export default styles;