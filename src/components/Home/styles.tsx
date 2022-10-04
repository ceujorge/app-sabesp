import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    row: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 15,
    },
    inputContainer: {
        marginTop: 30,
        marginLeft: 16,
        marginBottom: 20,
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    enderecoContainer: {
        justifyContent: 'space-between',
        width: '90%',
        marginLeft: 16,
        marginRight: 16,
        flexDirection: 'row',
        marginBottom: 30,
    },
    halfContainer: {
        width: '50%',
    },
    textEnderecoFornecimento: {
        fontSize: 16,
        alignSelf: 'flex-start',
    },
    textEnderecoFornecimentoBold: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },
    textEnderecoVencimento: {
        fontSize: 16,
        alignSelf: 'flex-end',
        textAlign: 'right',
    },
    textEnderecoVencimentoBold: {
        fontSize: 16,
        fontWeight: 'bold',
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
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 30,
        paddingBottom: 10,
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
});

export default styles;