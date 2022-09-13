import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

import Header from "../Header";
import Breadcrumb from "../Breadcrumb"

import styles from "./styles";

export default function Cadastro({ navigation }) {
  const [CPF, setCPF] = useState('')

  const breadcrumb = [
    {label: 'Home', link: 'Home'}, 
    {label: 'Meu primeiro acesso', link: '', active: true}
  ]

  const handleCpfSubmit = (cpf) => {
    if(cpf.replace(/\D/g, '') == '11111111111') {
      navigation.navigate('CadastroComAcesso')
    } else {
      navigation.navigate('CadastroSemAcesso')
    }
  }

  const setMascaraCpf = function (cpf) {
    cpf = cpf.replace(/\D/g, "");                  //Remove tudo o que não é dígito
    cpf = cpf.replace(/^(\d{3})(\d{3})(\d)/g, "$1.$2.$3"); //Coloca a pontuação
    cpf = cpf.replace(/(\d)(\d{2})$/, "$1-$2");    //Coloca hífen entre os dois ultimos digitos e o resto
    setCPF(cpf);
  }

  return (
    <View>
      <Header />
      <Breadcrumb config={ breadcrumb } navigation={ navigation }/>
      <Text style={styles.cadastroTextoBold}>Meu primeiro acesso</Text>
      <Text style={styles.cadastroTexto}>Informe seu CPF</Text>
      
      <TextInput 
        placeholder="Digite o seu CPF"
        style={styles.cpfInput}
        theme={{ colors: { primary: '#00a5e4' }}}
        label='CPF' 
        value={CPF} 
        onChangeText={value => { setMascaraCpf(value) }}
        maxLength={14}
      />

      <TouchableOpacity style={styles.buttonSubmit}>
        <Text style={styles.textButtonSubmit} onPress={() => handleCpfSubmit(CPF)}>Continuar</Text>
      </TouchableOpacity>
    </View>
  )
}