import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Linking, StatusBar, ScrollView, SafeAreaView, Modal } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
import { faCopy } from '@fortawesome/free-regular-svg-icons/faCopy'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'
import * as Clipboard from 'expo-clipboard';
import axios from "axios";
import moment from "moment";
import 'moment/locale/pt-br';

moment.locale('pt-br');

import styles from "../styles";

const capitalize = (string) => {
  let str = string;

  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
  }
  str = words.join(' ');

  return str
}

function CardFatura({ dados, index, pagamento, fornecimento , geraFatura }) {
  let color = 'orange';
  if(dados.situacaoDaFatura == 'PAGA') color = 'green';
  if(dados.situacaoDaFatura == 'EM ATRASO') color = 'red';

  let situacao = capitalize(dados.situacaoDaFatura);
  if(situacao == 'Em Atraso') situacao = 'Vencida'
  if(situacao == 'Em Aberto') situacao = 'Aberta'

  let dataEmissao = capitalize(moment(dados.dataEmissao).utcOffset('-0300').format('MMMM YYYY'));
  let dataVencimento = moment(dados.dataVencimento).utcOffset('-0300').format('DD/MM/YYYY')
  let valorFatura = `R$ ${dados.valor.toFixed(2).toString().replace('.', ',')}`;

  return pagamento ? (
    <View>
      <Text style={styles.textCardFatura}>{dataEmissao}</Text>
      <Text style={[styles.textCardFatura, { fontSize: 32, fontWeight: 'bold'}]}>{valorFatura}</Text>
      <Text style={styles.textCardFatura}>Vencimento: {dataVencimento}</Text>
      <Text style={styles.textCardFatura}>Status: <Text style={{ color: color, fontWeight: 'bold' }}>{situacao}</Text></Text>
    </View>
  ) : (
    <TouchableOpacity  style={styles.buttonFatura} onPress={() => dados.situacaoDaFatura != 'PAGA' ? geraFatura(index, fornecimento) : null}>
      <View style={styles.row}>
        <Text style={styles.textCardFatura}>{dataEmissao}</Text>
        <View style={styles.rightMenu}>
        <Text style={[styles.textCardFatura, { color: color, fontWeight: 'bold' }]}>{situacao}</Text>
        </View>
      </View>
      <Text style={[styles.textCardFatura, { fontSize: 32, fontWeight: 'bold'}]}>{valorFatura}</Text>
      <View style={styles.row}>
        <Text style={styles.textCardFatura}>Vencimento: {dataVencimento}</Text>
        {dados.situacaoDaFatura != 'PAGA' ? (
          <View style={styles.rightMenu}>
            <FontAwesomeIcon icon={ faChevronRight } size={18} style={{ color: '#00a5e4', marginTop: -5 }}/>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  ) 
}

export default function FaturaSimplificada({ route, navigation }) {
  const dadosFornecimento = route.params.dadosFornecimento;
  const fornecimento = route.params.fornecimento;

  const [enderecoFornecimento, setEnderecoFornecimento] = useState('');
  const [dadosCliente, setDadosCliente] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [pagamento, setPagamento] = useState(null)
  const [segundaVia, setSegundaVia] = useState({});

  useEffect(() => {
    axios.get('http://pwa-api-nsqua.sabesp.com.br/viario/fornecimento/' + fornecimento + '/endereco')
      .then(res => {
        setEnderecoFornecimento(res.data)
      })

    axios.get('http://pwa-api-nsqua.sabesp.com.br/cliente/fornecimento/' + fornecimento)
      .then(res => {
        setDadosCliente(res.data)
      })
  }, [])

  const copyToClipboard = async (texto) => {
    await Clipboard.setStringAsync(texto);
  };

  const calculaDebitos = () => {
    let emAberto:any = 0;
    let emAtraso:any = 0;
    dadosFornecimento.forEach(element => {
      element.situacaoDaFatura == 'EM ATRASO' ? emAtraso+= element.valor : null;
      element.situacaoDaFatura == 'EM ABERTO' ? emAberto+= element.valor : null;
    });
    let soma = (emAberto + emAtraso).toFixed(2).toString().replace('.', ',')
    emAberto = emAberto.toFixed(2).toString().replace('.', ',')
    emAtraso = emAtraso.toFixed(2).toString().replace('.', ',')

    return [emAberto, emAtraso, soma]
  }

  const geraFatura = (index, fornecimento) => {
    axios.post('http://pwa-api-nsqua.sabesp.com.br/download', {
      "codigoFornecimento": fornecimento,
      "codelineFaturas": [
        dadosFornecimento[index].codigoPagamento,
      ],
      "motivoSolicitacao": "1",
      "formaEntrega": "0",
      "isResume": true,
      "isTotem": false,
      "codigoClienteRL": ""
    }).then(res => {
      setSegundaVia(res.data);
    })

    setPagamento(index);
  }

  return(
    <SafeAreaView style={{flex: 1}}>    
      <StatusBar barStyle="dark-content" backgroundColor='#ffffff' />
      <ScrollView style={{ backgroundColor: '#F1F6F9' }}>
        <View style={styles.headerFaturas}>
          <View style={[styles.row, { marginTop: 40 }]}>
            <TouchableOpacity style={styles.leftMenu} onPress={() => pagamento != null ? setPagamento(null) : navigation.navigate('Faturas') }>
              <FontAwesomeIcon icon={ faArrowLeft } size={24} style={{color: 'black'}}/>
            </TouchableOpacity>
            <View style={styles.rowCenter}>
              <Image source={require('../../../../assets/brand/logo_horizontal.png')} style={styles.logoHorizontal}/>
            </View>
          </View>
        </View>
        {enderecoFornecimento && dadosCliente && pagamento === null ? (
          <>
            <View style={styles.container}>
              <Text style={[styles.textfatura, { fontSize: 24, fontWeight: 'bold' }]}>{dadosCliente.nome + ' ' + dadosCliente.sobrenome}</Text>
              <Text style={styles.textfatura}>{capitalize(`${enderecoFornecimento.toponimo} ${enderecoFornecimento.nomeLogradouro}, ${enderecoFornecimento.bairro}`)}</Text>
              <Text style={styles.textfatura}>{capitalize(enderecoFornecimento.nomeMunicipio) + ' - ' + enderecoFornecimento.estado}</Text>          
              <Text style={[styles.textfatura, { marginTop: 15, marginBottom: 0 }]}>Débito Total: </Text>
              <Text style={[styles.textfatura, { fontSize: 32, fontWeight: 'bold' }]}>{calculaDebitos()[2] != '0' ? 'R$ ' + calculaDebitos()[2] : '-' }</Text>
              <Text style={styles.textfatura}>Contas em aberto: <Text style={{ fontWeight: 'bold' }}>{calculaDebitos()[0] != '0' ? 'R$ ' + calculaDebitos()[0] : '-' }</Text></Text>
              <Text style={styles.textfatura}>Contas vencidas: <Text style={{ fontWeight: 'bold', color: 'red'}}>{calculaDebitos()[1] != '0' ? 'R$ ' + calculaDebitos()[1] : '-' }</Text></Text>
            </View>

            {dadosFornecimento.map((item, index) => (
              <CardFatura 
                dados={item} 
                index={index} 
                fornecimento={fornecimento}
                geraFatura={geraFatura}
                key={index}/>
              )
            )}
            <View style={styles.container}>
              <View style={styles.center}>
                <Text style={[styles.textfatura, { textAlign: 'center'}]}>
                  Aqui você tem acesso somente a faturas emitidas nos últimos 180 dias. Para obter acesso completo as faturas, <Text style={styles.hyperlink} onPress={() => navigation.navigate('Faturas', { tab: 1 })}>faça login ou registre-se</Text>
                </Text>
              </View>
            </View>
          </>
        ) : null}
        {pagamento != null ? (
          <View style={[styles.container, { backgroundColor: '#F1F6F9'}]}>
            <View style={styles.pagamentoCard}>
              <CardFatura 
                dados={dadosFornecimento[pagamento]} 
                index={pagamento} 
                setPagamento={setPagamento} 
                pagamento={true}
              />

              <View style={styles.center}>
                <Text style={styles.codigoFatura}>{dadosFornecimento[pagamento].codigoDeBarras}</Text>

                {segundaVia ? (
                  <View style={styles.buttonCardBar}>
                    <TouchableOpacity style={styles.buttonCard} onPress={() => copyToClipboard(dadosFornecimento[pagamento].codigoDeBarras)}>
                      <FontAwesomeIcon icon={ faCopy } size={22} style={styles.buttonCardIcon}/>
                      <Text style={styles.buttonCardText}>Copiar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCard} onPress={() => Linking.openURL('data:application/octet-stream;base64,' + segundaVia.file.file)}>
                      <FontAwesomeIcon icon={ faDownload } size={22} style={styles.buttonCardIcon}/>
                      <Text style={styles.buttonCardText}>Baixar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCard} onPress={() => Linking.openURL('data:application/pdf;base64,' + segundaVia.file.file)}>
                      <FontAwesomeIcon icon={ faEye } size={22} style={styles.buttonCardIcon}/>
                      <Text style={styles.buttonCardText}>Visualizar</Text>
                    </TouchableOpacity>
                  </View>
                ) : null}

                <Image style={{ margin: 5, width: '90%' }} source={require('../../../../assets/icons/codigoDeBarrasLongo.png')}></Image>
              </View>

            </View>
              <View style={styles.pagamentoCard}>
                <View style={styles.center}>
                  <View style={styles.rowCenter}>
                    <Image style={{ marginRight: 7, marginTop: 3 }} source={require('../../../../assets/icons/codigodebarras.png')}></Image>
                    <Text style={styles.loginBold}>Pague pelo aplicativo do seu banco</Text>
                  </View>
                  <Text style={[styles.textfatura, {textAlign: 'center'}]}>
                    Escolha o banco de sua preferência e pague pelo código de barras.
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.itemNumber}>1</Text>
                  <Text style={styles.textfaturaBanco}>Clique no ícone "Copiar" código de barras.</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.itemNumber}>2</Text>
                  <Text style={styles.textfaturaBanco}>Abra o aplicativo do seu banco.</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.itemNumber}>3</Text>
                  <Text style={styles.textfaturaBanco}>Escolha digitar código de barras.</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.itemNumber}>4</Text>
                  <Text style={styles.textfaturaBanco}>Verifique se as informações estão corretas.</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.itemNumber}>5</Text>
                  <Text style={styles.textfaturaBanco}>Efetue o pagamento.</Text>
                </View>
              </View>
          </View>
        ) : null}

        <Modal animationType="slide" visible={showModal} transparent={true}>
          <ScrollView style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.modalView}>
              <View style={styles.center}>
                <FontAwesomeIcon icon={ faCircleCheck } size={100} style={{ color: '#00a000' }}/>
              </View>
              <Text style={styles.modalTitle}>Solicitação de 2ª via de conta concluída com sucesso!</Text>
              <Text style={styles.modalText}>Se você realizou o pagamento, aguarde até 2 dias úteis para confirmação. </Text>

              <TouchableOpacity style={styles.modalButton} onPress={() => setShowModal(false)}>
                <Text style={styles.modalButtonText}>Ok</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Modal>

      </ScrollView>
    </SafeAreaView>
  )
}