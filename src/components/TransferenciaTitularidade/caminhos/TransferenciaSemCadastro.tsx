import React, { useState } from "react";
import { View, Text, Image, Switch, TouchableOpacity, SafeAreaView, ScrollView, Linking } from "react-native";
import { TextInput } from "react-native-paper";
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'

import Header from "../../Header";
import Breadcrumb from "../../Breadcrumb"

import styles from "../styles";

const breadcrumb = [
  {label: 'Home', link: 'Home'}, 
  {label: 'Transferência de Titularidade', link: '', active: true}
]

export default function TransferenciaSemCadastro({ route, navigation }) {
  const [form, setForm] = useState({
    'nome': '',
    'CPF': route.params.cpf,
    'tipoDocumento': '',
    'documento': '',
    'nascimento': '',
    'sexo': '',
    'telefone': '',
    'email': '',
    'senha': '',
    'senha2': '',
  });
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [passwordVisible2, setPasswordVisible2] = useState(true);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
      <Breadcrumb config={ breadcrumb } navigation={ navigation }/>
      <ScrollView  contentContainerStyle={{ paddingBottom: 150 }}>
        <View style={styles.steps}>
          <FontAwesomeIcon icon={ faCircle } size={14} style={styles.activeStep}/>
          <Text style={styles.activeStep}>Identificação</Text>
          <FontAwesomeIcon icon={ faMinus } size={14} style={ styles.inactiveStep}/>
          <FontAwesomeIcon icon={ faCircle } size={14} style={ styles.inactiveStep}/>
          <Text style={ styles.inactiveStep}>Dados do hidrômetro</Text>
          <FontAwesomeIcon icon={ faMinus } size={14} style={ styles.inactiveStep}/>
          <FontAwesomeIcon icon={ faCircle } size={14} style={ styles.inactiveStep}/>
          <Text style={ styles.inactiveStep}>Confirmação</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.cadastroTituloBold}>Transferência de titularidade</Text>

          <Text style={styles.cadastroTexto}>Para fazer a transferência de titularidade, é necessário informar o Fornecimento</Text> 
          <Text style={styles.cadastroTexto}>Fornecimento</Text> 

          <Text style={styles.cadastroTituloBold}>12345678910</Text>

          <Text style={styles.cadastroTextoBold}>Walter de ***</Text>
          <Text style={styles.cadastroTexto}>AV. PRESIDENTE C******** - PRAIA GRANDE - SP</Text>

          <Text style={styles.cadastroTituloBold}>Transferir para:</Text>

          <TextInput 
            label='Nome completo' 
            placeholder="Digite o seu nome" 
            style={styles.cadastroTextoLeft}
            theme={{ colors: { primary: '#00a5e4' }}}
            value={form.nome} 
            onChangeText={value => { setForm({...form, 'nome': value}) }}
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
              <Text style={styles.cadastroTextoLeft}>Carregar arquivo</Text>
              <Image style={styles.imgDocumento} source={require('../../../../assets/icons/documento-frente.png')} />
            </View>
            <View style={styles.halfView}>
              <Text style={styles.cadastroTextoLeft}>Verso</Text>
              <Text style={styles.cadastroTextoLeft}>Carregar arquivo</Text>
              <Image style={styles.imgDocumento} source={require('../../../../assets/icons/documento-verso.png')} />
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

          <Text style={styles.cadastroTituloBold}>Crie uma senha de acesso para acompanhar a transferência</Text>

          <TextInput 
            label='Senha'
            theme={{ colors: { primary: '#00a5e4' }}}
            style={styles.cadastroTextoLeft}
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
            style={styles.cadastroTextoLeft}
            textContentType="password"
            placeholder="Digite sua senha" 
            value={form.senha2} 
            onChangeText={value => { setForm({...form, 'senha2': value}) }} 
            secureTextEntry={passwordVisible2}
            right={<TextInput.Icon name={passwordVisible2 ? 'eye' : 'eye-off'} onPress={() => setPasswordVisible2(!passwordVisible2)}/>}
          />

          <View style={{ flexDirection: 'row' }}>
            <Switch
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{marginTop: -30}}
            />
            <Text style={styles.cadastroTextoLeft}>Quer receber a notificação via SMS do andamento da transferência?</Text>
          </View>

          <TouchableOpacity style={styles.buttonSubmit} onPress={() => navigation.navigate('TransferenciaValidacao')}>
            <Text style={styles.textButtonSubmit}>Continuar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.textButtonOutline}>Cancelar Transferência</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}