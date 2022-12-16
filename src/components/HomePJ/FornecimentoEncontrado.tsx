import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, Dimensions } from "react-native";
import { Table, TableWrapper, Rows, Col } from 'react-native-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
import { LineChart } from "react-native-chart-kit";

import styles from "./styles";

import Header from "../Header";
import Breadcrumb from "../Breadcrumb";

const breadcrumb = [
  {label: 'Acesso', link: 'HomePJ'}, 
  {label: 'Raiz CNPJ', link: ''},
  {label: 'Início', link: '', active: true}, 
]

export default function FornecimentoEncontrado({ navigation }) {
  const tableTitles = ['Nº do Protocolo','Data da\nSolicitação','Descrição','Solicitado por', 'Status']
  const tableData = [
    [`221034518`], 
    [`28/12/2022`], 
    ['TRANSFERÊNCIA DE\nTITULARIDADE'], 
    ['LUCIANE ALMEIDA'],
    [<Text style={{fontWeight: 'bold', color: 'red', marginLeft: 10}}>PENDENTE</Text>]
  ]
  const graphValues = [
    //estado, valor, label de metros cubicos e ponto no gráfico
    ['Paga', 'R$ 1045,23','58m³', 11], 
    ['Aberta', 'R$ 1363,54', '63m³', 20],
    ['Aberta', '-', 'm³', 5],
  ]

  const renderDot = ({x, y, index, indexData}) => {
    return (
      <View style={[styles.centerDot, { top: y - 61, left: x - 25 }]}>
        <Text style={{ fontWeight: 'bold' }}>{graphValues[index][0]}</Text>
        <Text>{graphValues[index][1]}</Text>
        <Text style={{ fontSize: 12 }}>{graphValues[index][2]}</Text>
      </View>
    )
  }

  return(
    <SafeAreaView>
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Breadcrumb config={breadcrumb} navigation={navigation} backButton={true}/>
        <View style={styles.container}>
          <Text style={styles.textHeaderPJ}>CNPJ: <Text style={{fontWeight: 'normal'}}>09.433.094/0001-00</Text></Text>
          <Text style={styles.textHeaderPJ}>Fornecimento: <Text style={{fontWeight: 'normal'}}>0073027707</Text></Text>
          
          <Image style={styles.avatarCenter} source={require('../../../assets/avatar.png')} />
          <Text style={styles.textHeaderPJ}>SILVIA MARIA ROCHA</Text>
          <Text style={{fontSize: 16}}>ENGINEERING DO BRASIL</Text>
          <Text style={{fontSize: 14}}>REPRESENTANTE LEGAL</Text>

          <TouchableOpacity style={styles.buttonOutline} onPress={() => null}>
            <Text style={styles.textButtonOutline}>GESTÃO DE USUÁRIO</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonOutline} onPress={() => null}>
            <Text style={styles.textButtonOutline}>ADICIONAR USUÁRIO</Text>
          </TouchableOpacity>

          <View style={styles.cardRow}>
            <Text style={styles.buttonSideText}>Solicitações</Text>
            <TouchableOpacity style={styles.buttonSubmitHalf} onPress={() => null}>
              <Text style={styles.textButtonSubmitHalf}>{'DETALHAMENTO DE\nSOLICITAÇÕES'}</Text>
            </TouchableOpacity>
          </View>

          <Table style={styles.table}>
            <TableWrapper style={{ flexDirection: 'row' }}>
              <Col 
                data={tableTitles} 
                style={styles.tableCol} 
                textStyle={{ alignSelf: 'flex-end', textAlign: 'right', marginRight: 10, fontWeight: 'bold', color: '#fff' }}
                widthArr={[80]}
                heightArr={[60, 60, 60, 60, 60]}
              />
              <Rows 
                data={tableData} 
                style={styles.cardsData}
                textStyle={{ alignSelf: 'flex-start', marginLeft: 10 }}
                widthArr={[170]}
                heightArr={[60, 60, 60, 60, 60]}
              />
            </TableWrapper>
          </Table>

          <Text style={styles.title}>Fatura Atual</Text>
          <Text style={styles.faturaText}>Dez/2022</Text>
          <Text style={styles.largeText}>R$ 1362,64</Text>
          <Text style={styles.faturaText}>Consumo 63m³</Text>
          <Text style={styles.faturaText}>Vencimento 25/01/2023</Text>
          <Text style={styles.faturaText}>Titular Engineering do Brasil</Text>
          <Text style={[styles.defaultText, {fontWeight: 'bold'}]}>Em aberto</Text>

          <View style={styles.cardRow}>
            <TouchableOpacity style={styles.buttonSubmitHalf} onPress={() => null}>
              <Text style={styles.textButtonSubmit}>Pagar conta</Text>
            </TouchableOpacity>
            <View style={styles.downloadIconContainer}>
              <FontAwesomeIcon icon={ faDownload } size={22} style={styles.downloadIcon}/>
            </View>
          </View>

          <View style={styles.cardRow}>
            <Text style={styles.buttonSideText}>{'Histórico de\nconsumo'}</Text>
            <TouchableOpacity style={styles.buttonSubmitHalf} onPress={() => null}>
              <Text style={styles.textButtonSubmitHalf}>{'VER HISTÓRICO\nCOMPLETO'}</Text>
            </TouchableOpacity>
          </View>

          <LineChart
            data={{
              labels: ["coluna 1", "coluna 2", "coluna 3"],
              datasets: [
                {
                  data: graphValues.map(valor => valor[3]), // dataset
                  color: (opacity = 1) => `rgba(30, 54, 80, ${opacity})`,
                },
                {
                  data: [50], // max
                  withDots: false, 
                },
              ]
            }}
            width={Dimensions.get("window").width * 1.2}
            withVerticalLines={false}
            withHorizontalLines={false}
            withHorizontalLabels={false}
            withShadow={false}
            height={100}
            chartConfig={{
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              color: (opacity = 1) => `rgba(30, 54, 80, ${opacity})`,
            }}
            fromZero={true}
            getDotColor={(dataPoint, dataPointIndex) => {
              if (dataPointIndex === 2) {
                return 'rgba(211, 211, 211, 1)';
              }
                return 'rgba(30, 54, 80, 1)';
            }}
            renderDotContent={renderDot}
            style={{ marginLeft: 50 }}
            bezier
          />

          <View style={styles.cardRow}>
            <View style={styles.oneFourth}>
              <Text style={styles.faturaText}>Emissão</Text>
              <Text style={styles.faturaText}>05/11/2022</Text>
            </View>
            <View style={{width: '50%'}}>
              <Text style={styles.faturaText}>Emissão</Text>
              <Text style={styles.faturaText}>05/12/2022</Text>
            </View>
            <View style={styles.oneFourth}>
              <Text style={styles.faturaText}>Emissão</Text>
              <Text style={styles.faturaText}>05/01/2023</Text>
            </View>
          </View>
        </View>

        <View style={styles.cardRow}>
          <TouchableOpacity style={styles.servicoCard} onPress={() => navigation.navigate('FaturasPJData')}>
            <Image style={styles.servicoIcon2} source={require('../../../assets/icons/codigodebarras.png')} />
            <Text style={styles.faturaText}>{'Pagamentos e\nFaturas'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.servicoCard}>
            <Image style={styles.servicoIcon} source={require('../../../assets/icons/docsmoney.png')} />
            <Text style={styles.faturaText}>{'Consulte seus\nDébitos'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardRow}>
          <TouchableOpacity style={styles.servicoCard}>
            <Image style={styles.servicoIcon} source={require('../../../assets/icons/declaracaodedebitos.png')} />
            <Text style={styles.faturaText}>{'Declaração de\nDébitos'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.servicoCard}>
            <Image style={styles.servicoIcon3} source={require('../../../assets/icons/relogio.png')} />
            <Text style={styles.faturaText}>{'Atualização\nCadastral'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardRow}>
          <TouchableOpacity style={styles.servicoCard}>
            <Image style={styles.servicoIcon2} source={require('../../../assets/icons/email.png')} />
            <Text style={styles.faturaText}>{'Receber fatura\npor e-mail'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.servicoCard}>
            <Image style={styles.servicoIcon2} source={require('../../../assets/icons/religacaoagua.png')} />
            <Text style={styles.faturaText}>{'Religação de\n água'}</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}