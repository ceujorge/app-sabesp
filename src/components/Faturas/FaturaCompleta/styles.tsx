import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '90%',
        margin: 12,
    },
    table: {
        width: '90%',
        margin: 12,
        borderRadius: 10,
    },
    tableCol: {
        width: 100,
        backgroundColor: '#1e3650',
        color: '#fff',
        borderBottomColor: '#00a5e4',
        borderBottomWidth: 0.5
    },
    tableData: {
        borderColor: '#606060',
        borderWidth: 0.5,
    },
    buttonBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    button: {
        width: 60,
        height: 60,
        borderWidth: 0.5,
        borderColor: '#d0d0d0',
        borderRadius: 5,
        margin: 20,
        marginTop: 5,
        alignItems: 'center'
    },
    buttonIcon: {
        alignSelf: 'center',
        paddingTop: 17,
    },
    buttonText: {
        fontSize: 8,
    },
});

export default styles;