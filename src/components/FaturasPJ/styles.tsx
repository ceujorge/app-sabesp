import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginTop: 20,
        marginBottom: 10,
        fontWeight: 'bold', 
        fontSize: 20,
        alignSelf: 'center',
        textAlign: 'center',
    },
    input: {
        width: '90%',
        margin: 12,
    },
    label: {
        alignSelf: 'flex-start',
        marginLeft: 16,
        fontSize: 16,
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
    favoritoTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    favoritoTitle: {
        color: '#fff', 
        alignSelf: 'flex-end', 
        marginRight: 20, 
        fontWeight: 'bold'
    },
    favoritoTitleStar: {
        color: '#fff', 
        alignSelf: 'flex-start', 
        marginLeft: 10, 
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
        marginTop: 17,
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
    situacaoAberta: {
        alignSelf: 'flex-start', 
        marginLeft: 20,
        fontWeight: 'bold'
    },
    situacaoPaga: {
        alignSelf: 'flex-start', 
        marginLeft: 20,
        color: 'green',
        fontWeight: 'bold'
    },
    situacaoVencida: {
        alignSelf: 'flex-start', 
        marginLeft: 20,
        color: 'red',
        fontWeight: 'bold',
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
        width: 60,
        height: 60,
        alignSelf: 'flex-start',
    },
    textHeaderPJ: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    radioBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 30,
        marginBottom: 20,
    },
    radioTexto: {
        marginTop: 7,
        marginRight: 10,
        fontSize: 16,
        color: '#606060',
        textAlign: 'left',
    },
    dateContainer: {
        marginLeft: 15,
        marginRight: 20,
        flexDirection: 'row',
    },
    dateInput: {
        width: '100%',
        alignSelf: 'flex-end',
    },
    dateIcon: {
        paddingTop: 10,
    },
});

export default styles;