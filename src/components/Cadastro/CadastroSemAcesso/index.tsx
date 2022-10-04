import React, { useState } from "react";
import { View, Text, Image, Switch, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'

import Header from "../../Header";
import Breadcrumb from "../../Breadcrumb"
import FirstStep from "./Steps/FirstStep";
import SecondStep from "./Steps/SecondStep";
import ThirdStep from "./Steps/ThirdStep";

import styles from "./styles";

export default function CadastroSemAcesso({ navigation }) {
  const [page, setPage] = useState(1);
  const [formUser, setFormUser] = useState({
    'nome': '',
    'CPF': '',
    'documento': '',
    'nascimento': '',
    'sexo': '',
    'telefone': '',
    'email': '',
    'senha': '',
    'senha2': '',
  });
  const [formImovel, setFormImovel] = useState({
    'cep': '',
    'endereço': '',
    'numero': '',
    'complemento': '',
    'bairro': '',
    'cidade': '',
    'uf': '',
  })

  const breadcrumb = [
    {label: 'Home', link: 'Home'}, 
    {label: 'Login', link: 'Faturas'},
    {label: 'Cadastro', link: '', active: true},
  ]

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Breadcrumb config={ breadcrumb } navigation={ navigation }/>
      <ScrollView style={styles.scrollArea}>
        <View style={styles.steps}>
          <Text style={styles.activeStep}>Identificação</Text>
          <FontAwesomeIcon icon={ faMinus } size={14} style={page >= 2 ? styles.activeStep : styles.inactiveStep}/>
          <Text style={page >= 2 ? styles.activeStep : styles.inactiveStep}>Cadastro</Text>
          <FontAwesomeIcon icon={ faMinus } size={14} style={page >= 3 ? styles.activeStep : styles.inactiveStep}/>
          <Text style={page >= 3 ? styles.activeStep : styles.inactiveStep}>Confirmação</Text>
        </View>
        {page === 1 ? (
          <FirstStep 
            navigation={ navigation } 
            form={ formUser } 
            setForm={ setFormUser } 
            page={ page } 
            setPage={ setPage }
          />
        ) : null}

        {page === 2 ? (
          <SecondStep 
            navigation={ navigation } 
            form={ formImovel } 
            setForm={ setFormImovel } 
            page={ page } 
            setPage={ setPage }
          />
        ) : null}
        
        {page >= 3 ? (
          <ThirdStep 
            navigation={ navigation } 
            form={ formUser } 
            setForm={ setFormUser } 
            page={ page } 
            setPage={ setPage }
          />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  )
}