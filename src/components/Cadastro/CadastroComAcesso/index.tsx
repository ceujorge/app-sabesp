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
  const breadcrumb = [
    {label: 'Home', link: 'Home'}, 
    {label: 'Meu primeiro acesso', link: '', active: true}
  ]

  return (
    <SafeAreaView>
      <Header />
      <Breadcrumb config={ breadcrumb } navigation={ navigation } />
      <ScrollView style={styles.scrollArea}>
        {page === 1 ? (
          <FirstStep 
            navigation={ navigation } 
            form={ {} } 
            setForm={ {} } 
            page={ page } 
            setPage={ setPage }
          />
        ) : null}

        {page === 2 ? (
          <SecondStep 
            navigation={ navigation } 
            form={ {} } 
            setForm={ {} } 
            page={ page } 
            setPage={ setPage }
          />
        ) : null}
        
        {page >= 3 ? (
          <ThirdStep 
            navigation={ navigation } 
            form={ {} } 
            setForm={ {} } 
            page={ page }
            setPage={ setPage }
          />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  )
}