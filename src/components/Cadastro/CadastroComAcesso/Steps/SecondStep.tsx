import React, { useState } from "react";
import { View, Text, Image, Switch, Linking, TouchableOpacity } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { TextInput } from "react-native-paper";

import styles from "./../styles";

export default function SecondStep({ navigation, form, setForm, page, setPage }) {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [passwordVisible2, setPasswordVisible2] = useState(true);

  return (
    <View>
      <Text style={styles.cadastroTextoBold}>Meu primeiro acesso</Text>
      <Text style={styles.cadastroTexto}>Agora crie uma senha de acesso</Text>

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

      <TouchableOpacity style={styles.buttonSubmit} onPress={() => setPage(3)}>
        <Text style={styles.textButtonSubmit}>Continuar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textButtonOutline}>Cancelar</Text>
      </TouchableOpacity>
      
      <Text style={styles.cadastroTexto}></Text>
    </View>
  )
}