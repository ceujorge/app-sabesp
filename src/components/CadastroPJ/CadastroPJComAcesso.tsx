import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark'

import Header from "../Header";

import styles from "./styles";

export default function CadastroPJComAcesso({ navigation }) {
  const [form, setForm] = useState({
    'nome': 'Fulano de Tal',
    'CPF': '000.000.000-00',
    'tipoDocumento': 'RG',
    'documento': '12.345.678-9',
    'nascimento': '01/01/1990',
    'sexo': 'Masculino',
    'telefone': '(11) 9999-9999',
    'email': 'fulanodetal@gmail.com',
  });

  const setMascaraData = function (data) {
    data = data.replace(/\D/g, "").substring(0, 8);                   //Remove tudo o que não é dígito
    data = data.replace(/^(\d{2})(\d)/g, "$1/$2");   // Coloca a barra entre mes e dia
    data = data.replace(/(\d)(\d{4})$/, "$1/$2");    //Coloca a barra entre mes e ano
    setForm({...form, 'nascimento': data})
  }

  const setMascaraTel = function (tel) {
    tel = tel.replace(/\D/g, "").substring(0, 11);                   //Remove tudo o que não é dígito
    tel = tel.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    tel = tel.replace(/(\d)(\d{4})$/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    setForm({...form, 'telefone': tel})
  }

  return (
    <SafeAreaView>
      <Header />
      <ScrollView  contentContainerStyle={{ paddingBottom: 100 }}>
      <View style={styles.steps}>
        <FontAwesomeIcon icon={ faCircle } size={14} style={styles.activeStep}/>
        <Text style={styles.activeStep}>Identificação</Text>
        <FontAwesomeIcon icon={ faMinus } size={14} style={ styles.inactiveStep}/>
        <FontAwesomeIcon icon={ faCircle } size={14} style={ styles.inactiveStep}/>
        <Text style={ styles.inactiveStep}>Validação</Text>
        <FontAwesomeIcon icon={ faMinus } size={14} style={ styles.inactiveStep}/>
        <FontAwesomeIcon icon={ faCircle } size={14} style={ styles.inactiveStep}/>
        <Text style={ styles.inactiveStep}>Confirmação</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.cadastroTextoBold}>Atualização cadastral de Representante Legal</Text>
        <Text style={styles.cadastroTexto}>
          Você possui cadastro, por favor, verifique se os seus dados estão atualizados para que possa se tornar o responsável por todos os precessos solicitados à Sabesp
        </Text>

        <Text style={styles.cadastroTextoBold}>Eng****** do Brasil S/A.</Text>
        <Text style={styles.cadastroTexto}>{'09.433.094/0004-00\nAV. CORONEL CARLOS\nPRATA PRAIA GRANDE - SP'}</Text>

        <Text style={styles.cadastroTituloBold}>Dados Pessoais</Text>

        <TextInput 
          label='Nome completo' 
          placeholder="Digite o seu nome" 
          style={styles.cadastroTextoLeft}
          theme={{ colors: { primary: '#00a5e4' }}}
          value={form.nome} 
          disabled
        />

        <TextInput 
          label='CPF' 
          placeholder="Digite o seu CPF" 
          style={styles.cadastroTextoLeft}
          theme={{ colors: { primary: '#00a5e4' }}}
          value={form.CPF} 
          disabled
        />

        <Text style={{color: '#606060'}}>Documento de identificação</Text>
        <Picker 
          style={[styles.cadastroTextoLeft, {backgroundColor: '#e7e7e7'}]}
          onValueChange={value => { setForm({...form, 'tipoDocumento': value}) }}
          selectedValue={form.tipoDocumento}>
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="RG" value="RG" />
          <Picker.Item label="CNH" value="CNH" />
          <Picker.Item label="OAB" value="OAB" />
          <Picker.Item label="CREA" value="CREA" />
          <Picker.Item label="Outros" value="Outros" />
        </Picker>

        <TextInput 
          label='Documento' 
          placeholder="Digite " 
          style={styles.cadastroTextoLeft}
          theme={{ colors: { primary: '#00a5e4' }}}
          value={form.documento} 
          onChangeText={value => { setForm({...form, 'documento': value}) }}
        />

        <Text style={styles.cadastroTextoBold}>Validação do seu documento</Text>

        <View style={styles.steps}>
          <View style={styles.halfView}>
            <Text style={styles.cadastroTextoLeft}>Frente</Text>
            <Text style={[styles.cadastroTextoLeft, { color: 'blue' }]}>Docu....JPG <FontAwesomeIcon icon={ faCircleXmark } size={14} style={styles.activeStep}/></Text>
            <Image style={styles.imgDocumento} source={require('../../../assets/icons/documento-frente.png')} />
          </View>
          <View style={styles.halfView}>
            <Text style={styles.cadastroTextoLeft}>Verso</Text>
            <Text style={[styles.cadastroTextoLeft, { color: 'blue' }]}>Docu....JPG <FontAwesomeIcon icon={ faCircleXmark } size={14} style={styles.activeStep}/></Text>
            <Image style={styles.imgDocumento} source={require('../../../assets/icons/documento-verso.png')} />
          </View>
        </View>

        <Text style={styles.cadastroTexto}>Cada arquivo deve ter no máximo 50mb and estar no formato .jpg, .jpeg ou .png</Text>

        <View style={{ flexDirection: 'row' }}>
          <TextInput 
            label='Data de Nascimento' 
            placeholder="00/00/00" 
            style={styles.cadastroInputHalfLeft}
            theme={{ colors: { primary: '#00a5e4' }}}
            keyboardType='numeric'
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
          style={styles.cadastroTextoLeft}
          theme={{ colors: { primary: '#00a5e4' }}}
          keyboardType='numeric'
          value={form.telefone} 
          onChangeText={value => { setMascaraTel(value) }}
          maxLength={14}
        />

        <TextInput 
          label='E-mail' 
          placeholder="Digite o seu e-mail" 
          style={styles.cadastroTextoLeft}
          theme={{ colors: { primary: '#00a5e4' }}}
          value={form.email} 
          onChangeText={value => { setForm({...form, 'email': value}) }}
        />

        <TouchableOpacity style={styles.buttonSubmitDisabled} onPress={() => navigation.navigate('CadastroPJValidacao')}>
          <Text style={styles.textButtonSubmit}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('CadastroPJValidacao')}>
          <Text style={styles.textButtonOutline}>Continuar</Text>
        </TouchableOpacity>

      </View>      
      </ScrollView>
    </SafeAreaView>
  )
}