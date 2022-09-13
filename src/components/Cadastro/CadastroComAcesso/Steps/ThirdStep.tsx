import React, { useState } from "react";
import { View, Text, Image, Switch, TouchableOpacity } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { TextInput } from "react-native-paper";

import styles from "./../styles";

export default function ThirdStep({ navigation, form, setForm, page, setPage }) {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View>
      <Text style={styles.cadastroTextoBold}>Meus dados</Text>

      <View style={styles.buttonOutlineMiniContainer}>
        <TouchableOpacity style={styles.buttonOutlineMini} onPress={() => navigation.navigate('CadastroSemAcesso')}>
          <Text style={styles.textButtonOutline}>Editar</Text>
        </TouchableOpacity>
      </View>

      <TextInput 
        label='Nome completo' 
        style={styles.cadastroInput}
        value={'Fulano de Tal'} 
        disabled
      />

      <TextInput 
        label='CPF' 
        style={styles.cadastroInput}
        value={'111.111.111-11'}
        disabled
      />

      <TextInput 
        label='Documento' 
        style={styles.cadastroInput}
        value={'11.111.111-1'} 
        disabled
      />

      <TextInput 
        label='Data de Nascimento' 
        style={styles.cadastroInput}
        value={'01/01/2001'} 
        disabled
      />

      <TextInput 
        label='Gênero' 
        style={styles.cadastroInput}
        value={'Masculino'} 
        disabled
      />

      <TextInput 
        label='Telefone' 
        style={styles.cadastroInput}
        value={'(11) 96874-1548'} 
        disabled
      />

      <TextInput 
        label='E-mail' 
        style={styles.cadastroInput}
        value={'fdetal@gmail.com'}
        disabled
      />

      <TextInput 
        label='Endereço' 
        style={styles.cadastroInputMultiline}
        value={'Av. Presidente Castelo Branco, 1800, Praia Grande - SP'} 
        multiline
        disabled
      />

      <TouchableOpacity style={styles.buttonSubmit} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textButtonSubmit}>Ir para home</Text>
      </TouchableOpacity>
          
      <Text style={styles.cadastroTexto}></Text>     
    </View>
  )
}