import React, { useState } from "react";
import { View, Text, Linking, Switch, TouchableOpacity, ScrollView, SafeAreaView, Dimensions} from "react-native";
import Collapsible from 'react-native-collapsible';
import * as Animatable from 'react-native-animatable';
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck'
import * as Progress from 'react-native-progress';
import moment from "moment";

import Header from "../Header";
import Breadcrumb from "../Breadcrumb"

import styles from "./styles";

moment.locale('pt-br');

const breadcrumb = [
  {label: 'Home', link: 'Home'}, 
  {label: 'Parcelamento', link: '', active: true},
]

function FaturaCollapsible({valor, mes}) {
  const [collapsed, setCollapsed]: any = useState(true);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <TouchableOpacity style={styles.collapsibleHeader} onPress={toggleExpanded}>
        <Text style={styles.collapsibleHeaderText}>
          Vencimento
        </Text>
        <View style={{ right: 12, flexDirection: 'row' }}>
          <Text style={[styles.collapsibleHeaderText, { color: mes === '08' ? 'green' : 'red' }]}>
            {`05/${mes}/2022`}
          </Text>
          <FontAwesomeIcon icon={ collapsed ? faPlus : faMinus } size={22} style={styles.caret}/>
        </View>
      </TouchableOpacity>
      <Collapsible style={styles.collapsible} collapsed={collapsed}>
        <Animatable.View animation={collapsed ? undefined : 'fadeInDown'} duration={300} useNativeDriver>
          <View style={styles.row}>
            <Text style={styles.parcelaTexto50}>Documento</Text>
            <Text style={styles.parcelaTexto50}>12345678910</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.parcelaTexto50}>Consumo</Text>
            <Text style={styles.parcelaTexto50}>353485 m³</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.parcelaTexto50}>Valor original</Text>
            <Text style={styles.parcelaTexto50}>R$ {valor}</Text>
          </View>
          <Text style={styles.parcelaTextoLeft}></Text>
          <Text style={styles.parcelaTextoLeft}>Juros, multas e encargos</Text>
          <View style={styles.row}>
            <Text style={styles.parcelaTextoLeft}>Multa R$ 4,02</Text>
            <Text style={styles.parcelaTextoLeft}>Juros R$ 9,12</Text>
            <Text style={styles.parcelaTextoLeft}>ATM R$ 10,11</Text>
          </View>
        </Animatable.View>
      </Collapsible>
      <View style={styles.collapsibleFooter}>
        <Text style={styles.collapsibleFooterText}>Valor Atualizado</Text>
        <Text style={styles.collapsibleFooterText}>R$ {valor}</Text>
      </View>
    </>
  )
}

export default function Parcelamento({ navigation }) {
  const [vencimento, setVencimento] = useState('');
  const [parcelamento, setParcelamento] = useState('');
  const [stage, setStage] = useState(1)

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const capitalizar = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const width = Dimensions.get('window').width;

  return (
    <SafeAreaView>
      <Header/>
      <Breadcrumb config={ breadcrumb } navigation={ navigation }/>
      <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
        <View style={styles.steps}>
          <FontAwesomeIcon icon={ faCircle } size={14} style={styles.activeStep}/>
          <Text style={styles.activeStep}>Negociação</Text>
          <FontAwesomeIcon icon={ faMinus } size={14} style={ stage === 3 ? styles.activeStep : styles.inactiveStep}/>
          <FontAwesomeIcon icon={ faCircle } size={14} style={ stage === 3 ? styles.activeStep : styles.inactiveStep}/>
          <Text style={ stage === 3 ? styles.activeStep : styles.inactiveStep}>Acordo</Text>
        </View>

        <View style={styles.container}>
          {stage === 3 ? <>
            <Text style={[styles.parcelaTextoBold, {fontSize: 20}]}>Negociação de débitos</Text>

            <Text style={styles.parcelaTextoGray}>{capitalizar(moment().utcOffset('-0300').format('ddd. DD [de] MMM, [às] hh:mm[h]'))}</Text>

            <View style={styles.row}>
              <Text style={[styles.parcelaTexto, {marginBottom: 5}]}>
                <FontAwesomeIcon icon={ faCircleCheck } size={20} style={{ color: '#00a000', padding: 50 }}/>
                ⠀Negociação realizada com sucesso
              </Text>
            </View>
            <Progress.Bar progress={1} width={width / 10 * 9} color='#00c000' style={{ alignSelf: 'center', marginBottom: 30}}/>
            <Text style={styles.parcelaTextoLeft}>Documento nº 15489562</Text>
          </> : null}
          {stage === 1 ? <Text style={styles.parcelaTextoBold}>Negociação de débitos</Text> : null}
          {stage === 2 ? <Text style={[styles.parcelaTextoBold, {fontSize: 20}]}>Negociação de débitos</Text> : null}
          {stage === 3 ? <Text style={styles.parcelaTextoBold}>Acordo de parcelamento</Text> : null}
          <Text style={styles.parcelaTextoLeft}>Cliente: 
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}> Fulano de Tal</Text>
          </Text>
          <Text style={styles.parcelaTextoLeft}>CPF: 333.444.555-66</Text>
          <Text style={styles.parcelaTextoLeft}>Contrato de fornecimento 00073027707</Text>
          <Text style={styles.parcelaTextoLeft}>Dados do imóvel</Text>
          <Text style={styles.parcelaTextoLeft}>{'Av. Presidente Castelo Branco, 1800\nPraia Grande - SP'}</Text>
        </View>

        {stage === 1 ? (
        <>
          <Text style={[styles.parcelaTextoBoldLeft, { fontSize: 18 }]}>3 - Faturas em aberto</Text>

          <FaturaCollapsible valor={'37,45'} mes={'06'}/>
          <FaturaCollapsible valor={'67,17'} mes={'07'}/>
          <FaturaCollapsible valor={'45,23'} mes={'08'}/>

          <View style={styles.container}>
            <View style={styles.row}>
              <Text style={styles.parcelaTextoLeft}>Valor total das faturas</Text>
              <Text style={styles.parcelaTextoRight}>R$ 149,85</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.parcelaTextoLeft}>Juros</Text>
              <Text style={styles.parcelaTextoRight}>R$ 20,86</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.parcelaTextoBoldLeft}>Valor Total</Text>
              <Text style={styles.parcelaTextoBoldRight}>R$ 170,71</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.parcelaTextoSmallLeft}>Atualizado em 06/10/2022</Text>
              <Text style={styles.parcelaTextoSmallRight}>Parcelado em 1x</Text>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={[styles.parcelaTextoBoldLeft, { fontSize: 18 }]}>Resumo das faturas selecionadas</Text>
            <Text style={{ marginLeft: 12 }}>Dia do vencimento</Text>
            <Picker 
              selectedValue={vencimento}
              onValueChange={val => setVencimento(val)}
              style={styles.select}>
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Vencimento dia 05" value="05" />
              <Picker.Item label="Vencimento dia 10" value="10" />
              <Picker.Item label="Vencimento dia 15" value="15" />
            </Picker>

            <Text style={{ marginLeft: 12 }}>Parcelamento</Text>
            <Picker 
              selectedValue={parcelamento}
              onValueChange={val => setParcelamento(val)}
              style={styles.select}>
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="1 x R$ 170,86" value="1x" />
              <Picker.Item label="2 x R$ 94,48" value="2x" />
              <Picker.Item label="3 x R$ 63,74" value="3x" />
              <Picker.Item label="4 x R$ 50,37" value="4x" />
            </Picker>
          </View>
        </>) : (
        <>
          <Text style={[styles.parcelaTextoLeft, { fontSize: 18 }]}>3 - Faturas em aberto selecionadas</Text>
          <Text style={[styles.hyperlink, {marginLeft: 18}]} onPress={() => Linking.openURL('javascript:void(0)')}>
            Ver faturas
          </Text>
          <View style={styles.row}>
            <Text style={[styles.parcelaTextoLeft, {fontSize: 18}]}>Valor total das faturas</Text>
            <Text style={[styles.parcelaTextoRight, {fontSize: 18}]}>R$ 146,85</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.parcelaTextoLeft}>Juros</Text>
            <Text style={styles.parcelaTextoRight}>R$ 51,61</Text>
          </View>
          <Text style={[styles.parcelaTextoLeft, {fontSize: 18, marginBottom: 5}]}>Valor total atualizado</Text>
          <View style={styles.row}>
            <Text style={[styles.parcelaTextoLeft, {fontSize: 18}]}>em 06/10/2022</Text>
            <Text style={[styles.parcelaTextoBoldRight, {fontSize: 18}]}>R$ 201,46</Text>
          </View>

          <Text style={[styles.parcelaTexto, { fontSize: 18 }]}>Condições de pagamento</Text>
          <View style={styles.row}>
            <Text style={styles.parcelaTextoLeft}>1º parcela</Text>
            <Text style={styles.parcelaTextoLeft}>15/10/2022</Text>
            <Text style={styles.parcelaTextoLeft}>R$ 50,37</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.parcelaTextoLeft}>2º parcela</Text>
            <Text style={styles.parcelaTextoLeft}>15/11/2022</Text>
            <Text style={styles.parcelaTextoLeft}>R$ 50,37</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.parcelaTextoLeft}>3º parcela</Text>
            <Text style={styles.parcelaTextoLeft}>15/12/2022</Text>
            <Text style={styles.parcelaTextoLeft}>R$ 50,37</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.parcelaTextoLeft}>4º parcela</Text>
            <Text style={styles.parcelaTextoLeft}>15/01/2023</Text>
            <Text style={styles.parcelaTextoLeft}>R$ 50,37</Text>
          </View>

          {stage === 2 ?
            <TouchableOpacity style={styles.buttonOutline} onPress={() => setStage(1)}>
              <Text style={styles.textButtonOutline}>Simular novamente</Text>
            </TouchableOpacity>
          : null}

        </>)}

        {stage === 1 ?
          <TouchableOpacity 
            style={vencimento && parcelamento ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
            onPress={() => setStage(2)} 
            disabled={!vencimento && parcelamento}>
            <Text style={styles.textButtonSubmit}>Continuar</Text>
          </TouchableOpacity>
        : null }
        
        {stage === 2 ?
          <>
            <View> 
              <Text style={[styles.parcelaTextoBold, { fontSize: 18, marginBottom: 5 }]}>Aceite o Termo</Text>
              <View style={styles.switchContainer}>
                <Switch
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
                <Text style={[styles.parcelaTextoLeft, {marginTop: 10}]}>Li e concordo com o⠀
                  <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://sabesp.s3.amazonaws.com/termoParcelamento.pdf')}>
                    Termo de acordo de parcelamento
                  </Text> pela internet
                </Text>
              </View>
            </View>

            <TouchableOpacity 
              style={isEnabled ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
              onPress={() => setStage(3)}
              disabled={!isEnabled}>
              <Text style={styles.textButtonSubmit}>Confirmar acordo</Text>
            </TouchableOpacity>
          </>
        : null }
        
        {stage <= 2 ?
          <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.textButtonOutline}>Cancelar</Text>
          </TouchableOpacity>
        : null }

        {stage === 3 ?
          <>
            <TouchableOpacity style={styles.buttonOutline} onPress={() => null}>
              <Text style={styles.textButtonOutline}>Baixar comprovante em PDF</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.buttonOutline, {marginBottom: 30}]} onPress={() => null}>
              <Text style={styles.textButtonOutline}>Enviar para o e-mail cadastrado o termo de acordo de parcelamento</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonSubmit} onPress={() => navigation.navigate('Acordos')}>
              <Text style={styles.textButtonSubmit}>Pagar a 1º parcela</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.textButtonOutline}>Ir para Home</Text>
            </TouchableOpacity>
          </>
        : null }
      </ScrollView>
    </SafeAreaView>
  )
}