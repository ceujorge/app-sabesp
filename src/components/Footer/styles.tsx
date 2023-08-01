import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        height: 60,
        bottom: 0,
        justifyContent: 'space-between',
    },  
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    third: {
        width: '33%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    }
});

export default styles;