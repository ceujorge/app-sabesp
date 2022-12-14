import React, { useState, useRef } from "react";
import { View, Text, Image, Switch, TouchableOpacity, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import { Picker } from '@react-native-picker/picker';

import styles from "./../styles";

export default function FirstStep({ navigation, form, setForm, page, setPage }) {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [passwordVisible2, setPasswordVisible2] = useState(true);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const setMascaraCpf = function (cpf) {
    cpf = cpf.replace(/\D/g, "").substring(0, 11);                   //Remove tudo o que não é dígito
    cpf = cpf.replace(/^(\d{3})(\d{3})(\d)/g, "$1.$2.$3"); //Coloca a pontuação
    cpf = cpf.replace(/(\d)(\d{2})$/, "$1-$2");    //Coloca hífen entre os dois ultimos digitos e o resto
    setForm({...form, 'CPF': cpf})
  }

  const setMascaraTel = function (tel) {
    tel = tel.replace(/\D/g, "").substring(0, 11);                   //Remove tudo o que não é dígito
    tel = tel.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    tel = tel.replace(/(\d)(\d{4})$/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    setForm({...form, 'telefone': tel})
  }

  const setMascaraData = function (data) {
    data = data.replace(/\D/g, "").substring(0, 8);                   //Remove tudo o que não é dígito
    data = data.replace(/^(\d{2})(\d)/g, "$1/$2"); // Coloca a barra entre mes e dia
    data = data.replace(/(\d)(\d{4})$/, "$1/$2");    //Coloca a barra entre mes e ano
    setForm({...form, 'nascimento': data})
  }

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
      <View>
        <Text style={styles.cadastroTextoBold}>Cadastro do Cliente</Text>

        <TextInput 
          label='Nome completo' 
          placeholder="Digite o seu nome" 
          style={styles.cadastroInput}
          theme={{ colors: { primary: '#00a5e4' }}}
          value={form.nome} 
          onChangeText={value => { setForm({...form, 'nome': value}) }}
        />

        <TextInput 
          label='CPF' 
          placeholder="Digite o seu CPF" 
          style={styles.cadastroInput}
          theme={{ colors: { primary: '#00a5e4' }}}
          keyboardType='numeric'
          value={form.CPF} 
          onChangeText={value => { setMascaraCpf(value) }}
        />

        <View style={{width: '100%', margin: 12,}}>
          <Text style={[styles.cadastroInput, {color: '#606060'}]}>Documento de identificação</Text>
          <Picker 
            style={[styles.cadastroTextoLeft, {backgroundColor: '#e7e7e7', width: '90%'}]}
            onValueChange={value => { setForm({...form, 'tipoDocumento': value}) }}
            selectedValue={form.tipoDocumento}>
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="RG" value="RG" />
            <Picker.Item label="CNH" value="CNH" />
            <Picker.Item label="OAB" value="OAB" />
            <Picker.Item label="CREA" value="CREA" />
            <Picker.Item label="Outros" value="Outros" />
          </Picker>
        </View>

        <TextInput 
          label='Documento' 
          placeholder="Digite " 
          style={styles.cadastroInput}
          theme={{ colors: { primary: '#00a5e4' }}}
          value={form.documento} 
          onChangeText={value => { setForm({...form, 'documento': value}) }}
        />

        <Text style={styles.cadastroTextoBold}>Validação do seu documento</Text>

        <View style={styles.steps}>
          <View style={styles.halfView}>
            <Text style={styles.cadastroTextoLeft}>Frente</Text>
            <Text style={styles.cadastroTextoLeft}>Carregar o arquivo</Text>
            <Image style={styles.imgDocumento} source={require('../../../../../assets/icons/documento-frente.png')} />
          </View>
          <View style={styles.halfView}>
            <Text style={styles.cadastroTextoLeft}>Verso</Text>
            <Text style={styles.cadastroTextoLeft}>Carregar o arquivo</Text>
            <Image style={styles.imgDocumento} source={require('../../../../../assets/icons/documento-verso.png')} />
          </View>
        </View>

        <Text style={styles.cadastroTexto}>Cada arquivo deve ter no máximo 50mb and estar no formato .jpg, .jpeg ou .png</Text>

        <View style={styles.row}>
          <TextInput 
            label='Data de Nascimento' 
            placeholder="00/00/00" 
            style={styles.cadastroInputHalf}
            theme={{ colors: { primary: '#00a5e4' }}}
            value={form.nascimento} 
            onChangeText={value => { setMascaraData(value) }}
          />

          <View style={styles.cadastroInputHalfRightContainer}>
            <Text style={{color: '#606060'}}>Gênero</Text>
            <Picker 
              style={styles.cadastroInputHalfRight}
              onValueChange={val => { setForm({...form, 'sexo': val}) }}
              selectedValue={form.sexo}>
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Masculino" value="Masculino" />
              <Picker.Item label="Feminino" value="Feminino" />
              <Picker.Item label="Outros" value="Outros" />
            </Picker>
          </View>
        </View>

        <TextInput 
          label='Telefone' 
          placeholder="(00) 00000-0000" 
          style={styles.cadastroInput}
          theme={{ colors: { primary: '#00a5e4' }}}
          value={form.telefone} 
          keyboardType='numeric'
          onChangeText={value => { setMascaraTel(value) }}
          maxLength={14}
        />

        <TextInput 
          label='E-mail' 
          placeholder="Digite o seu e-mail" 
          style={styles.cadastroInput}
          theme={{ colors: { primary: '#00a5e4' }}}
          value={form.email} 
          onChangeText={value => { setForm({...form, 'email': value}) }}
        />

        <Text style={styles.cadastroTextoBold}>Crie uma senha de acesso para acompanhar o processo de solicitação</Text>

        <TextInput 
          label='Senha'
          theme={{ colors: { primary: '#00a5e4' }}}
          style={styles.cadastroInput}
          textContentType="password"
          placeholder="Digite sua senha" 
          value={form.senha} 
          onChangeText={value => { setForm({...form, 'senha': value}) }} 
          secureTextEntry={passwordVisible}
          right={<TextInput.Icon name={passwordVisible ? 'eye' : 'eye-off'} onPress={() => setPasswordVisible(!passwordVisible)}/>}
        />

        <TextInput 
          label='Confirme sua senha'
          theme={{ colors: { primary: '#00a5e4' }}}
          style={styles.cadastroInput}
          textContentType="password"
          placeholder="Digite sua senha" 
          value={form.senha2} 
          onChangeText={value => { setForm({...form, 'senha2': value}) }} 
          secureTextEntry={passwordVisible2}
          right={<TextInput.Icon name={passwordVisible2 ? 'eye' : 'eye-off'} onPress={() => setPasswordVisible2(!passwordVisible2)}/>}
        />

        <View style={styles.switchContainer}>
          <Switch
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={styles.cadastroTextoLeft}>Aceito os termos de serviço</Text>
        </View>

        <TouchableOpacity 
          style={isEnabled ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
          onPress={() => setPage(2)} 
          disabled={!isEnabled}>
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