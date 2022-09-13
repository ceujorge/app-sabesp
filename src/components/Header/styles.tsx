import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        height: 80,
        paddingVertical: 10,
        paddingStart: 10,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'space-between'
    },
    tinyLogo: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    title: {
        height: 50,
        paddingLeft: 10,
        fontSize: 16,
        textAlign: 'left',
        fontWeight: 'bold',
        borderLeftWidth: 2,
        borderLeftColor: '#e0e0e0',
    },
    searchIcon: {
        marginRight: 10
    },
    rightMenu: {
        flexDirection: 'row',
        alignContent: 'space-between',
        position: 'absolute',
        right: 15,
    },
});

export default styles;