import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

const linking: LinkingOptions<any> = {
    prefixes: [Linking.createURL('/')],
    config: {
        screens: {
            Home: 'home',
            Fatura: 'fatura',
            Login: 'login'
        },
    },
};

export default linking;