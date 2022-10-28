import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    paddingVertical: 8,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  divisor: {
    paddingLeft: 10,
    paddingRight: 10,
  }
});

export default styles;