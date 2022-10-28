import React, { useState, useRef } from "react";
import { View, Text, Image, Switch, TouchableOpacity, ScrollView } from "react-native";
import { TextInput, RadioButton } from "react-native-paper";

import styles from "./../styles";

export default function FirstStep({ navigation, form, setForm, page, setPage }) {
  const [checked, setChecked] = useState('');
  const [confirmado, setConfirmado] = useState(false)
  
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
      <View>
        <Text style={styles.cadastroTextoBold}>Meu primeiro acesso</Text>
        <Text style={styles.cadastroTexto}>Informe seu CPF</Text>

        <TextInput 
          label='CPF' 
          style={styles.cadastroInput}
          value={'111.111.111-11'} 
          disabled
          right={<TextInput.Icon name={'close-circle-outline'} onPress={() => navigation.navigate('Cadastro')}/>}
        />

        {!confirmado ? (
          <>
            <Text style={styles.cadastroTextoBold}>Fulano, identificamos a sua conta!</Text>
            <Text style={styles.cadastroTexto}>
              Escolha como quer receber o código de validação
            </Text>
            <View style={styles.row}>
              <RadioButton
                value="sms"
                status={ checked === 'sms' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('sms')}
              />
              <Text style={styles.radioTexto}>SMS <Text style={{ fontWeight: 'bold'}}>****-4527</Text></Text>
            </View>
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
              onPress={() => setConfirmado(true)} 
              disabled={!checked}>
              <Text style={styles.textButtonSubmit}>Continuar</Text>
            </TouchableOpacity>

            <Text style={styles.cadastroTexto}></Text>

            <Text style={styles.cadastroTexto}>
              Caso não tenha mais acesso a esste número de telefone ou conta de email, 
              entre em contato com a Sabesp pelo número <Text style={{ fontWeight: 'bold'}}>2486-2684</Text>
            </Text>

            <Text style={styles.cadastroTexto}></Text>
          </>
        ) : (
          <>
            <Text style={styles.cadastroTextoBold}>Fulano, informe o código de verificação!</Text>
            <Text style={styles.cadastroTexto}>
              Você recebeu um número de 6 dígitos por SMS no número ****-2684
            </Text>

            <View style={styles.row}>
              <TextInput 
                mode="outlined"
                style={styles.codConfirma} 
                theme={{ colors: { primary: '#00a5e4' }}}
                placeholder="0"
                value={'1'}
              />
              <TextInput 
                mode="outlined"
                style={styles.codConfirma} 
                theme={{ colors: { primary: '#00a5e4' }}}
                placeholder="0" 
                value={'2'}
              />
              <TextInput 
                mode="outlined"
                style={styles.codConfirma} 
                theme={{ colors: { primary: '#00a5e4' }}}
                placeholder="0" 
                value={'3'}
              />
              <TextInput 
                mode="outlined"
                style={styles.codConfirma} 
                theme={{ colors: { primary: '#00a5e4' }}}
                placeholder="0" 
                value={'4'}
              />
              <TextInput 
                mode="outlined"
                style={styles.codConfirma} 
                theme={{ colors: { primary: '#00a5e4' }}}
                placeholder="0" 
                value={'5'}
              />
              <TextInput 
                mode="outlined"
                style={styles.codConfirma} 
                theme={{ colors: { primary: '#00a5e4' }}}
                placeholder="0" 
                value={'6'}
              />
            </View>

            <TouchableOpacity style={styles.buttonSubmit} onPress={() => setPage(2)}>
              <Text style={styles.textButtonSubmit}>Continuar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonOutline} onPress={() => setConfirmado(false)}>
              <Text style={styles.textButtonOutline}>Entre de outra maneira</Text>
            </TouchableOpacity>
    
            <Text style={styles.cadastroTexto}></Text>
          </>
        )}
      </View>
    </ScrollView>
  )
}