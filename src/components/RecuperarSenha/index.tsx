import React, { useState, useRef } from "react";
import { View, Text, Image, Switch, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { TextInput, RadioButton } from "react-native-paper";

import styles from "./styles";
import Header from "../Header";
import Breadcrumb from "../Breadcrumb"

const breadcrumb = [
  {label: 'Esqueceu a senha?', link: '', active: true}
]

export default function RecuperarSenha({ route, navigation }) {
  const tipoPessoa = route.params.tipoPessoa

  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState('email');
  const [confirmado, setConfirmado] = useState(false);
  const [confirmacao, setConfirmacao] = useState(false);
  const [found, setFound] = useState(false)

  const [passwordVisible, setPasswordVisible] = useState(true);
  const [passwordVisible2, setPasswordVisible2] = useState(true);
  
  const setMascaraCpf = function (cpf) {
    cpf = cpf.replace(/\D/g, "").substring(0, 11);                   //Remove tudo o que não é dígito
    cpf = cpf.replace(/^(\d{3})(\d{3})(\d)/g, "$1.$2.$3"); //Coloca a pontuação
    cpf = cpf.replace(/(\d)(\d{2})$/, "$1-$2");    //Coloca hífen entre os dois ultimos digitos e o resto
    setCpf(cpf);
  }

  return (
    <SafeAreaView>
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.container}>
          <Breadcrumb config={ breadcrumb } navigation={ navigation }/>
          {!confirmado ? (
          <>
            {tipoPessoa === 'PF' ? (<>
              <Text style={[styles.cadastroTexto, {marginTop: 20}]}>Informe seu CPF</Text>
              <TextInput 
                label='CPF' 
                style={styles.cadastroInput}
                value={cpf}
                keyboardType='numeric'
                placeholder={'111.222.333-44'}
                onChangeText={value => setMascaraCpf(value)}
                right={found ? <TextInput.Icon name={'close-circle-outline'} onPress={() => setFound(false)}/> : null}
              />
            </>) : null}

            {tipoPessoa === 'PJ' ? (<>
              <Text style={[styles.cadastroTexto, {marginTop: 20}]}>Informe seu E-mail</Text>
              <TextInput 
                label='E-mail' 
                style={styles.cadastroInput}
                value={email}
                keyboardType='numeric'
                onChangeText={value => setEmail(value)}
                right={found ? <TextInput.Icon name={'close-circle-outline'} onPress={() => setFound(false)}/> : null}
              />
            </>) : null}

            {!found ? (
              <TouchableOpacity 
                style={styles.buttonSubmit} 
                onPress={() => setFound(true)}>
                <Text style={styles.textButtonSubmit}>Continuar</Text>
              </TouchableOpacity>
            ) : null}

            {found ? (<>
              {!confirmacao ? (
                <>
                  <Text style={styles.cadastroTextoBold}>Fulano, identificamos a sua conta!</Text>
                  <Text style={styles.cadastroTexto}>
                    Selecione o e-mail para receber o código de validação
                  </Text>
                  <View style={styles.row}>
                    <RadioButton
                      value="email"
                      status={ checked === 'email' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked('email')}
                    />
                    <Text style={styles.radioTexto}>Email <Text style={{ fontWeight: 'bold'}}>fu*********@gmail.com</Text></Text>
                  </View>

                  <TouchableOpacity 
                    style={checked ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
                    onPress={() => setConfirmacao(true)} 
                    disabled={!checked}>
                    <Text style={styles.textButtonSubmit}>Continuar</Text>
                  </TouchableOpacity>

                  <Text style={styles.cadastroTexto}></Text>

                  <Text style={styles.cadastroTexto}>
                    Caso não tenha mais acesso a esta conta de email, 
                    entre em contato com a Sabesp pelo número 0800 0550195
                  </Text>

                  <Text style={styles.cadastroTexto}></Text>
                </>
              ) : (
                <>
                  <Text style={styles.cadastroTextoBold}>Fulano, informe o código de verificação!</Text>
                  <Text style={styles.cadastroTextoLeft}>
                    Você recebeu um número de 6 dígitos por e-mail fu*********@gmail.com
                  </Text>

                  {/* <View style={styles.row}>
                    <TextInput 
                      mode="outlined"
                      style={styles.codConfirma} 
                      theme={{ colors: { primary: '#00a5e4' }}}
                      placeholder="0"
                      keyboardType='numeric'
                      value={'1'}
                    />
                    <TextInput 
                      mode="outlined"
                      style={styles.codConfirma} 
                      theme={{ colors: { primary: '#00a5e4' }}}
                      placeholder="0" 
                      keyboardType='numeric'
                      value={'2'}
                    />
                    <TextInput 
                      mode="outlined"
                      style={styles.codConfirma} 
                      theme={{ colors: { primary: '#00a5e4' }}}
                      placeholder="0" 
                      keyboardType='numeric'
                      value={'3'}
                    />
                    <TextInput 
                      mode="outlined"
                      style={styles.codConfirma} 
                      theme={{ colors: { primary: '#00a5e4' }}}
                      placeholder="0" 
                      keyboardType='numeric'
                      value={'4'}
                    />
                    <TextInput 
                      mode="outlined"
                      style={styles.codConfirma} 
                      theme={{ colors: { primary: '#00a5e4' }}}
                      placeholder="0" 
                      keyboardType='numeric'
                      value={'5'}
                    />
                    <TextInput 
                      mode="outlined"
                      style={styles.codConfirma} 
                      theme={{ colors: { primary: '#00a5e4' }}}
                      placeholder="0" 
                      keyboardType='numeric'
                      value={'6'}
                    />
                  </View> */}
                  <TextInput 
                    mode="outlined"
                    style={styles.cadastroInput} 
                    theme={{ colors: { primary: '#00a5e4' }}}
                    placeholder="123456"
                    maxLength={6}
                    keyboardType='numeric'
                  />

                  <Text style={styles.hyperlink} onPress={() => null}>
                    Reenviar código
                  </Text>

                  <TouchableOpacity style={styles.buttonSubmit} onPress={() => setConfirmado(true)}>
                    <Text style={styles.textButtonSubmit}>Continuar</Text>
                  </TouchableOpacity>
                </>
              )}
            </>)
            : null}
          </>
          ) : (<>
            <Text style={[styles.cadastroTexto, {marginTop: 20}]}>Agora crie uma senha de acesso</Text>

            <TextInput 
              label='Senha'
              theme={{ colors: { primary: '#00a5e4' }}}
              style={styles.cadastroInput}
              textContentType="password"
              placeholder="Digite sua senha" 
              secureTextEntry={passwordVisible}
              right={<TextInput.Icon name={passwordVisible ? 'eye' : 'eye-off'} onPress={() => setPasswordVisible(!passwordVisible)}/>}
            />

            <TextInput 
              label='Confirme sua senha'
              theme={{ colors: { primary: '#00a5e4' }}}
              style={styles.cadastroInput}
              textContentType="password"
              placeholder="Digite sua senha" 
              secureTextEntry={passwordVisible2}
              right={<TextInput.Icon name={passwordVisible2 ? 'eye' : 'eye-off'} onPress={() => setPasswordVisible2(!passwordVisible2)}/>}
            />

            <TouchableOpacity style={styles.buttonSubmit} onPress={() => navigation.navigate('LoginPage', { tipoPessoa: tipoPessoa })}>
              <Text style={styles.textButtonSubmit}>Continuar</Text>
            </TouchableOpacity>
          </>)}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}