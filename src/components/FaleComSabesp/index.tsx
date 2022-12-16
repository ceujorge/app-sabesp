import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck'

import styles from "./styles";

import Header from "../Header";
import { TextInput } from "react-native-paper";

export default function FaleComSabesp({ navigation }) {
  const [endereco, setEndereco] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  return(
    <SafeAreaView>
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {enviado ? (
          <View style={styles.container}>
            <View style={styles.rowCenter}>
              <FontAwesomeIcon icon={ faCircleCheck } size={100} style={{ color: '#00a000', marginTop: 30}}/>
            </View>
            <Text style={styles.title}>Mensagem enviada com sucesso!</Text>
            <Text style={styles.textCenter}>Analisaremos sua mensagem, em breve retornaremos o seu contato no e-mail cadastrado!</Text>

            <TouchableOpacity style={styles.buttonSubmit} onPress={() => navigation.navigate('HomePJ')}>
              <Text style={styles.textButtonSubmit}>Fechar</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.container}>
            <Text style={styles.title}>FALE COM A EQUIPE DE GESTÃO SABESP</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.textLeft}>Assunto</Text>
              <Picker 
                selectedValue={endereco}
                onValueChange={val => setEndereco(val)}
                style={styles.select}>
                <Picker.Item label="Selecione..." value="" />
              </Picker>
            </View>        

            <Text style={[styles.textLeft, {marginBottom: 20, marginTop: 20}]}>Selecione o endereço</Text>

            <View>
              <View style={styles.inputContainer}>
                <Text style={styles.textLeft}>Endereço</Text>
                <Picker 
                  selectedValue={endereco}
                  onValueChange={val => setEndereco(val)}
                  style={styles.select}>
                  <Picker.Item label="Av. Presidente Castelo Branco, 785, Praia Grande - SP" value="" />
                  <Picker.Item label="Rua Inácio Bernardes, 181, São Paulo - SP" value="1" />
                </Picker>
              </View>
              <View style={styles.enderecoContainer}>
                <View style={styles.halfContainer}>
                  <Text style={styles.textLeft}>Fornecimento</Text>
                  <Text style={styles.textLeftBold}>0073027707</Text>
                </View>
                <View style={styles.halfContainer}>
                  <Text style={styles.textRight}>Próximo vencimento</Text>
                  <Text style={styles.textRightBold}>05/10/2022</Text>
                </View>
              </View>
            </View>

            <TextInput 
              multiline
              numberOfLines={4}
              label='Mensagem' 
              mode="outlined"
              value={mensagem}
              onChangeText={val => setMensagem(val)}
              theme={{ colors: { primary: '#00a5e4' }}}
            />

            <TouchableOpacity style={styles.buttonSubmit} onPress={() => setEnviado(true)}>
              <Text style={styles.textButtonSubmit}>Enviar</Text>
            </TouchableOpacity>
          </View>
        )}

      </ScrollView>
    </SafeAreaView>
  )
}