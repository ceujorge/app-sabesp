import React, { useState, useEffect } from "react";
import { View, Text, Linking, TouchableOpacity, Dimensions, Image, Switch } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
import { faCopy } from '@fortawesome/free-regular-svg-icons/faCopy'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'
import * as Progress from 'react-native-progress';
import * as Clipboard from 'expo-clipboard';
import axios from "axios";
import moment from 'moment';
import 'moment/locale/pt-br';

import styles from "./styles";

moment.locale('pt-br');

const capitalize = (string) => {
  let str = string;

  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
  }
  str = words.join(' ');

  return str
}

function CardFatura({ dados }) {
  let color = 'orange';
  if(dados.situacaoDaFatura == 'PAGA') color = 'green';
  if(dados.situacaoDaFatura == 'EM ATRASO') color = 'red';

  let situacao = capitalize(dados.situacaoDaFatura);
  if(situacao == 'Em Atraso') situacao = 'Vencida'
  if(situacao == 'Em Aberto') situacao = 'Aberta'

  let dataEmissao = capitalize(moment(dados.dataEmissao).utcOffset('-0300').format('MMMM YYYY'));
  let dataVencimento = moment(dados.dataVencimento).utcOffset('-0300').format('DD/MM/YYYY')
  let valorFatura = dados.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <View>
      <Text style={styles.textCardFatura}>{dataEmissao}</Text>
      <Text style={[styles.textCardFatura, { fontSize: 32, fontWeight: 'bold'}]}>{valorFatura}</Text>
      <Text style={styles.textCardFatura}>Vencimento: {dataVencimento}</Text>
      <Text style={styles.textCardFatura}>Status: <Text style={{ color: color, fontWeight: 'bold' }}>{situacao}</Text></Text>
    </View>
  )
}


export default function Pagamento({ fatura, fornecimento, simples = true }) {
  const [pdfFatura, setPdfFatura] = useState('');

  const copyToClipboard = async (texto) => {
    await Clipboard.setStringAsync(texto);
  };

  useEffect(() => {
    axios.post('https://pwa-api-nsint.sabesp.com.br/download', {
      "codigoFornecimento": fornecimento,
      "codelineFaturas": [
        fatura.codigoPagamento,
      ],
      "motivoSolicitacao": "1",
      "formaEntrega": "0",
      "isResume": simples,
      "isTotem": false,
      "codigoClienteRL": ""
    }).then(res => {
      axios.post('https://bot-comercial.metasix.solutions/sabesp-64topdf?codigo=' + fatura.codigoPagamento, '"' + res.data.file.file  + '"', {headers: {"Content-Type": "text/plain"}})
      .then(res => {
        setPdfFatura(res.data.link);
        return res.data.link;
      })
    })
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: '#F1F6F9'}]}>
    <View style={styles.pagamentoCard}>
      <CardFatura dados={fatura} />

      <View style={styles.center}>
        <Text style={styles.codigoFatura}>{fatura.codigoDeBarras}</Text>      

        {pdfFatura ? (
          <View style={styles.buttonCardBar}>
            <TouchableOpacity style={styles.buttonCard} onPress={() => copyToClipboard(fatura.codigoDeBarras)}>
              <FontAwesomeIcon icon={ faCopy } size={22} style={styles.buttonCardIcon}/>
              <Text style={styles.buttonCardText}>Copiar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCard} onPress={() => Linking.openURL(pdfFatura)}>
              <FontAwesomeIcon icon={ faDownload } size={22} style={styles.buttonCardIcon}/>
              <Text style={styles.buttonCardText}>Baixar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCard} onPress={() => Linking.openURL(pdfFatura)}>
              <FontAwesomeIcon icon={ faEye } size={22} style={styles.buttonCardIcon}/>
              <Text style={styles.buttonCardText}>Visualizar</Text>
            </TouchableOpacity>
          </View>
        ) : <Progress.Circle size={50} indeterminate={true} color="#00a5e4" style={{ margin: 10 }} />}

        <Image style={{ margin: 5, width: '90%' }} source={require('../../../assets/icons/codigoDeBarrasLongo.png')}></Image>
      </View>

    </View>
      <View style={styles.pagamentoCard}>
        <View style={styles.center}>
          <View style={styles.row}>
            <Image style={{ marginRight: 7, marginTop: 3 }} source={require('../../../assets/icons/codigodebarras.png')}></Image>
            <Text style={styles.loginBold}>Pague pelo aplicativo da sua instituição financeira</Text>
          </View>
          <Text style={[styles.textfatura, {textAlign: 'center'}]}>
          - Escolha a instituição de sua preferência e pague pelo código de barras.
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.itemNumber}>1</Text>
          <Text style={styles.textfaturaBanco}>Clique no ícone "Copiar" código de barras.</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.itemNumber}>2</Text>
          <Text style={styles.textfaturaBanco}>Abra o aplicativo da sua instituição financeira.</Text>
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
  )
}