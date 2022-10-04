import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    userIcon: {
        color: '#00a5e4',
        margin: 15,
        marginLeft: 30,
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 15,
    },
    text: {
        fontSize: 22,
    },
    listItem: {
        width: '90%',
        fontSize: 22,
        marginLeft: 20,
        marginTop: 10,
        paddingBottom: 10,
        borderBottomColor: '#606060',
        borderBottomWidth: 0.5,
        justifyContent: 'flex-start'
    },
    collapsibleHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignItems: 'center',
        fontSize: 22,
        marginLeft: 20,
        marginTop: 10,
        paddingBottom: 10,
        borderBottomColor: '#606060',
        borderBottomWidth: 0.5,
    },
    collapsibleHeaderText: {
        fontSize: 22,
        alignSelf: 'flex-start',
    },
    caret: {
        alignSelf: 'flex-end',
        marginRight: 10,
        marginBottom: 3,
    },
    collapsible: {
        flex: 1,
        marginLeft: 50,
    },
    collapsibleItem: {
        fontSize: 22,
    },
});

export default styles;