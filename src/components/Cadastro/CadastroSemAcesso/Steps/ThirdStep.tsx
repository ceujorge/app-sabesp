import React, { useState } from "react";
import { View, Text, Image, Switch, TouchableOpacity } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { TextInput } from "react-native-paper";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck'

import styles from "./../styles";

export default function ThirdStep({ navigation, form, setForm, page, setPage }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
      {page === 4 ? (
        <>
          <View style={styles.steps}>
            <FontAwesomeIcon icon={ faCircleCheck } size={100} style={styles.successIcon}/>
          </View>

          <Text style={styles.cadastroTextoBold}>Cadastro concluído</Text>
          <Text style={styles.cadastroTexto}>
            Vamos analisar a sua solicitação e em até <b>03 dias</b> úteis você receberá a validação das informações fornecidas.
          </Text>
          <TextInput 
            label='Número da solicitação' 
            style={styles.cadastroInput}
            value={'1223418'} 
            disabled
          />
          <TextInput 
            label='Data' 
            style={styles.cadastroInput}
            value={'12/09/2022  12:00h'}
            disabled
          />
        </>
      ) : null}

      <Text style={styles.cadastroTextoBold}>Cadastro do Cliente</Text>

      <View style={styles.buttonOutlineMiniContainer}>
        <TouchableOpacity style={styles.buttonOutlineMini} onPress={() => setPage(1)}>
          <Text style={styles.textButtonOutline}>Editar</Text>
        </TouchableOpacity>
      </View>

      <TextInput 
        label='Nome completo' 
        style={styles.cadastroInput}
        value={form.nome} 
        disabled
      />

      <TextInput 
        label='CPF' 
        style={styles.cadastroInput}
        value={form.CPF} 
        disabled
      />

      <TextInput 
        label='Documento' 
        style={styles.cadastroInput}
        value={form.documento} 
        disabled
      />

      <TextInput 
        label='Data de Nascimento' 
        style={styles.cadastroInput}
        value={form.nascimento} 
        disabled
      />

      <TextInput 
        label='Gênero' 
        style={styles.cadastroInput}
        value={form.sexo} 
        disabled
      />

      <TextInput 
        label='Telefone' 
        style={styles.cadastroInput}
        value={form.telefone} 
        disabled
      />

      <TextInput 
        label='E-mail' 
        style={styles.cadastroInput}
        value={form.email} 
        disabled
      />
     
      {page === 3 ? (
        <>
          <View style={styles.switchContainer}>
            <Switch
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={styles.switch}
            />
            <Text style={styles.cadastroTextoLeft}>
              Declaro que sou o novo titular responsável pelas faturas do serviço de água e esgoto do endereço acima. 
              Caso seja comprovada a falsidade das informações por mim fornecidas, serei responsabilizado civil e criminalmente.
            </Text>
          </View>

          <TouchableOpacity 
            style={isEnabled ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
            onPress={() => setPage(4)} 
            disabled={!isEnabled}>
            <Text style={styles.textButtonSubmit}>Concluir cadastro</Text>
          </TouchableOpacity>
          
          <Text style={styles.cadastroTexto}></Text>
        </>
      ) : null }

      {page === 4 ? (
        <>
          <Text style={styles.cadastroTexto}>
            Os dados e procedimentos para o primeiro acesso serão enviados no e-mail informado no cadastro
          </Text>

          <TouchableOpacity style={styles.buttonSubmit} onPress={() => null}>
            <Text style={styles.textButtonSubmit}>Baixar comprovante em PDF</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.textButtonOutline}>Ir para home</Text>
          </TouchableOpacity>
                    
          <Text style={styles.cadastroTexto}></Text>
        </>
      ) : null}
      
    </View>
  )
}