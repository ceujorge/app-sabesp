import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/components/Home';
import PreLogin from './src/components/PreLogin';
import LoginPage from './src/components/Login/LoginPage';
import Faturas from './src/components/Faturas';
import Cadastro from './src/components/Cadastro';
import CadastroSemAcesso from './src/components/Cadastro/CadastroSemAcesso';
import CadastroComAcesso from './src/components/Cadastro/CadastroComAcesso';
import HomePJ from './src/components/HomePJ';
import CadastroPJ from './src/components/CadastroPJ';
import CadastroPJSemAcesso from './src/components/CadastroPJ/CadastroPJSemAcesso';
import CadastroPJSemCadastro from './src/components/CadastroPJ/CadastroPJSemCadastro';
import CadastroPJComAcesso from './src/components/CadastroPJ/CadastroPJComAcesso';
import CadastroPJValidacao from './src/components/CadastroPJ/CadastroPJValidacao';
import FaturasCNPJ from './src/components/FaturasPJ/FaturasCNPJ';
import FaturasPJData from './src/components/FaturasPJ/FaturasPJData';
import FaturasPJFornecimento from './src/components/FaturasPJ/FaturasPJFornecimento';
import Parcelamento from './src/components/Parcelamento'
import Acordos from './src/components/Acordos';
import RecuperarSenha from './src/components/RecuperarSenha';
import FornecimentoEncontrado from './src/components/HomePJ/FornecimentoEncontrado';
import FaleComSabesp from './src/components/FaleComSabesp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PreLogin" screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="PreLogin" component={PreLogin} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Faturas" component={Faturas} />
        <Stack.Screen name="Parcelamento" component={Parcelamento} />
        <Stack.Screen name="Acordos" component={Acordos} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
        <Stack.Screen name="FaleComSabesp" component={FaleComSabesp} />

        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="CadastroSemAcesso" component={CadastroSemAcesso} />
        <Stack.Screen name="CadastroComAcesso" component={CadastroComAcesso} />

        {/* PJ */}
        <Stack.Screen name="HomePJ" component={HomePJ} />
        <Stack.Screen name="FornecimentoEncontrado" component={FornecimentoEncontrado} />

        <Stack.Screen name="CadastroPJ" component={CadastroPJ} />
        <Stack.Screen name="CadastroPJComAcesso" component={CadastroPJComAcesso} />
        <Stack.Screen name="CadastroPJSemAcesso" component={CadastroPJSemAcesso} />
        <Stack.Screen name="CadastroPJSemCadastro" component={CadastroPJSemCadastro} />
        <Stack.Screen name="CadastroPJValidacao" component={CadastroPJValidacao} />

        <Stack.Screen name="FaturasCNPJ" component={FaturasCNPJ} />
        <Stack.Screen name="FaturasPJData" component={FaturasPJData} />
        <Stack.Screen name="FaturasPJFornecimento" component={FaturasPJFornecimento} />
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
