import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        alignContent: 'center',
        fontWeight: 600,
        paddingTop: Constants.statusBarHeight,
    },
    scrollView: {

    },
    tinyLogo: {
        width: 20,
        height: 20,
        marginRight: 15,
        paddingRight: 15,
        position: 'relative',
        top: 4,
    },
    header: {
        width: '100%',
        display: 'flex',
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'stretch',
        alignContent: 'space-between'
    },
    headerText: {
        textAlign: 'left',
        fontSize: 16,
        fontWeight: '500',
        width: '100%',
    },
    headerTextRight: {
        fontSize: 22,
        textAlign: 'right',
    },
    content: {
        backgroundColor: '#fff',
    },
    boxTitle: {
        marginTop: 15,
        // marginBottom: 30,
        marginBottom: 20,
    },
    bold: {
        fontWeight: 'bold',
    },
    box: {
        width: '100%',
        padding: 15,
        borderRadius: 5,
        minHeight: 40,
        backgroundColor: 'white',
        marginBottom: 30,
    },
    label: {
        fontWeight: 'bold',
        // marginHorizontal: 10,
        // marginTop: 10,
        // paddingLeft: 15,
        // marginBottom: -40,
        marginBottom: 10,
    },
    comboBox: {
        borderRadius: 5,
        borderColor: '#f0f0f0',
        borderWidth: 2,
        borderStyle: 'solid',
        height: 65,
        margin: 12,
        marginBottom: 30,
        paddingTop: 20,
        paddingLeft: 15,
        overflow: 'hidden',
    },
    itens: {
        marginTop: 30,
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    maturity: {
        marginTop: 10,
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    maturityItem: {
        fontSize: 11,
        padding: 10,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#e0e0e0',
        borderRadius: 5,
        textAlign: 'center',
        lineHeight: 20,
    },
    maturityItemActive: {
        padding: 15,
        fontSize: 11,
        fontWeight: 'bold',
        borderRadius: 5,
        color: '#ffffff',
        textAlign: 'center',
        lineHeight: 20,
        backgroundColor: '#1e3650',
    },
    whiteColor: {
        color: 'white',
    },
    maturityValues: {
        marginTop: 30,
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    maturityValue: {
        padding: 10,
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    maturityPayed: {
        color: '#056b09',
        padding: 10,
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    block: {
        width: '100%',
    }
});

export default styles;