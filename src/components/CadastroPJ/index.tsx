import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Linking } from "react-native";
import { TextInput, Checkbox, RadioButton } from "react-native-paper";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'

import Header from "../Header";
import Breadcrumb from "../Breadcrumb"
import Servicos from "../Servicos";

import styles from "./styles";

export default function CadastroPJ({ navigation }) {
  const [CNPJ, setCNPJ] = useState('');
  const [foundCNPJ, setFoundCNPJ] = useState(false);
  const [CPF, setCPF] = useState('');
  const [foundCPF, setFoundCPF] = useState(false);
  const [cpfState, setCpfState] = useState('');
  const [PASS, setPASS]: any = useState('');
  const [isSelected, setSelection] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [checked, setChecked] = useState('email');

  const breadcrumb = [
    {label: 'Home', link: 'Home'}, 
    {label: 'Representante Legal', link: '', active: true}
  ]

  const handleCpfSubmit = () => {
    setFoundCPF(true)
    if(CPF.replace(/\D/g, '') == '00000000000') { setCpfState('com acesso') }
    else if(CPF.replace(/\D/g, '') == '11111111111') { setCpfState('sem acesso') } 
    else { navigation.navigate('CadastroPJSemCadastro', { cpf: CPF}) }
  }

  const setMascaraCpf = function (cpf) {
    cpf = cpf.replace(/\D/g, "").substring(0, 11);                   //Remove tudo o que não é dígito
    cpf = cpf.replace(/^(\d{3})(\d{3})(\d)/g, "$1.$2.$3"); //Coloca a pontuação
    cpf = cpf.replace(/(\d)(\d{2})$/, "$1-$2");    //Coloca hífen entre os dois ultimos digitos e o resto
    setCPF(cpf);
  }

  const setMascaraCnpj = function (cnpj) {
    cnpj = cnpj.replace(/\D/g, "").substring(0, 14);                   //Remove tudo o que não é dígito
    cnpj = cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d)/g, "$1.$2.$3/$4"); //Coloca a pontuação
    cnpj = cnpj.replace(/(\d)(\d{2})$/, "$1-$2");    //Coloca hífen entre os dois ultimos digitos e o resto
    setCNPJ(cnpj);
  }

  return (
    <SafeAreaView>
      <Header />
      <ScrollView  contentContainerStyle={{ paddingBottom: 100 }}>
        <Breadcrumb config={ breadcrumb } navigation={ navigation }/>
        <View style={styles.steps}>
          <FontAwesomeIcon icon={ faCircle } size={14} style={styles.activeStep}/>
          <Text style={styles.activeStep}>Identificação</Text>
          <FontAwesomeIcon icon={ faMinus } size={14} style={ styles.inactiveStep}/>
          <FontAwesomeIcon icon={ faCircle } size={14} style={ styles.inactiveStep}/>
          <Text style={ styles.inactiveStep}>Validação</Text>
          <FontAwesomeIcon icon={ faMinus } size={14} style={ styles.inactiveStep}/>
          <FontAwesomeIcon icon={ faCircle } size={14} style={ styles.inactiveStep}/>
          <Text style={ styles.inactiveStep}>Confirmação</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.cadastroTextoBold}>Verificação de Cadastro do Representante Legal Pessoa Jurídica</Text>
          <Text style={styles.cadastroTexto}>Informe o CNPJ da empresa que você pretende se vincular</Text>
          
          <View>
            {!foundCNPJ ? (
              <TouchableOpacity style={styles.floatingInputButton} onPress={() => setFoundCNPJ(true)}>
                <Text style={styles.textFloatingInputButton}>Entrar</Text>
              </TouchableOpacity>
            ) : null}

            <TextInput 
              mode="outlined"
              theme={{ colors: { primary: '#00a5e4' }}}
              placeholder="Digite..." 
              value={CNPJ} 
              onChangeText={value => { setMascaraCnpj(value) }} 
              keyboardType='numeric'
              maxLength={19}
              right={foundCNPJ ? <TextInput.Icon name={'close-circle-outline'} onPress={() => setFoundCNPJ(false)}/> : null}
            />

            <Servicos navigation={navigation}/>
          </View>
          {foundCNPJ ? (<>
            <Text style={styles.cadastroTextoBold}>Eng****** do Brasil S/A</Text>
            <Text style={styles.cadastroTexto}>AV. PRESIDENTE C******** - PRAIA GRANDE - SP</Text>

            <Text style={styles.cadastroTextoBold}>Informe o CPF do representante</Text>
            <Text style={styles.cadastroTexto}>O seu CPF será validado</Text>

            <TextInput 
              mode="outlined"
              theme={{ colors: { primary: '#00a5e4' }}}
              placeholder="Digite seu CPF" 
              value={CPF}
              onChangeText={value => { setMascaraCpf(value) }} 
              keyboardType='numeric'
              maxLength={19}
              right={foundCPF ? <TextInput.Icon name={'close-circle-outline'} onPress={() => {setFoundCPF(false); setCpfState('')}}/> : null}
            />

            {!foundCPF && cpfState == '' ? 
              <TouchableOpacity style={styles.buttonSubmit} onPress={() => handleCpfSubmit()}>
                <Text style={styles.textButtonSubmit}>Continuar</Text>
              </TouchableOpacity>
            : null}

            {cpfState == 'com acesso' && foundCPF ? (<>
              <Text style={styles.cadastroTextoBold}>Fulano, identificamos a sua conta!</Text>
              <Text style={styles.cadastroTexto}>Identificamos que você possui um cadastro e uma senha de acesso</Text>

              <TextInput 
                mode="outlined"
                label='Senha'
                theme={{ colors: { primary: '#00a5e4' }}}
                textContentType="password"
                placeholder="Digite sua senha" 
                value={PASS} 
                onChangeText={value => { setPASS(value) }} 
                secureTextEntry={passwordVisible}
                right={<TextInput.Icon name={passwordVisible ? 'eye' : 'eye-off'} onPress={() => setPasswordVisible(!passwordVisible)}/>}
              />

              <View style={styles.linkContainer}>
                <Text style={styles.hyperlink} onPress={() => navigation.navigate('RecuperarSenha', { tipoPessoa: 'PJ' })}>
                  Esqueci minha senha
                </Text>
              </View>

              <View style={styles.checkBoxContainer}>
                <Checkbox
                  status={isSelected ? 'checked' : 'unchecked'}
                  onPress={() => setSelection(!isSelected)}
                />
                <Text>Mantenha-me conectado</Text>
              </View>

              <TouchableOpacity style={styles.buttonSubmit} onPress={() => navigation.navigate('CadastroPJComAcesso')}>
                <Text style={styles.textButtonSubmit}>Continuar</Text>
              </TouchableOpacity>

            </>) : null}

            {cpfState.includes('sem acesso') && foundCPF ? (<>
              <Text style={styles.cadastroTextoBold}>Fulano, identificamos a sua conta!</Text>
                {cpfState.includes('2') ? (<>
                  <Text style={styles.cadastroTextoLeft}>
                    Você recebeu um código de 6 dígitos no e-mail fu*********@gmail.com
                  </Text>

                  {/* <View style={{ flexDirection: 'row' }}>
                    <TextInput 
                      mode="outlined"
                      style={styles.codConfirma} 
                      theme={{ colors: { primary: '#00a5e4' }}}
                      keyboardType='numeric'
                      placeholder="0"
                      value={'1'}
                    />
                    <TextInput 
                      mode="outlined"
                      style={styles.codConfirma} 
                      theme={{ colors: { primary: '#00a5e4' }}}
                      keyboardType='numeric'
                      placeholder="0" 
                      value={'2'}
                    />
                    <TextInput 
                      mode="outlined"
                      style={styles.codConfirma} 
                      theme={{ colors: { primary: '#00a5e4' }}}
                      keyboardType='numeric'
                      placeholder="0" 
                      value={'3'}
                    />
                    <TextInput 
                      mode="outlined"
                      style={styles.codConfirma} 
                      theme={{ colors: { primary: '#00a5e4' }}}
                      keyboardType='numeric'
                      placeholder="0" 
                      value={'4'}
                    />
                    <TextInput 
                      mode="outlined"
                      style={styles.codConfirma} 
                      theme={{ colors: { primary: '#00a5e4' }}}
                      keyboardType='numeric'
                      placeholder="0" 
                      value={'5'}
                    />
                    <TextInput 
                      mode="outlined"
                      style={styles.codConfirma} 
                      theme={{ colors: { primary: '#00a5e4' }}}
                      keyboardType='numeric'
                      placeholder="0" 
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

                  <View style={styles.linkContainer}>
                    <Text style={styles.hyperlink} onPress={() => Linking.openURL('javascript:void(0)')}>
                      Reenviar código
                    </Text>
                  </View>

                  <TouchableOpacity style={styles.buttonSubmit} onPress={() => navigation.navigate('CadastroPJSemAcesso')}>
                    <Text style={styles.textButtonSubmit}>Continuar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.buttonOutline} onPress={() => {setFoundCPF(false); setCpfState('')}}>
                    <Text style={styles.textButtonOutline}>Entre de outra maneira</Text>
                  </TouchableOpacity>

                </>) : (<>

                  <Text style={styles.cadastroTextoLeft}>
                    O código de acesso será enviado para o email abaixo
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                    <RadioButton
                      value="email"
                      status={ checked === 'email' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked('email')}
                    />
                    <Text style={styles.radioTexto}>Email <Text style={{ fontWeight: 'bold'}}>fu*********@gmail.com</Text></Text>
                  </View>

                  <TouchableOpacity style={styles.buttonSubmit} onPress={() => setCpfState('sem acesso 2')}>
                    <Text style={styles.textButtonSubmit}>Continuar</Text>
                  </TouchableOpacity>

                  <Text style={styles.cadastroTextoLeft}>
                    Caso não tenha mais acesso à esse e-mail, entre em contato com a Sabesp pelo número <Text style={{fontWeight: 'bold'}}>{'0800 0550195'}</Text>
                  </Text>
                </>)}
            </>) : null}
          </>) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}