import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Collapsible from 'react-native-collapsible';
import * as Animatable from 'react-native-animatable';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons/faCircleUser'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons/faCaretLeft'

import styles from "./styles";
import Header from "../Header";

export default function Home({ navigation }) {
  const [collapsed, setCollapsed]: any = useState(false);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Header />
      <View style={styles.row}>
        <FontAwesomeIcon icon={ faCircleUser } size={32} style={styles.userIcon}/>
        <Text style={styles.text}>Entrar</Text>
      </View>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Faturas')}>Para você</Text>

      <TouchableOpacity style={styles.collapsibleHeader} onPress={toggleExpanded}>
        <Text style={styles.collapsibleHeaderText}>Para Empresas</Text>
        <FontAwesomeIcon icon={ collapsed ? faCaretDown : faCaretLeft} size={22} style={styles.caret}/>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed}>
        <Animatable.Text animation={collapsed ? undefined : 'fadeInDown'} duration={300} useNativeDriver>
          <Text style={styles.collpsibleItem}>- Representante Legal</Text>
        </Animatable.Text>
        <Animatable.Text animation={collapsed ? undefined : 'fadeInDown'} duration={300} useNativeDriver>
          <Text style={styles.collpsibleItem}>- Empresa</Text>
        </Animatable.Text>
        <Animatable.Text animation={collapsed ? undefined : 'fadeInDown'} duration={300} useNativeDriver>
          <Text style={styles.collpsibleItem}>- Imobiliária</Text>
        </Animatable.Text>
        <Animatable.Text animation={collapsed ? undefined : 'fadeInDown'} duration={300} useNativeDriver>
          <Text style={styles.collpsibleItem}>- Gestora de condomínio</Text>
        </Animatable.Text>
      </Collapsible>

      <Text style={styles.listItem}>Politicas de privacidade</Text>
    </>
  )
}