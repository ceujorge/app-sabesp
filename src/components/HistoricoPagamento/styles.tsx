import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  centerRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  detailsView: {
    backgroundColor: '#1e3650',
    marginRight: 10,
    marginLeft: 10,
  },
  borderedContainer: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
  },
  solidContainer: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#ffffff'
  },
  whiteText: {
    color: '#ffffff',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  whiteTextBold: {
    color: '#ffffff',
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  whiteTextNoSpace: {
    color: '#ffffff',
    alignSelf: 'center',
  },
  centerDot: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'center',
  },
});

export default styles;