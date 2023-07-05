import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        paddingBottom: 50,
        borderBottomColor: '#909090',
        borderBottomWidth: 1,
        backgroundColor: '#ffffff',
    },
    container: {
        margin: 15,
    },
    borderedContainer: {
        padding: 15,
        borderRadius: 20,
        borderColor: '#909090',
        borderWidth: 1,
        textAlign: 'center',
        marginTop: 20,
        backgroundColor: '#ffffff'
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowCenter: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center',
    },
    borderedContainer: {
        padding: 15,
        borderRadius: 20,
        borderColor: '#909090',
        borderWidth: 1,
        textAlign: 'center',
        marginBottom: 20,
        backgroundColor: '#ffffff'
    },
    halfContainer: {
        width: '50%',
    },
    leftMenu: {
        marginLeft: 15,
        justifyContent: 'flex-start',
        flex: 1,
    },
    logoHorizontal: {
        marginTop: 20,
        height: 20,
        width: 100,
        alignSelf: 'center',
    },
    text: {
        fontSize: 14,
    },
    textBold: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    textAzul: {
        fontSize: 14,
        color: '#00a5e4',
        fontWeight: 'bold',        
    },
    textBanco: {
        fontSize: 14,
        marginTop: 10,
    },
    debitosEmAtraso: {
        fontSize: 20,
        alignSelf: 'flex-start',
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#ff0000',
    },
    valorDosDebitos: {
        fontSize: 20,
        alignSelf: 'flex-end',
        textAlign: 'right',
    },
    select: {
        width: '95%',
        padding: 10,
    },
    collapsibleHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 30,
        paddingBottom: 5,
        borderBottomColor: '#606060',
        borderBottomWidth: 0.5,
    },
    collapsibleHeaderText: {
        fontSize: 18,
        alignSelf: 'flex-start',
    },
    caret: {
        alignSelf: 'flex-end',
        marginRight: 10,
        marginBottom: 3,
    },
    collapsible: {
        flex: 1,
    },
    collapsibleItem: {
        fontSize: 22,
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
    buttonFilter: {
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      width: '45%',
      backgroundColor: '#00a5e4',
      paddingTop: 5,
      paddingBottom: 5,
      marginRight: 10,
      marginTop: 15,
      height: 30,
    },
    textButtonSubmitFilter: {
      marginTop: -3,
      fontWeight: 'bold',
      fontSize: 14,
      color: '#fff',
    },
    buttonSubmitMini: {
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%',
        backgroundColor: '#00a5e4',
        paddingTop: 8,
        paddingBottom: 8,
        marginRight: 10
    },
    textButtonSubmitMini: {
        fontSize: 12,
        color: '#fff',
    },
    textButtonSubmit: {
        fontSize: 20,
        color: '#fff',
    },
    listItem: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    rightMenu: {
        flexDirection: 'row',
        alignContent: 'space-between',
        position: 'absolute',
        right: 15,
        top: 0,
        color: 'white'
    },
    buttonFatura: {
      marginTop: 20,
      backgroundColor: '#ffffff',
      borderTopColor: '#909090',
      borderBottomColor: '#909090',
      borderTopWidth: 1,
      borderBottomWidth: 1,
    },
    contadorText: {
      marginTop: 20,
      fontStyle: 'italic',
      color: '#a0a0a0',
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
    modalView: {
      backgroundColor: "white",
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
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