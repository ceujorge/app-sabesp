import React, { useState } from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { TextInput } from "react-native-paper";

import styles from "./styles";

export default function FaturaPorEmail() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receber fatura por e-mail</Text>
      <Text style={styles.text}>Ativando esse serviço você terá a comodidade de receber a sua fatura por e-mail.</Text>

      <TextInput 
        mode="outlined"
        label="E-mail"
        placeholder="Digite seu e-mail" 
        style={styles.input} 
        theme={{ colors: { primary: '#00a5e4' }}}
      />

      <TextInput 
        mode="outlined"
        label="Confirme o e-mail"
        placeholder="Confirme seu e-mail" 
        style={styles.input} 
        theme={{ colors: { primary: '#00a5e4' }}}
      />

      <Text style={styles.text}>Após aderir à fatura por e-mail, você deixará de recebe-la em papel.</Text>

      <TouchableOpacity style={styles.buttonOutline} onPress={() => null}>
        <Text style={styles.textButtonOutline}>Cadastrar E-mail</Text>
      </TouchableOpacity>
    </View>
  )
};