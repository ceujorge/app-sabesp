import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 20,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20,
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 20,
        marginTop: 20
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
    input: {
        width: '95%',
        alignSelf: 'center',
    },    
});

export default styles;