import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import Collapsible from 'react-native-collapsible';
import * as Animatable from 'react-native-animatable';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons/faCircleUser'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons/faCaretLeft'

import styles from "./styles";
import Header from "../Header";

export default function PreLogin({ navigation }) {
  const [collapsed, setCollapsed]: any = useState(true);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  return (
    <SafeAreaView>
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
      <Collapsible style={styles.collapsible} collapsed={collapsed}>
        <Animatable.Text animation={collapsed ? undefined : 'fadeInDown'} duration={300} useNativeDriver>
          <Text style={styles.collapsibleItem}>- Representante Legal</Text>
        </Animatable.Text>
        <Animatable.Text animation={collapsed ? undefined : 'fadeInDown'} duration={300} useNativeDriver>
          <Text style={styles.collapsibleItem}>- Empresa</Text>
        </Animatable.Text>
        <Animatable.Text animation={collapsed ? undefined : 'fadeInDown'} duration={300} useNativeDriver>
          <Text style={styles.collapsibleItem}>- Imobiliária</Text>
        </Animatable.Text>
        <Animatable.Text animation={collapsed ? undefined : 'fadeInDown'} duration={300} useNativeDriver>
          <Text style={styles.collapsibleItem}>- Gestora de condomínio</Text>
        </Animatable.Text>
      </Collapsible>

      <Text style={styles.listItem}>Políticas de privacidade</Text>
    </SafeAreaView>
  )
}