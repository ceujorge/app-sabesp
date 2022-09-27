import React, { useState, useEffect } from "react";
import { View, Text, Linking, TouchableOpacity, ScrollView, Dimensions, Image } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
import { faCopy } from '@fortawesome/free-regular-svg-icons/faCopy'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck'
import { TextInput, Checkbox } from "react-native-paper";
import Carousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import moment from 'moment';
import 'moment/locale/pt-br';

import styles from "../styles";
import mocks from "../../../mocks/mocks";

moment.locale('pt-br');

const bancos = [
  {
    nome: 'Segunda Via',
    nomeButton: 'Conta\nSabesp',
    icon: require('../../../../assets/bancos/conta-sabesp.png'),
    logo: ''},
  {
    nome: 'Banco do Brasil',
    nomeButton: 'Banco do\nBrasil',
    icon: require('../../../../assets/bancos/bb-icon.png'), 
    logo: require('../../../../assets/bancos/bb-logo.png')
  },
  {
    nome: 'Bradesco',
    nomeButton: 'Banco\nBradesco', 
    icon: require('../../../../assets/bancos/bradesco-icon.png'),
    logo: require('../../../../assets/bancos/bradesco-logo.png')
  }
]

function CardFatura({ item, setPagamento, setFatura, setBanco }) {
  const capitalizar = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <View style={styles.cardFatura}>
      <Text style={styles.cardText}>{capitalizar(moment(item.dataInicioCompetencia).format('MMM/YY'))}</Text>
      <Text style={styles.cardValor}>{'R$ ' + String(item.valor).replace('.', ',')}</Text>
      <Text style={styles.cardText}>{'Vencimento ' + moment(item.dataVencimento).format('DD/MM/YY')}</Text>
      <Text style={styles.cardOk}>{item.statusFatura}</Text>
      <View style={styles.rowCenter}>
        <TouchableOpacity style={styles.buttonPagar} onPress={() => {
          setPagamento(true);
          setFatura(item);
          setBanco('');
        }}>
          <Text style={styles.textButtonFornecimento}>Pagar conta</Text>
        </TouchableOpacity>
        <FontAwesomeIcon icon={ faDownload } size={18} style={styles.downloadIcon}/>
      </View>
    </View>
  )
}

function CardPagamento({ item, setBanco }) {
  return (
    <TouchableOpacity style={styles.cardPagamento} onPress={() => setBanco(item)}>
      <Image style={{ height: 25 }} source={item.icon} resizeMode={'contain'}/>
      <Text style={styles.cardPagamentoText}>{item.nomeButton}</Text>
    </TouchableOpacity>
  )
}

export default function FaturaSimplificada({ navigation }) {
    const [found, setFound] = useState(false)
    const [pagamento, setPagamento] = useState(false)
    const [fornecimento, setFornecimento] = useState('')
    const [isSelected, setSelection] = useState(false);
    const [contasFornecimento, setContasFornecimento] = useState([])
    const [fatura, setFatura] = useState({});
    const [banco, setBanco] = useState(null);
    const width = Dimensions.get('window').width;

    useEffect(() => {
      setContasFornecimento(mocks.codigoFornecimento);
    }, [])

    return (
      <ScrollView contentContainerStyle={{}}>
        <View style={styles.center}>
          <Text style={styles.loginTitle}>Solicite a 2a via de fatura</Text>
          <Text style={styles.loginInformation}>
            No campo abaixo, insira o seu código de fornecimento para ter acesso à segunda via das contas emitidas nos últimos 90 dias.
          </Text>
          
          <Text style={styles.loginOuterLabel}>
            Fornecimento
          </Text>

          <View style={styles.loginPassword} >
            {!found ? (
              <TouchableOpacity style={styles.buttonFornecimento} onPress={() => setFound(true)}>
                <Text style={styles.textButtonFornecimento}>Ver conta</Text>
              </TouchableOpacity>
            ) : null}

            <TextInput 
              mode="outlined"
              theme={{ colors: { primary: '#00a5e4' }}}
              placeholder="Digite" 
              value={fornecimento} 
              onChangeText={value => { setFornecimento(value) }} 
              maxLength={15}
              right={found ? <TextInput.Icon name={'close-circle-outline'} onPress={() => setFound(false)}/> : null}
            />

          </View>

            {found ? (
              <>
                <Text style={styles.loginBold}>Fulano de ***</Text>
                <Text style={styles.loginInformation}>
                  {'AV. PRESIDENTE C*********\nPRAIA GRANDE - SP'}
                </Text>

                <View style={styles.faturasContainer}>
                  <Text style={styles.faturasValor}>{'R$ ' + String(contasFornecimento.reduce((acc, b) => {return acc + b.valor}, 0)).replace('.', ',')}</Text>
                  <Text style={styles.faturasTextBold}>TOTAL DE DÉBITOS EM ABERTO</Text>
                  <Text style={styles.faturasText}>
                    {'Aqui você tem acesso somente à faturas emitidas\n nos ultimos 90 dias. Para acesso completo às\n faturas, faça login '} 
                    <Text style={{ textDecorationLine: 'underline' }} onPress={() => Linking.openURL('javascript:void(0)')}>
                      CLICANDO AQUI
                    </Text>
                  </Text>
                  <View style={styles.cardContainer}>
                    <GestureHandlerRootView>
                      <Carousel
                        loop={false}
                        width={width}
                        height={width / 1.5}
                        autoPlay={false}
                        data={contasFornecimento.slice(0, 3)}
                        scrollAnimationDuration={1000}
                        renderItem={({ item }) => (
                          <CardFatura 
                            item={item} 
                            setPagamento={setPagamento} 
                            setFatura={setFatura}
                            setBanco={setBanco}
                          />
                        )}
                      />
                    </GestureHandlerRootView>
                  </View>
                  {pagamento && (banco?.nome != 'Segunda Via') ? (
                    <>
                      <Text style={styles.titlePagamento}>Formas de Pagamento</Text>
                      <View style={styles.cardContainerPagamento}>
                        <GestureHandlerRootView>
                          <Carousel
                            loop={false}
                            width={width / 2.5}
                            height={width / 3}
                            autoPlay={false}
                            style={{ width: width, zIndex: 999 }}
                            data={bancos}
                            scrollAnimationDuration={1000}
                            renderItem={({ item }) => (
                              <CardPagamento item={item} setBanco={setBanco}/>
                            )}
                          />
                        </GestureHandlerRootView>
                      </View>
                    </>
                  ) : null}
                </View>
                {banco?.nome == 'Segunda Via' ? (
                  <View style={{ width: '100%' }}>
                    <View style={styles.rowCenter}>
                      <FontAwesomeIcon icon={ faCircleCheck } size={100} style={{ color: '#00a000', marginTop: 30}}/>
                    </View>
                    <Text style={styles.centerTitle}>SOLICITAÇÃO DE 2ª VIA DE CONTA CONCLUÍDA COM SUCESSO</Text>
                    <Text style={styles.loginInformation}>
                      Se você realizou o pagamento, aguarde até dois dias úteis para confirmação. Se você não realizou o pagamento, retorne e clique em pagar.
                    </Text>
                  </View>
                ) : null}
                {pagamento && fatura && (banco?.nome != 'Segunda Via') ? (
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
                    {banco ? (
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
                          <Text style={styles.textfatura}>Abra o aplicativo do seu banco.</Text>
                        </View>
                        <View style={styles.row}>
                          <Text style={styles.itemNumber}>2</Text>
                          <Text style={styles.textfatura}>Faça login na página da instituição.</Text>
                        </View>
                        <View style={styles.row}>
                          <Text style={styles.itemNumber}>3</Text>
                          <Text style={styles.textfatura}>Escolha a opção de realizar o pagamento.</Text>
                        </View>
                        <View style={styles.row}>
                          <Text style={styles.itemNumber}>4</Text>
                          <Text style={styles.textfatura}>Posicione o leitor sobre o código de barras na tela ou digite.</Text>
                        </View>
                        <View style={styles.row}>
                          <Text style={styles.itemNumber}>5</Text>
                          <Text style={styles.textfatura}>Verifique se as informações estão corretas e finalize o pagamento.</Text>
                        </View>
                        <View style={styles.rowSpace}>
                          <Text style={{ fontSize: 20, width: '50%', marginRight: 20}}>Total de débitos selecionados</Text>
                          <Text style={{ fontWeight: 'bold', fontSize: 32, width: '50%', alignSelf:'flex-end'}}>{'R$ ' + String(fatura.valor).replace('.', ',')}</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonBanco} onPress={() => setLogado(true)}>
                          <Text style={styles.textButtonBanco}>Acessar o banco</Text>
                        </TouchableOpacity>
                      </View>
                    ) : (
                      <View style={{ width: '90%' }}>
                        <Text style={styles.loginBold}>Pague pelo aplicativo do seu banco</Text>
                        <Text style={styles.textfatura}>Escolha o banco de sua preferência e pague pelo código de barras.</Text>
                        <View style={styles.row}>
                          <Text style={styles.itemNumber}>1</Text>
                          <Text style={styles.textfatura}>Abra o aplicativo do seu banco.</Text>
                        </View>
                        <View style={styles.row}>
                          <Text style={styles.itemNumber}>2</Text>
                          <Text style={styles.textfatura}>Escolha a opção de fazer o pagamento com código de barras.</Text>
                        </View>
                        <View style={styles.row}>
                          <Text style={styles.itemNumber}>3</Text>
                          <Text style={styles.textfatura}>Posicione o leitor sobre o código de barras na tela.</Text>
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
            ) : (
              <>
                <View style={styles.linkContainer}>
                  <Text style={styles.hyperlink} onPress={() => Linking.openURL('javascript:void(0)')}>
                    Localize o código de fornecimento da sua conta
                  </Text>
                </View>

                <View style={styles.checkBoxContainer}>
                  <Checkbox
                    status={isSelected ? 'checked' : 'unchecked'}
                    onPress={() => setSelection(!isSelected)}
                  />
                  <Text>Salve meu fornecimento</Text>
                </View>
              </>
            )}
        </View>
      </ScrollView>
  );
}