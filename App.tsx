import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/components/Home';
import Login from './src/components/Login';
import Fatura from './src/components/Fatura';
import Faturas from './src/components/Faturas';
import Cadastro from './src/components/Cadastro';
import CadastroSemAcesso from './src/components/Cadastro/CadastroSemAcesso';
import CadastroComAcesso from './src/components/Cadastro/CadastroComAcesso';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Faturas" component={Faturas} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="CadastroSemAcesso" component={CadastroSemAcesso} />
        <Stack.Screen name="CadastroComAcesso" component={CadastroComAcesso} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // comentar com Navigation
    backgroundColor: '#f0f6f6',
    alignItems: 'center',
    justifyContent: 'center', // comentar com Navigation
  },
});
