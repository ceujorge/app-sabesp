import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck'

import Header from "../Header";
import Breadcrumb from "../Breadcrumb"
import styles from "./styles";

const breadcrumb = [
  {label: 'Home', link: 'Home'}, 
  {label: 'Validação de cadastro', link: '', active: true},
]

export default function ValidacaoUsuario({ navigation }) {
  const [oldPasswordVisible, setOldPasswordVisible] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [passwordVisible2, setPasswordVisible2] = useState(true);
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({
    'email': 'Antônio Nogueira',
    'perfil': 'Nível II',
    'nome': '',
    'cpf': '',
    'telefone': '',
    'empresa': '',
    'setor': '', 
    'cargo': '',
    'senhaAnterior': '',
    'senha': '',
    'senha2': '',
  });

  const setMascaraTel = function (tel) {
    tel = tel.replace(/\D/g, "").substring(0, 11); //Remove tudo o que não é dígito
    tel = tel.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    tel = tel.replace(/(\d)(\d{4})$/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    setForm({...form, 'telefone': tel})
  }

  const setMascaraCpf = function (cpf) {
    cpf = cpf.replace(/\D/g, "").substring(0, 11);;                  //Remove tudo o que não é dígito
    cpf = cpf.replace(/^(\d{3})(\d{3})(\d)/g, "$1.$2.$3"); //Coloca a pontuação
    cpf = cpf.replace(/(\d)(\d{2})$/, "$1-$2");    //Coloca hífen entre os dois ultimos digitos e o resto
    setForm({...form, 'cpf': cpf})
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Breadcrumb config={ breadcrumb } navigation={ navigation }/>
      <ScrollView style={styles.scrollArea} contentContainerStyle={{ paddingBottom: 150 }}>

      {enviado ? (
          <View style={styles.container}>
            <View style={styles.rowCenter}>
              <FontAwesomeIcon icon={ faCircleCheck } size={100} style={{ color: '#00a000', marginTop: 30}}/>
            </View>
            <Text style={styles.title}>Perfil validado com sucesso!</Text>
            <Text style={styles.textCenter}>O perfil foi validado e adicionado com sucesso, você receberá um e-mail confirmando a conclusão do cadastro</Text>

            <TouchableOpacity style={styles.buttonSubmit} onPress={() => navigation.navigate('HomePJ')}>
              <Text style={styles.textButtonSubmit}>Fechar</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <Text style={styles.title}>Validação de Cadastro</Text>
            <Text style={styles.defaultText}>Conclua o cadastro abaixo para ter acesso ao Sabesp Mobile</Text>

            <View style={styles.row}>
              <TextInput 
                label='E-mail' 
                style={[styles.cadastroInput, { width: '55%'}]}
                theme={{ colors: { primary: '#00a5e4' }}}
                value={form.email}
                disabled
              />

              <TextInput 
                label='Perfil do usuário' 
                style={[styles.cadastroInput, { width: '30%'}]}
                theme={{ colors: { primary: '#00a5e4' }}}
                value={form.perfil}
                disabled
              />  
            </View>

            <TextInput 
              label='Nome completo' 
              placeholder="Digite o seu nome" 
              style={styles.cadastroInput}
              theme={{ colors: { primary: '#00a5e4' }}}
              value={form.nome}
              onChangeText={value => { setForm({...form, 'nome': value}) }}
            />

            <TextInput 
              label='CPF' 
              placeholder="Digite o seu CPF" 
              style={styles.cadastroInput}
              theme={{ colors: { primary: '#00a5e4' }}}
              value={form.cpf}
              onChangeText={value => setMascaraCpf(value)}
              keyboardType='numeric'
            />

            <TextInput 
              label='Telefone' 
              placeholder="(00) 00000-0000" 
              style={styles.cadastroInput}
              theme={{ colors: { primary: '#00a5e4' }}}
              value={form.telefone} 
              onChangeText={value => { setMascaraTel(value) }}
              keyboardType='numeric'
            />

            <TextInput 
              label='Empresa' 
              placeholder="Digite o nome e unidade em que trabalha" 
              style={styles.cadastroInput}
              theme={{ colors: { primary: '#00a5e4' }}}
              value={form.empresa} 
              onChangeText={value => { setForm({...form, 'empresa': value}) }}
            />
            
            <TextInput 
              label='Setor' 
              placeholder="Digite o setor em que atua" 
              style={styles.cadastroInput}
              theme={{ colors: { primary: '#00a5e4' }}}
              value={form.setor} 
              onChangeText={value => { setForm({...form, 'setor': value}) }}
            />
            
            <TextInput 
              label='Cargo' 
              placeholder="Digite o seu cargo" 
              style={styles.cadastroInput}
              theme={{ colors: { primary: '#00a5e4' }}}
              value={form.cargo} 
              onChangeText={value => { setForm({...form, 'cargo': value}) }}
            />

            <TextInput 
              label='Senha anterior'
              theme={{ colors: { primary: '#00a5e4' }}}
              style={styles.cadastroInput}
              textContentType="password"
              placeholder="Digite sua senha anterior" 
              secureTextEntry={passwordVisible}
              right={<TextInput.Icon name={oldPasswordVisible ? 'eye' : 'eye-off'} onPress={() => setOldPasswordVisible(!oldPasswordVisible)}/>}
            />

            <TextInput 
              label='Senha'
              theme={{ colors: { primary: '#00a5e4' }}}
              style={styles.cadastroInput}
              textContentType="password"
              placeholder="Digite sua nova senha" 
              secureTextEntry={passwordVisible}
              right={<TextInput.Icon name={passwordVisible ? 'eye' : 'eye-off'} onPress={() => setPasswordVisible(!passwordVisible)}/>}
            />

            <TextInput 
              label='Confirme sua senha'
              theme={{ colors: { primary: '#00a5e4' }}}
              style={styles.cadastroInput}
              textContentType="password"
              placeholder="Digite sua nova senha para confirmação" 
              secureTextEntry={passwordVisible2}
              right={<TextInput.Icon name={passwordVisible2 ? 'eye' : 'eye-off'} onPress={() => setPasswordVisible2(!passwordVisible2)}/>}
            />

            <TouchableOpacity style={styles.buttonSubmit} onPress={() => setEnviado(true)}>
              <Text style={styles.textButtonSubmit}>Continuar</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}