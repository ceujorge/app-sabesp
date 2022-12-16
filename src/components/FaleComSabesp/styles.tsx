import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      marginLeft: 15,
      marginRight: 15
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
    inputContainer: {
        marginTop: 30,
        marginBottom: 20,
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    enderecoContainer: {
        justifyContent: 'space-between',
        width: '90%',
        marginRight: 16,
        flexDirection: 'row',
        marginBottom: 30,
    },
    halfContainer: {
        width: '50%',
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
    },
    textRight: {
        fontSize: 16,
        alignSelf: 'flex-end',
        textAlign: 'right',
    },
    textCenterBold: {
      fontSize: 16,
      alignSelf: 'center',
      fontWeight: 'bold',
    },
    textLeftBold: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },
    textRightBold: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        textAlign: 'right',
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
    switchContainer: {
        width: '100%',
        marginRight: 15,
        marginTop: 15,
        marginBottom: 15,
        flexDirection: 'row',
    },
    switch: {
        marginRight: 15,
    },
});

export default styles;