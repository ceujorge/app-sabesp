import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

import styles from "../styles";

export default function FirstStep({ navigation, step, setStep }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>1/3</Text>
      <Text style={styles.title}>Endereço do imóvel</Text>

      <Text style={[styles.title, { alignSelf: 'flex-start' }]}>Novo endereço</Text>
      <Text style={styles.textLeft}>Informe o endereço que deseja solicitar a ligação de água e esgoto</Text>

      <TextInput 
        label='Cep' 
        style={{ marginTop: 10, marginBottom: 10 }}
        theme={{ colors: { primary: '#00a5e4' }}}
        disabled={true}
        value={'17018-520'}
      />

      <TextInput 
        label='Endereço do imóvel' 
        style={{ marginTop: 10, marginBottom: 10 }}
        theme={{ colors: { primary: '#00a5e4' }}}
        disabled={true}
        value={'Av. Rodrigues da Costa'}
      />

      <View style={styles.row}>
        <View style={styles.halfViewLeft}>
          <TextInput 
            label='Numero' 
            style={{ marginTop: 10, marginBottom: 10 }}
            theme={{ colors: { primary: '#00a5e4' }}}
            disabled={true}
            value={'607'}
          />
        </View>
        <View style={styles.halfViewRight}>
          <TextInput 
            label='Complemento' 
            style={{ marginTop: 10, marginBottom: 10 }}
            theme={{ colors: { primary: '#00a5e4' }}}
            disabled={true}
            value={'C-123'}
          />
        </View>
      </View>

      <TextInput 
        label='Bairro' 
        style={{ marginTop: 10, marginBottom: 10 }}
        theme={{ colors: { primary: '#00a5e4' }}}
        disabled={true}
        value={'Aviação'}
      />

      <TextInput 
        label='Cidade' 
        style={{ marginTop: 10, marginBottom: 10 }}
        theme={{ colors: { primary: '#00a5e4' }}}
        disabled={true}
        value={'Jundiaí'}
      />

      <TouchableOpacity style={styles.buttonSubmit} onPress={() => setStep(2)}>
        <Text style={styles.textButtonSubmit}>Avançar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textButtonOutline}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}