import React, { useState } from "react";
import { View, Text, Image, Switch, Linking, TouchableOpacity } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { TextInput } from "react-native-paper";

import styles from "./../styles";

export default function SecondStep({ navigation, form, setForm, page, setPage }) {
  return (
    <View>
      <Text style={styles.cadastroTextoBold}>Dados do imóvel</Text>

      <TextInput 
        label='Cep' 
        placeholder="Digite o cep" 
        style={styles.cadastroInput}
        theme={{ colors: { primary: '#00a5e4' }}}
        value={form.cep} 
        onChangeText={value => { setForm({...form, 'cep': value}) }}
      />

      <View style={styles.linkContainer}>
          <Text style={styles.link} onPress={() => Linking.openURL('javascript:void(0)')}>
            Não sei o meu CEP
          </Text>
      </View>

      <TextInput 
        label='Endereço completo' 
        placeholder="Digite o endereço do imóvel" 
        style={styles.cadastroInput}
        theme={{ colors: { primary: '#00a5e4' }}}
        value={form.endereço} 
        onChangeText={value => { setForm({...form, 'endereço': value}) }}
      />

      <TextInput 
        label='Número' 
        placeholder="Digite o número" 
        style={styles.cadastroInput}
        theme={{ colors: { primary: '#00a5e4' }}}
        value={form.uf} 
        onChangeText={value => { setForm({...form, 'uf': value}) }}
      />

      <TextInput 
        label='Complemento' 
        placeholder="Digite o complemento" 
        style={styles.cadastroInput}
        theme={{ colors: { primary: '#00a5e4' }}}
        value={form.numero} 
        onChangeText={value => { setForm({...form, 'numero': value}) }}
      />

      <TextInput 
        label='Bairro' 
        placeholder="Digite o bairro" 
        style={styles.cadastroInput}
        theme={{ colors: { primary: '#00a5e4' }}}
        value={form.complemento} 
        onChangeText={value => { setForm({...form, 'complemento': value}) }}
      />

      <TextInput 
        label='Cidade' 
        placeholder="Digite a cidade" 
        style={styles.cadastroInput}
        theme={{ colors: { primary: '#00a5e4' }}}
        value={form.bairro} 
        onChangeText={value => { setForm({...form, 'bairro': value}) }}
      />

      <TextInput 
        label='UF' 
        placeholder="Digite o UF" 
        style={styles.cadastroInput}
        theme={{ colors: { primary: '#00a5e4' }}}
        value={form.cidade} 
        onChangeText={value => { setForm({...form, 'cidade': value}) }}
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