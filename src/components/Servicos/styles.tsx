import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#211f20',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 10,
    },
    title: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        color: '#fff',
        paddingTop: 20,
        paddingBottom: 20,
    },
    card: {
        borderRadius: 10,
        backgroundColor: '#ffffff',
        padding: 10,
        width: '45%',
        margin: 5,
    },
    icon: {
        height: 60,
        width: 55,
        margin: 5,
    },
    cardText: {
        marginTop: 15,
        color: '#606060',
    },
    cardLink: {
        marginTop: 15,
        color: '#00a5e4',
        fontWeight: 'bold',
    },
    blue: {
        color: '#00a5e4',
    },
});

export default styles;