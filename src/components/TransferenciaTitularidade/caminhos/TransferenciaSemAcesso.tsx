import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'

import Header from "../../Header";
import Breadcrumb from "../../Breadcrumb"

import styles from "../styles";

const breadcrumb = [
  {label: 'Home', link: 'Home'}, 
  {label: 'Transferência de Titularidade', link: '', active: true}
]

export default function TransferenciaSemAcesso({ navigation }) {
  const [PASS, setPASS]: any = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [PASS2, setPASS2]: any = useState('');
  const [passwordVisible2, setPasswordVisible2] = useState(true);

  return (
    <SafeAreaView>
      <Header />
      <Breadcrumb config={ breadcrumb } navigation={ navigation }/>
      <ScrollView  contentContainerStyle={{ paddingBottom: 150 }}>
        <View style={styles.steps}>
          <FontAwesomeIcon icon={ faCircle } size={14} style={styles.activeStep}/>
          <Text style={styles.activeStep}>Identificação</Text>
          <FontAwesomeIcon icon={ faMinus } size={14} style={ styles.inactiveStep}/>
          <FontAwesomeIcon icon={ faCircle } size={14} style={ styles.inactiveStep}/>
          <Text style={ styles.inactiveStep}>Dados do hidrômetro</Text>
          <FontAwesomeIcon icon={ faMinus } size={14} style={ styles.inactiveStep}/>
          <FontAwesomeIcon icon={ faCircle } size={14} style={ styles.inactiveStep}/>
          <Text style={ styles.inactiveStep}>Confirmação</Text>
        </View>
        <Text style={styles.cadastroTextoBold}>Fulano, validamos seu cadastro</Text>
        <Text style={styles.cadastroTexto}>Agora crie uma senha de acesso</Text>

        <TextInput 
          mode="outlined"
          label='Senha *'
          style={styles.loginPassword} 
          theme={{ colors: { primary: '#00a5e4' }}}
          textContentType="password"
          placeholder="Digite sua senha" 
          value={PASS} 
          onChangeText={value => { setPASS(value) }} 
          secureTextEntry={passwordVisible}
          right={<TextInput.Icon name={passwordVisible ? 'eye' : 'eye-off'} onPress={() => setPasswordVisible(!passwordVisible)}/>}
        />

        <TextInput 
          mode="outlined"
          label='Confirme sua senha *'
          style={styles.loginPassword} 
          theme={{ colors: { primary: '#00a5e4' }}}
          textContentType="password"
          placeholder="Digite sua senha" 
          value={PASS2} 
          onChangeText={value => { setPASS2(value) }} 
          secureTextEntry={passwordVisible2}
          right={<TextInput.Icon name={passwordVisible2 ? 'eye' : 'eye-off'} onPress={() => setPasswordVisible2(!passwordVisible2)}/>}
        />

        <TouchableOpacity style={styles.buttonSubmit} onPress={() => navigation.navigate('TransferenciaValidacao')}>
          <Text style={styles.textButtonSubmit}>Continuar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textButtonOutline}>Cancelar Transferência</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  )
}