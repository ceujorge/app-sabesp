import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    tabView:{
        backgroundColor: '#fff',
        textAlign: 'center',
        justifyContent: 'center',
    },
    container: {
        overflow: 'hidden',
    },
    center: {
        alignItems: 'center',
        textAlign: 'center',
        paddingHorizontal: 15
    },
    loginTitle: {
        fontSize: 18,
        color: '#303030',
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 30,
    },
    loginInformation: {
        fontSize: 14,
        color: '#606060',
        textAlign: 'center',
        marginBottom: 30,
    },
    loginOuterLabel: {
        fontSize: 14,
        color: '#606060',
        textAlign: 'center',
    },
    loginLabel: {
        width: '90%',
        marginHorizontal: 10,
        marginTop: 10,
        paddingLeft: 15,
        marginBottom: -40,
    },
    loginInput: {
        width: '90%',
        // borderRadius: 5,
        // borderColor: '#BEBEBE',
        // borderWidth: 2,
        // borderStyle: 'solid',
        // height: 65,
        margin: 12,
        // marginBottom: 30,
        // paddingTop: 20,
        // paddingLeft: 15,
        // overflow: 'hidden',
    },
    loginPassword: {
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
});

export default styles;