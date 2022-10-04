import React, { useState, useEffect } from "react";
import { View, Text, Linking, TouchableOpacity, Dimensions, Image, Switch } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
import { faCopy } from '@fortawesome/free-regular-svg-icons/faCopy'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck'
import { TextInput } from "react-native-paper";
import Carousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { LinearGradient } from 'expo-linear-gradient';
import * as Progress from 'react-native-progress';
import moment from 'moment';
import 'moment/locale/pt-br';

import styles from "./styles";

moment.locale('pt-br');

const bancos = [
  {
    nome: 'Segunda Via',
    nomeButton: 'Conta\nSabesp',
    icon: require('../../../assets/bancos/conta-sabesp.png'),
    logo: ''},
  {
    nome: 'Banco do Brasil',
    nomeButton: 'Banco do\nBrasil',
    icon: require('../../../assets/bancos/bb-icon.png'), 
    logo: require('../../../assets/bancos/bb-logo.png')
  },
  {
    nome: 'Bradesco',
    nomeButton: 'Banco\nBradesco', 
    icon: require('../../../assets/bancos/bradesco-icon.png'),
    logo: require('../../../assets/bancos/bradesco-logo.png')
  }
]

function CardPagamento({ item, setBanco }) {
  return (
    <TouchableOpacity style={styles.cardPagamento} onPress={() => setBanco(item)}>
      <Image style={{ height: 25 }} source={item.icon} resizeMode={'contain'}/>
      <Text style={styles.cardPagamentoText}>{item.nomeButton}</Text>
    </TouchableOpacity>
  )
}

export default function Pagamento({ fatura }) {
  const [banco, setBanco] = useState(null);
  const [informePagamento, setInformePagamento] = useState(false);
  const [email, setEmail] = useState('');
  const [emailConfirma, setEmaiConfirma] = useState('');

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const width = Dimensions.get('window').width;

  const capitalizar = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      {fatura.statusFatura === 'Aguardando confirmação do pagamento' ? (
        // Solicitação de pagamento já efetuada
        <>
          <Text style={styles.faturaSelecionadaTitle}>Solicitação de 2ª via de fatura</Text>
          <View style={styles.borderedContainer}>
            <Text style={styles.regularText18light}>
              {capitalizar(moment().utcOffset('-0300').format('ddd. DD [de] MMM, [às] hh:mm[h]'))}
            </Text>
            <Text style={styles.regularText18}>Solicitação concluída com sucesso</Text>
            <Progress.Bar progress={1} width={width / 4 * 3} color='#00c000' />
            <Text style={styles.regularText18}>Documento nº 14589736</Text>
            <View>
              <Text style={styles.label}>Contrato de fornecimento</Text>
              <Text style={styles.labelText}>00073027707</Text>
            </View>
            <View>
              <Text style={[styles.regularText18, {fontWeight: 'bold'}]}>
                Solicitação de 2ª via da fatura
              </Text>
              <Text style={styles.regularText18}>
                Se você realizou o pagamento, aguarde até 2 dias úteis para confirmação. Se você não realizou o pagamento, retorne e clique em pagar.
              </Text>
            </View>
            <View>
              <Text style={[styles.regularText18, {fontWeight: 'bold'}]}>
                Quer receber a fatura por email
              </Text>
              <Text style={styles.regularText18}>
                Ativando esse serviço, você terá a comodidade de receber a sua fatura por e-mail.
              </Text>
              <TextInput 
                mode="outlined" 
                placeholder="Digite o seu e-mail"
                style={{ width: '95%'}}
                theme={{ colors: { primary: '#00a5e4' }}}
                label='E-mail' 
                value={email} 
                onChangeText={value => { setEmail(value) }}
              />
              <TextInput 
                mode="outlined" 
                placeholder="Confirme o seu e-mail"
                style={{ width: '95%'}}
                theme={{ colors: { primary: '#00a5e4' }}}
                label='Confirme o e-mail' 
                value={emailConfirma} 
                onChangeText={value => { setEmaiConfirma(value) }}
              />
              <View style={styles.linkContainer}>
                <Text style={styles.hyperlink} onPress={() => Linking.openURL('javascript:void(0)')}>
                  Ver termos de serviço
                </Text>
              </View>
              <View style={styles.switchContainer}>
                <Switch
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  style={styles.switch}
                />
                <Text style={{paddingTop: 15}}>Aceito os termos de serviço</Text>
              </View>
                                    
              <TouchableOpacity style={styles.buttonOutline} onPress={() => null}>
                <Text style={styles.textButtonOutline}>Cadastrar E-mail</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : (
        <>
          {!informePagamento ? (
            // Carousel Bancos
            <View style={styles.containerPagamento}>
              <Text style={styles.titlePagamento}>Formas de Pagamento</Text>
              <View style={styles.cardContainerPagamento}>
                <LinearGradient colors={['#1e3650', '#FFFFFF']} locations={[0.4, 0]}>
                  <GestureHandlerRootView>
                    <Carousel
                      loop={false}
                      width={width / 2.5}
                      height={width / 3}
                      autoPlay={false}
                      style={{ width: width, zIndex: 999 }}
                      data={bancos}
                      scrollAnimationDuration={1000}
                      renderItem={({ item, index }) => (
                        <CardPagamento item={item} setBanco={setBanco} key={index}/>
                      )}
                    />
                  </GestureHandlerRootView>
                </LinearGradient>
              </View>
            </View>
          ) : (
            // Confirmação de pagamento após abrir banco
            <View style={{ width: '100%' }}>
              <View style={styles.rowCenter}>
                <FontAwesomeIcon icon={ faCircleCheck } size={100} style={{ color: '#00a000', marginTop: 30}}/>
              </View>
              <Text style={styles.centerTitle}>SOLICITAÇÃO DE 2ª VIA DE CONTA CONCLUÍDA COM SUCESSO</Text>
              <Text style={styles.information}>
                Se você realizou o pagamento, aguarde até dois dias úteis para confirmação. Se você não realizou o pagamento, retorne e clique em pagar.
              </Text>
            </View>
          )}
          {banco && !informePagamento ? (
            // informações de pagamento
            <View style={{ width: '100%' }}>
              <Text style={styles.faturaSelecionadaTitle}>1 - Fatura Selecionada</Text>
              <View style={styles.rowSpace}>
                <Text style={styles.textfatura}>{'Fatura em aberto\nvencimento em ' + moment(fatura.dataVencimento).format('DD/MM/YY')}</Text>
                <Text style={styles.textfaturaRightBold}>{'R$ ' + String(fatura.valor).replace('.', ',')}</Text>
              </View> 
              <Text style={styles.codigoDeBarras}>{fatura.codigoDeBarras}</Text>
              <View style={styles.buttonCardBar}>
                <TouchableOpacity style={styles.buttonCard}>
                  <FontAwesomeIcon icon={ faCopy } size={18} style={styles.buttonCardIcon}/>
                  <Text style={styles.buttonCardText}>Copiar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCard} onPress={() => null}>
                  <FontAwesomeIcon icon={ faDownload } size={18} style={styles.buttonCardIcon}/>
                  <Text style={styles.buttonCardText}>Baixar</Text>
                </TouchableOpacity>
              </View>
              {banco && banco?.nome != 'Segunda Via'? (
                <View style={{ width: '90%' }}>
                  <View style={styles.row}>
                    <Image style={styles.bancoLogo} source={banco.logo} resizeMode={'contain'}></Image>
                    <View style={{ width: '75%' }}>
                      <Text style={styles.loginBold}>{'Pague pelo ' + banco.nome }</Text>
                      <Text style={styles.textfatura}>Você será redirecionado para o aplicativo do banco para realizar o pagamento</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.itemNumber}>1</Text>
                    <Text style={styles.textfatura}>Clique no ícone "Copiar" código de barras.</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.itemNumber}>2</Text>
                    <Text style={styles.textfatura}>Abra o aplicativo do seu banco.</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.itemNumber}>3</Text>
                    <Text style={styles.textfatura}>Escolha digitar código de barras.</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.itemNumber}>4</Text>
                    <Text style={styles.textfatura}>Verifique se as informações estão corretas.</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.itemNumber}>5</Text>
                    <Text style={styles.textfatura}>Efetue o pagamento.</Text>
                  </View>
                  <View style={styles.rowSpace}>
                    <Text style={{ fontSize: 20, width: '50%', marginRight: 20}}>Total de débitos selecionados</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 32, width: '50%', alignSelf:'flex-end'}}>{'R$ ' + String(fatura.valor).replace('.', ',')}</Text>
                  </View>
                  <TouchableOpacity style={styles.buttonBanco} onPress={() => setInformePagamento(true)}>
                    <Text style={styles.textButtonBanco}>Acessar o banco</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={{ width: '90%' }}>
                  <Text style={styles.loginBold}>Pague pelo aplicativo do seu banco</Text>
                  <Text style={styles.textfatura}>Escolha o banco de sua preferência e pague pelo código de barras.</Text>
                  <View style={styles.row}>
                    <Text style={styles.itemNumber}>1</Text>
                    <Text style={styles.textfatura}>Clique no ícone "Copiar" código de barras.</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.itemNumber}>2</Text>
                    <Text style={styles.textfatura}>Abra o aplicativo do seu banco.</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.itemNumber}>3</Text>
                    <Text style={styles.textfatura}>Escolha digitar código de barras.</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.itemNumber}>4</Text>
                    <Text style={styles.textfatura}>Verifique se as informações estão corretas.</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.itemNumber}>5</Text>
                    <Text style={styles.textfatura}>Efetue o pagamento.</Text>
                  </View>
                </View>
              )}
            </View>
          ) : null }
        </>
      )}
    </>
  )
}