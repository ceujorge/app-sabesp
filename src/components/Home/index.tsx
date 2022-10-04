import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { Picker } from '@react-native-picker/picker';
import Collapsible from 'react-native-collapsible';
import * as Animatable from 'react-native-animatable';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'

import styles from "./styles";
import Header from "../Header";
import FaturaCompleta from "../Faturas/FaturaCompleta";
import { ScrollView } from "react-native-gesture-handler";
import HistoricoPagamento from "../HistoricoPagamento";

export default function Home({ navigation }) {
  const [endereco, setEndereco] = useState('');
  const [collapsedFaturas, setCollapsedFaturas]: any = useState(true);
  const [collapsedHistorico, setCollapsedHistorico]: any = useState(true);

  const toggleExpandedFaturas = () => {
    setCollapsedFaturas(!collapsedFaturas);
  };

  const toggleExpandedHistorico = () => {
    setCollapsedHistorico(!collapsedHistorico);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <View>
          <View style={styles.inputContainer}>
            <Text style={{ fontWeight: 'bold' }}>Endereço</Text>
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
              <Text style={styles.textEnderecoFornecimento}>Fornecimento</Text>
              <Text style={styles.textEnderecoFornecimentoBold}>0073027707</Text>
            </View>
            <View style={styles.halfContainer}>
              <Text style={styles.textEnderecoVencimento}>Próximo vencimento</Text>
              <Text style={styles.textEnderecoVencimentoBold}>05/10/2022</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.collapsibleHeader} onPress={toggleExpandedFaturas}>
          <Text style={styles.collapsibleHeaderText}>
            <Image style={{ height: 25, width: 25 }} source={require('../../../assets/icons/fts.png')} />
            Faturas e Pagamentos
          </Text>
          <FontAwesomeIcon icon={ collapsedFaturas ? faPlus : faMinus} size={22} style={styles.caret}/>
        </TouchableOpacity>
        <Collapsible style={styles.collapsible} collapsed={collapsedFaturas}>
          <Animatable.View animation={collapsedFaturas ? undefined : 'fadeInDown'} duration={300} useNativeDriver>
            <FaturaCompleta navigation={{ navigation }}/>
          </Animatable.View>
        </Collapsible>

        <TouchableOpacity style={styles.collapsibleHeader} onPress={toggleExpandedHistorico}>
          <Text style={styles.collapsibleHeaderText}>
            <Image style={{ height: 25, width: 25 }} source={require('../../../assets/icons/hts.png')} />
            Histórico de Consumo
          </Text>
          <FontAwesomeIcon icon={ collapsedHistorico ? faPlus : faMinus} size={22} style={styles.caret}/>
        </TouchableOpacity>
        <Collapsible style={styles.collapsible} collapsed={collapsedHistorico}>
          <Animatable.View animation={collapsedHistorico ? undefined : 'fadeInDown'} duration={300} useNativeDriver>
            <HistoricoPagamento navigation={{ navigation }}/>
          </Animatable.View>
        </Collapsible>
      </ScrollView>
    </SafeAreaView>
  )
}