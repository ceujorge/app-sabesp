import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity, Image, SafeAreaView, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';
import Collapsible from 'react-native-collapsible';
import * as Animatable from 'react-native-animatable';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'

import Header from "../Header";
import FaturaCompleta from "../Faturas/FaturaCompleta";
import HistoricoPagamento from "../HistoricoPagamento";

import styles from "./styles";

export default function Home({ navigation }) {
  const [endereco, setEndereco] = useState('');
  const [collapsedFaturas, setCollapsedFaturas]: any = useState(true);
  const [collapsedHistorico, setCollapsedHistorico]: any = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleExpandedFaturas = () => setCollapsedFaturas(!collapsedFaturas);
  const toggleExpandedHistorico = () => setCollapsedHistorico(!collapsedHistorico);

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
              <Text style={styles.homeTextLeft}>Fornecimento</Text>
              <Text style={styles.homeTextLeftBold}>0073027707</Text>
            </View>
            <View style={styles.halfContainer}>
              <Text style={styles.homeTextRight}>Próximo vencimento</Text>
              <Text style={styles.homeTextRightBold}>05/10/2022</Text>
            </View>
          </View>
        </View>

        <View style={{ margin: 15 }}>
          <Text style={[styles.homeTextLeftBold, {fontSize: 20}]}>{'Verifique as condições para quitar seu(s) débito(s)!'}</Text>

          <View style={styles.switchContainer}>
            <Switch
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text style={styles.homeTextLeft}>Desejo incluir a fatura em aberto no pagamento</Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.homeTextLeft, {fontSize: 12}]}>DÉBITOS EM ATRASO</Text>
            <Text style={[styles.homeTextRight, {fontSize: 12}]}>VALOR DOS DÉBITOS</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.debitosEmAtraso}>3- Faturas</Text>
            <Text style={styles.valorDosDebitos}>R$ 170,71</Text>
          </View>

          <TouchableOpacity style={styles.buttonSubmit} onPress={() => navigation.navigate('Parcelamento')}>
            <Text style={styles.textButtonSubmit}>Simular</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.collapsibleHeader} >
          <Text style={styles.collapsibleHeaderText}>
            <Image style={{ height: 30, width: 30 }} source={require('../../../assets/icons/parcelamento.png')} />
            ⠀Parcelamento
          </Text>
          <TouchableOpacity style={styles.buttonSubmitMini} onPress={() => navigation.navigate('Acordos')}>
            <Text style={styles.textButtonSubmitMini}>Acessar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.collapsibleHeader} onPress={toggleExpandedFaturas}>
          <Text style={styles.collapsibleHeaderText}>
            <Image style={{ height: 25, width: 25 }} source={require('../../../assets/icons/fts.png')} />
            ⠀Faturas e Pagamentos
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
            ⠀Histórico de Consumo
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