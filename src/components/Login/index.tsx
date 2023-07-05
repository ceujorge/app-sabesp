import React, { useState } from "react";
import { View, Text, Linking, TouchableOpacity, ScrollView} from "react-native";
import { TextInput, Checkbox } from "react-native-paper";
import axios from "axios";

import styles from "./styles";

export default function Login({ navigation, tipoPessoa = 'PF', redirect = false}) {
  const [CPF, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [PASS, setPASS] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const setMascaraCpf = function (cpf) {
    cpf = cpf.replace(/\D/g, "").substring(0, 11);                          //Remove tudo o que não é dígito
    cpf = cpf.replace(/^(\d{3})(\d{3})(\d)/g, "$1.$2.$3"); //Coloca a pontuação
    cpf = cpf.replace(/(\d)(\d{2})$/, "$1-$2");            //Coloca hífen entre os dois ultimos digitos e o resto
    setCPF(cpf);
  }

  const processCpf = function(cpf) {
    axios.get('https://pwa-api-nsint.sabesp.com.br/cliente/cpf/' + cpf)
      .then(res => {
        navigation.navigate('Home', { dadosCliente: res.data })
      })
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: '#F1F6F9' }]}>
      <View style={styles.center}>
        <Text style={styles.loginTitle}>Bem-vindo ao Sabesp Mobile</Text>
        <Text style={styles.loginInformation}>Realize seu login para acessar nossos serviços</Text>
      </View>
      <View>
        {tipoPessoa === 'PF' ? (
          <TextInput 
            style={styles.loginInput}
            theme={{ colors: { primary: '#00a5e4' }}}
            label='CPF' 
            keyboardType='numeric'
            value={CPF} 
            onChangeText={value => { setMascaraCpf(value) }}
            maxLength={14}
          />
        ) : null}

        {tipoPessoa === 'PJ' ? (
          <TextInput 
            style={styles.loginInput}
            theme={{ colors: { primary: '#00a5e4' }}}
            label='E-mail' 
            value={email} 
            onChangeText={value => { setEmail(value) }}
          />
        ) : null}

        <TextInput 
          label='Senha'
          style={styles.loginPassword} 
          theme={{ colors: { primary: '#00a5e4' }}}
          textContentType="password"
          value={PASS} 
          onChangeText={value => { setPASS(value) }} 
          secureTextEntry={passwordVisible}
          right={<TextInput.Icon name={passwordVisible ? 'eye' : 'eye-off'} onPress={() => setPasswordVisible(!passwordVisible)}/>}
        />

        <View style={styles.row}>
          <View style={styles.checkBoxContainer}>
            <Checkbox.Android
              status={isSelected ? 'checked' : 'unchecked'}
              color={'#00a5e4'}
              onPress={() => setSelection(!isSelected)}
            />
            <Text style={{fontSize: 14}}>Manter-se conectado</Text>
          </View>

          <View style={styles.linkContainer}>
            <Text style={styles.hyperlink} onPress={() => null /*navigation.navigate('RecuperarSenha', { tipoPessoa: tipoPessoa })*/}>
              Esqueceu sua senha?
            </Text>
          </View>

        </View>

        {tipoPessoa === 'PF' ? (
          <>
            <TouchableOpacity style={(CPF) ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
              onPress={() => processCpf(CPF)}
              disabled={!(CPF)}>
              <Text style={styles.textButtonSubmit}>Entrar</Text>
            </TouchableOpacity>
            <Text style={styles.loginInformation}>Primeiro acesso? <Text style={styles.hyperlink} onPress={() => null /*navigation.navigate('Cadastro')*/}>Registre-se</Text></Text>
          </>
        ) : null}

        {tipoPessoa === 'PJ' ? (
          <>
            <TouchableOpacity style={styles.buttonOutline} onPress={() => redirect ? navigation.navigate(redirect) : navigation.navigate('HomePJ')}>
              <Text style={styles.textButtonOutline}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonSubmit} onPress={() => navigation.navigate('CadastroPJ')}>
              <Text style={styles.textButtonSubmit}>Meu primeiro acesso</Text>
            </TouchableOpacity>
          </>
        ) : null}  
      </View>
    </ScrollView>
  )
};