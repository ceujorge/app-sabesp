import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Linking, StatusBar, ScrollView, SafeAreaView, Modal } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck'
import axios from "axios";
import moment from "moment";
import 'moment/locale/pt-br';

moment.locale('pt-br');

import styles from "../styles";
import Pagamento from "../../Pagamento";
import Header from "../../Header";

const capitalize = (string) => {
  let str = string;

  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
  }
  str = words.join(' ');

  return str
}

function CardFatura({ dados, setPagamento, setFatura }) {
  let color = 'orange';
  if(dados.situacaoDaFatura == 'PAGA') color = 'green';
  if(dados.situacaoDaFatura == 'EM ATRASO') color = 'red';

  let situacao = capitalize(dados.situacaoDaFatura);
  if(situacao == 'Em Atraso') situacao = 'Vencida'
  if(situacao == 'Em Aberto') situacao = 'Aberta'

  let dataEmissao = capitalize(moment(dados.dataEmissao).utcOffset('-0300').format('MMMM YYYY'));
  let dataVencimento = moment(dados.dataVencimento).utcOffset('-0300').format('DD/MM/YYYY')
  let valorFatura = dados.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const pagar = () => {
    setPagamento(true); 
    setFatura(dados);
  }

  return (
    <>
    {dados.mostrar ? (
      <TouchableOpacity  style={styles.buttonFatura} onPress={() => dados.pagar ? pagar() : null}>
        <View style={styles.row}>
          <Text style={styles.textCardFatura}>{dataEmissao}</Text>
          <View style={styles.rightMenu}>
          <Text style={[styles.textCardFatura, { color: color, fontWeight: 'bold' }]}>{situacao}</Text>
          </View>
        </View>
        <Text style={[styles.textCardFatura, { fontSize: 32, fontWeight: 'bold'}]}>{valorFatura}</Text>
        <View style={styles.row}>
          <Text style={styles.textCardFatura}>Vencimento: {dataVencimento}</Text>
          {dados.pagar ? (
            <View style={styles.rightMenu}>
              <FontAwesomeIcon icon={ faChevronRight } size={18} style={{ color: '#00a5e4', marginTop: -5 }}/>
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
      ) : null }
    </>
  ) 
}

export default function FaturaSimplificada({ route, navigation }) {
  const fornecimento = route.params.fornecimento;

  const [faturas, setFaturas] = useState(route.params.dadosFornecimento);
  const [enderecoFornecimento, setEnderecoFornecimento] = useState('');
  const [dadosCliente, setDadosCliente] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [pagamento, setPagamento] = useState(null)
  const [fatura, setFatura] = useState('');

  useEffect(() => {
    axios.get('https://pwa-api-nsint.sabesp.com.br/viario/fornecimento/' + fornecimento + '/endereco')
      .then(res => {
        setEnderecoFornecimento(res.data)
      })

    axios.get('https://pwa-api-nsint.sabesp.com.br/cliente/fornecimento/' + fornecimento)
      .then(res => {
        setDadosCliente(res.data)
      })

    setFaturas(setShowInfoFaturas(faturas));
  }, [])

  const calculaDebitos = () => {
    let emAberto:any = 0;
    let emAtraso:any = 0;
    faturas.forEach(fatura => {
      fatura.situacaoDaFatura == 'EM ATRASO' ? emAtraso+= fatura.valor : null;
      fatura.situacaoDaFatura == 'EM ABERTO' ? emAberto+= fatura.valor : null;
    });
    let soma = (emAberto + emAtraso).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    emAberto = emAberto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    emAtraso = emAtraso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    return [emAberto, emAtraso, soma]
  }

  const setShowInfoFaturas = faturas => {
    const deveriaAparecer = fatura => {
      let aparecer = true;

      if(fatura.situacaoDaFatura === 'CONTA REVISADA' && fatura.estadoSaldoPagamento === "R") aparecer = false;
      if(fatura.situacaoDaFatura === 'ANULADA') aparecer = false
      if(fatura.situacaoDaFatura === 'EM ATRASO' && fatura.cobrancaJuridica) aparecer = false;
      if(fatura.situacaoDaFatura === 'PAGA') aparecer = false
      if(fatura.situacaoDaFatura === 'EM ACORDO DE PARCELAMENTO') aparecer = false

      return aparecer
    }

    const podePagar = fatura => {
      let pagar = true

      if(fatura.situacaoDaFatura === 'SUSPENSA PARA ANÁLISE' && fatura.statusFatura === 'FATURA EMITIDA') pagar = false;
      if(fatura.situacaoDaFatura === 'SUSPENSA PARA ANÁLISE' && fatura.statusFatura === 'CANCELÁVEL') pagar = false;
      if(fatura.situacaoDaFatura === 'EM ATRASO' && fatura.cobrancaJuridica) pagar = false;
      if(fatura.situacaoDaFatura === 'AGUARDANDO CONFIRMAÇÃO DO BANCO' && fatura.pagamentoInformado === "S") pagar = false;
      if(fatura.situacaoDaFatura === 'CONTA REVISADA' && fatura.estadoSaldoPagamento === "R") pagar = false;
      if(fatura.situacaoDaFatura === 'PAGA') pagar = false
      if(fatura.situacaoDaFatura === 'EM ACORDO DE PARCELAMENTO') pagar = false
      if(fatura.situacaoDaFatura === 'ANULADA') pagar = false;

      return pagar
    }

    const faturasComInfo = faturas.map(fatura => 
      ({... fatura,
        mostrar: deveriaAparecer(fatura),
        pagar: podePagar(fatura)
      })
    )

    return faturasComInfo;
  }

  return(
    <SafeAreaView style={{flex: 1}}>    
      <StatusBar barStyle="dark-content" backgroundColor='#ffffff' />
      <Header navigation={navigation} backButton={() => pagamento != null ? setPagamento(null) : navigation.navigate('Faturas')}/>
      <ScrollView style={{ backgroundColor: '#F1F6F9' }}>
        {enderecoFornecimento && dadosCliente && pagamento === null ? (
          <>
            <View style={styles.container}>
              <Text style={[styles.textfatura, { fontSize: 24, fontWeight: 'bold' }]}>{dadosCliente.nome + ' ' + dadosCliente.sobrenome}</Text>
              <Text style={styles.textfatura}>{capitalize(`${enderecoFornecimento.toponimo} ${enderecoFornecimento.nomeLogradouro}, ${enderecoFornecimento.bairro}`)}</Text>
              <Text style={styles.textfatura}>{capitalize(enderecoFornecimento.nomeMunicipio) + ' - ' + enderecoFornecimento.estado}</Text>          
              <Text style={[styles.textfatura, { marginTop: 15, marginBottom: 0 }]}>Débito Total: </Text>
              <Text style={[styles.textfatura, { fontSize: 32, fontWeight: 'bold' }]}>{calculaDebitos()[2] != '0' ? calculaDebitos()[2] : '-' }</Text>
              <Text style={styles.textfatura}>Faturas em aberto: <Text style={{ fontWeight: 'bold' }}>{calculaDebitos()[0] != '0' ? calculaDebitos()[0] : '-' }</Text></Text>
              <Text style={styles.textfatura}>Faturas vencidas: <Text style={{ fontWeight: 'bold', color: 'red'}}>{calculaDebitos()[1] != '0' ? calculaDebitos()[1] : '-' }</Text></Text>
            </View>

            {faturas.map((item, index) => (
              <CardFatura 
                dados={item} 
                setPagamento={setPagamento}
                setFatura={setFatura}
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
          <Pagamento fatura={fatura} fornecimento={fornecimento}/>
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