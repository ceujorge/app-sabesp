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
    label: {
        alignSelf: 'flex-start',
        marginLeft: 16,
        fontWeight: 'bold',
    },
    inputContainer: {
        marginTop: 30,
        marginLeft: 16,
        marginBottom: 20,
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
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
    cardsData: {
        borderColor: '#606060',
        borderWidth: 0.5,
    },
    buttonCardBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
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
        paddingTop: 17,
    },
    buttonCardText: {
        fontSize: 8,
    },
    select: {
        width: '95%',
        padding: 10,
    },
    paginationButtonBar: {
        width: '90%',
        marginBottom: 20,
        marginTop: 20,
        flexDirection: 'row',
    },
    paginationButton33: {
        width: '33%',
        borderColor: '#909090',
        borderWidth: 1,
        padding: 15,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paginationButton33Selected: {
        backgroundColor: '#d0d0d0',
        width: '33%',
        borderColor: '#909090',
        borderWidth: 1,
        padding: 15,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paginationButton20: {
        width: '20%',
        borderColor: '#909090',
        borderWidth: 1,
        padding: 15,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;