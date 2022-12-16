import React, { useState } from "react";
import { View, Text, Image, Switch, Linking, TouchableOpacity, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";

import styles from "./../styles";

export default function SecondStep({ navigation, form, setForm, page, setPage }) {
  const [found, setFound] = useState(false)
  const [fornecimento, setFornecimento] = useState('')

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
      <View>
        <Text style={styles.cadastroTextoBold}>Dados do imóvel</Text>

        <View>
          {!found ? (
            <TouchableOpacity style={styles.buttonFornecimento} onPress={() => setFound(true)}>
              <Text style={styles.textButtonFornecimento}>Ver</Text>
            </TouchableOpacity>
          ) : null}

          <TextInput 
            mode="outlined"
            label="Fornecimento ou Hidrômetro"
            theme={{ colors: { primary: '#00a5e4' }}}
            style={styles.cadastroInput}
            value={fornecimento} 
            keyboardType='numeric'
            onChangeText={value => { setFornecimento(value) }} 
            maxLength={15}
            right={found ? <TextInput.Icon name={'close-circle-outline'} onPress={() => setFound(false)}/> : null}
          />

        </View>

        <View style={styles.linkContainer}>
          <Text style={styles.link} onPress={() => Linking.openURL('javascript:void(0)')}>
            Localize o número do fornecimento ou hidrômetro
          </Text>
        </View>

        <TextInput 
          label='Cep' 
          placeholder="Digite o cep" 
          style={styles.cadastroInput}
          theme={{ colors: { primary: '#00a5e4' }}}
          value={form.cep} 
          keyboardType='numeric'
          onChangeText={value => { setForm({...form, 'cep': value}) }}
          disabled={true}
        />

        <TextInput 
          label='Endereço completo' 
          placeholder="Digite o endereço do imóvel" 
          style={styles.cadastroInput}
          theme={{ colors: { primary: '#00a5e4' }}}
          value={form.endereço} 
          onChangeText={value => { setForm({...form, 'endereço': value}) }}
          disabled={true}
        />

        <TextInput 
          label='Número' 
          placeholder="Digite o número" 
          style={styles.cadastroInput}
          theme={{ colors: { primary: '#00a5e4' }}}
          value={form.uf} 
          keyboardType='numeric'
          onChangeText={value => { setForm({...form, 'uf': value}) }}
          disabled={true}
        />

        <TextInput 
          label='Complemento' 
          placeholder="Digite o complemento" 
          style={styles.cadastroInput}
          theme={{ colors: { primary: '#00a5e4' }}}
          value={form.complemento} 
          onChangeText={value => { setForm({...form, 'complemento': value}) }}
          disabled={true}
        />

        <TextInput 
          label='Bairro' 
          placeholder="Digite o bairro" 
          style={styles.cadastroInput}
          theme={{ colors: { primary: '#00a5e4' }}}
          value={form.bairro} 
          onChangeText={value => { setForm({...form, 'bairro': value}) }}
          disabled={true}
        />

        <TextInput 
          label='Cidade' 
          placeholder="Digite a cidade" 
          style={styles.cadastroInput}
          theme={{ colors: { primary: '#00a5e4' }}}
          value={form.cidade} 
          onChangeText={value => { setForm({...form, 'cidade': value}) }}
          disabled={true}
        />

        <TextInput 
          label='UF' 
          placeholder="Digite o UF" 
          style={styles.cadastroInput}
          theme={{ colors: { primary: '#00a5e4' }}}
          value={form.uf} 
          onChangeText={value => { setForm({...form, 'uf': value}) }}
          disabled={true}
        />

        <TouchableOpacity style={styles.buttonSubmit} onPress={() => setPage(3)}>
          <Text style={styles.textButtonSubmit}>Continuar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textButtonOutline}>Cancelar</Text>
        </TouchableOpacity>
        
        <Text style={styles.cadastroTexto}></Text>
      </View>
    </ScrollView>

  )
}