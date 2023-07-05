import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { Dimensions } from "react-native";
import * as Progress from 'react-native-progress';
import { BarChart } from "react-native-chart-kit";
import axios from "axios";
import moment from "moment";
import 'moment/locale/pt-br';

moment.locale('pt-br');

import styles from "./styles";

import HistoricoPagamento from "../HistoricoPagamento";
import SelecaoFornecimento from "./SelecaoFornecimento";
import Footer from "../Footer";
import Header from "../Header";

export default function Home({ route, navigation }) {
  const dadosCliente = route.params.dadosCliente

  const [tela, setTela] = useState(0);
  const [fornecimentos, setFornecimentos] = useState('');
  const [fornecimento, setFornecimento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [faturas, setFaturas] = useState('');
  const [graphData, setGraphData] = useState('');

  useEffect(() => {
    axios.get('https://pwa-api-nsint.sabesp.com.br/fornecimento/cliente/' + dadosCliente.codigo)
      .then(res => {
        setFornecimentos(res.data);

        if(res.data.length) {
          axios.get('https://pwa-api-nsint.sabesp.com.br/viario/fornecimento/' + res.data[0].codigo + '/endereco')
            .then(resp => {
              setEndereco(resp.data);
            })
         } else {
          setEndereco(0);
          setFaturas(0)
        }
      })
  }, [])

  useEffect(() => {
    if(fornecimentos) {
      let forn = fornecimento ? fornecimento.codigo : fornecimentos[0].codigo

      axios.get('https://pwa-api-nsint.sabesp.com.br/fatura/fornecimento/' + forn)
        .then(res => {
          let faturasOrdenadas = '';

          if(res.data.length) {
            faturasOrdenadas = res.data.sort((a, b) => {
              return (new Date(a.dataEmissao)) > (new Date(b.dataEmissao)) ? -1 : 1;
            })
          } else {
            faturasOrdenadas = res.data
          }
          setFaturas(setShowInfoFaturas(faturasOrdenadas));
          geraGraphData(faturasOrdenadas);
        })
    }
  }, [fornecimentos, fornecimento]);
  
  const geraGraphData = function(faturas) {
    if(!faturas.length) return setGraphData(null)

    let labels = [];
    let data = [];
    let colors = [];

    let length = faturas.length >= 4 ? 4 : faturas.length

    for(let i = 0; i < length; i++) {
      labels.push(moment(faturas[i].dataEmissao).format('MMM'));
      data.push(faturas[i].valor);
      colors.push(faturas[i].situacaoDaFatura == 'EM ABERTO' ? '#red' : '#30ACDC')
    }

    let dados = {
      labels: labels,
      datasets: [
        {
          data: data,
          colors: [
            (opacity = 1) => colors[0], 
            (opacity = 1) => colors[1],
            (opacity = 1) => colors[2],
            (opacity = 1) => colors[3],
          ]
        }
      ]
    }

    setGraphData(dados);
  }

  const setShowInfoFaturas = faturas => {
    const deveriaAparecer = fatura => {
      let aparecer = true;

      if(fatura.situacaoDaFatura === 'CONTA REVISADA' && fatura.estadoSaldoPagamento === "R") aparecer = false;
      if(fatura.situacaoDaFatura === 'ANULADA') aparecer = false

      return aparecer
    }

    const podePagar = fatura => {
      let pagar = true

      if(fatura.situacaoDaFatura === 'SUSPENSA PARA ANÁLISE' && fatura.statusFatura === 'FATURA EMITIDA') pagar = false;
      if(fatura.situacaoDaFatura === 'SUSPENSA PARA ANÁLISE' && fatura.statusFatura === 'CANCELÁVEL') pagar = false;
      if(fatura.situacaoDaFatura === 'EM ATRASO' && fatura.cobrancaJuridica) pagar = false;
      if(fatura.situacaoDaFatura === 'AGUARDANDO CONFIRMAÇÃO DO BANCO' && fatura.pagamentoInformado === "S") pagar = false;
      if(fatura.situacaoDaFatura === 'CONTA REVISADA' && fatura.estadoSaldoPagamento === "R") pagar = false;
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

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor='#ffffff' />
      <Header navigation={navigation} backButton={() => tela === 0 ? navigation.navigate('Faturas') : setTela(0)}/>
      <ScrollView style={{ backgroundColor: '#F1F6F9', height: '76%' }}>
        {tela == 0 ? (
          <View style={styles.container}>
            <Text style={[styles.text, { fontSize: 24, fontWeight: 'bold', marginBottom: 10 }]}>Resumo</Text>
            <View style={styles.borderedContainer}>
              {fornecimentos && endereco ? (
                <TouchableOpacity onPress={() => setTela(1)}>
                  <Text style={styles.textAzul}>Endereço</Text>
                    <View style={styles.row}>
                      <Text style={styles.text}>{endereco ? `${endereco.toponimo} ${endereco.nomeLogradouro}, ${endereco.numeroImovel}, ${endereco.bairro}, ${endereco.nomeMunicipio} - ${endereco.estado}, ${endereco.cep}` : 'Nenhum endereço encontrado'}</Text>
                      <FontAwesomeIcon icon={ faChevronRight } size={14} style={{ color: '#00a5e4', margin: 5 }}/>
                    </View>
                  <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginTop: 5, marginBottom: 5 }}/>
  
                  <Text style={styles.textAzul}>Fornecimento</Text>
                  <Text style={styles.text}>{fornecimento ? fornecimento.codigo : fornecimentos[0].codigo}</Text>
                </TouchableOpacity>
              ) : null}
            </View>

            {faturas !== 0 ? (
              <>
                <View style={styles.borderedContainer}>
                  {faturas.length ? (
                    <>
                    <Text style={styles.text}>Fatura Atual:</Text>
                    <Text style={[styles.text, { fontSize: 32, fontWeight: 'bold'}]}>{faturas.length ? `R$ ${faturas[0].valor}`.replace('.', ',') : ''}</Text>
                    <Text style={styles.text}>Próximo vencimento: {faturas.length ? moment(faturas[0].dataVencimento).utcOffset('-0300').format('DD/MM/YYYY') : ''}</Text>

                    <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginTop: 5, marginBottom: 5 }}/>

                    {graphData ? (
                      <BarChart
                        style={{ marginLeft: -35 }}
                        data={graphData}
                        width={(Dimensions.get("window").width) * 0.8}
                        height={220}
                        withHorizontalLabels={false}
                        withInnerLines={false}
                        showValuesOnTopOfBars={true}
                        fromZero={true}
                        chartConfig={{
                          backgroundGradientFrom: '#FFF',
                          backgroundGradientFromOpacity: 0,
                          backgroundGradientTo: '#FFF',
                          backgroundGradientToOpacity: 0.5,
                          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                          propsForLabels: {
                            fontWeight: 'bold',
                            fontSize: 14,
                          },
                          barRadius: 5,
                        }}
                        withCustomBarColorFromData={true}
                        flatColor={true}
                        showBarTops={false}

                      />
                    ) : null}
                  </>
                  ) : null}
                  <TouchableOpacity style={styles.listItem} onPress={() => setTela(2)}>
                    <Image source={require('../../../assets/icons/cash-multiple.png')} style={{ margin: 5 }}/>
                    <Text style={[styles.text, {marginTop: 7}]}>Histórico de faturas</Text>
                    <View style={styles.rightMenu}>
                      <FontAwesomeIcon icon={ faChevronRight } size={14} style={{ color: '#00a5e4', marginTop: 20 }}/>
                    </View>
                  </TouchableOpacity>
                  {/* <TouchableOpacity style={styles.listItem} onPress={() => setTela(3)}>
                    <Image source={require('../../../assets/icons/chart-bell.png')} style={{ margin: 5 }}/>
                    <Text style={[styles.text, {marginTop: 7}]}>Consumo e pagamentos</Text>
                    <View style={styles.rightMenu}>
                      <FontAwesomeIcon icon={ faChevronRight } size={14} style={{ color: '#00a5e4', marginTop: 20 }}/>
                    </View>
                  </TouchableOpacity> */}
                </View>
              </>
            ) : (
              <View style={styles.borderedContainer}>
                <Text style={styles.text}>Você não possui fornecimentos em seu nome.</Text>
                <Text style={[styles.text, {fontWeight: 'bold'}]}>Para acessar alguns dos serviços do Sabesp Mobile, é necessário que um fornecimento esteja associado ao seu CPF.</Text>
                <Text style={styles.text}>Entre em contato pelo telefone <Text style={[styles.text, {fontWeight: 'bold'}]}>0800 055 0195</Text> e solicite um dos serviços abaixo para prosseguir</Text>
              </View>
            )}

          </View>
        ) : null}

        {tela == 1 && fornecimentos ? (<SelecaoFornecimento 
          fornecimentos={fornecimentos} 
          setFornecimento={setFornecimento} 
          setEndereco={setEndereco}
          setTela={setTela}
        />) : null}

        {tela == 2 && fornecimentos && faturas ? (<HistoricoPagamento 
          navigation={navigation} 
          faturas={faturas} 
          fornecimento={fornecimento ? fornecimento.codigo : fornecimentos[0].codigo} 
        />) : null}
        
        {tela == 3 ? (<></>) : null}
        
      </ScrollView>
      <Footer/>
    </SafeAreaView>
  )
}
