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
});

export default styles;