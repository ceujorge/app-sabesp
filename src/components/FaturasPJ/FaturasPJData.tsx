import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { TextInput } from "react-native-paper";
import { Picker } from '@react-native-picker/picker';
import Clipboard from 'expo-clipboard';
import { Table, TableWrapper, Rows, Col } from 'react-native-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faCopy } from '@fortawesome/free-regular-svg-icons/faCopy'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons/faAnglesRight'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons/faAnglesLeft'

import Header from "../Header";
import styles from "./styles";
import mocks from "../../mocks/mocks";
import Breadcrumb from "../Breadcrumb";

const breadcrumb = [
  {label: 'Login', link: 'Login'}, 
  {label: 'Início', link: ''}, 
  {label: 'Faturas e pagamentos', link: '', active: true},
]

function FaturaCard({ dados, navigation }) {
  const titles = [
    'CNPJ',
    'Fornecimento',
    'Data de emissão',
    'Valor da fatura',
    'Data de vencimento',
    'Situação'
  ]

  let cardsDataParsed = [
    [dados.cnpj],
    [dados.fornecimento],  
    [dados.dataEmissao], 
    [dados.valorFatura], 
    [dados.dataVencimento], 
    [<>
      <Text style={dados.situacao == 'Paga' ? styles.situacaoPaga : styles.situacaoAberta }>{dados.situacao}</Text>
    </>
    ], 
  ]

  return (
    <>
      <Table style={styles.table}>
        <TableWrapper style={{ flexDirection: 'row' }}>
          <Col 
            data={titles} 
            style={styles.tableCol} 
            textStyle={{ color: '#fff', alignSelf: 'flex-end', marginRight: 20, fontWeight: 'bold' }}
            widthArr={[100]}
            heightArr={[70, 70, 70, 70, 70, 70]}
          />
          <Rows 
            data={cardsDataParsed} 
            style={styles.cardsData}
            textStyle={{ alignSelf: 'flex-start', marginLeft: 20, marginRight: 20 }}
            widthArr={[170]}
            heightArr={[70, 70, 70, 70, 70, 70]}
          />
        </TableWrapper>
      </Table>
      <View style={styles.buttonCardBar}>
        <TouchableOpacity style={styles.buttonCard}>
          <FontAwesomeIcon icon={ faCopy } size={18} style={styles.buttonCardIcon}/>
          <Text style={styles.buttonCardText}>Copiar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCard}>
          <FontAwesomeIcon icon={ faMagnifyingGlass } size={18} style={styles.buttonCardIcon}/>
          <Text style={styles.buttonCardText}>Detalhes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCard} onPress={() => Clipboard.setString(info.codigoDeBarras)}>
          <FontAwesomeIcon icon={ faDownload } size={18} style={styles.buttonCardIcon}/>
          <Text style={styles.buttonCardText}>Baixar</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default function FaturasPJFornecimento({ navigation }) {
  const [situacao, setSituacao] = useState('');
  const [itensPorPagina, setItensPorPagina] = useState(3);
  const [page, setPage] = useState(1);
  const [fornecimento, setFornecimento] = useState('')
  const [cardsData, setCardsData] = useState([])
  const [cardsDataFiltered, setCardsDataFiltered] = useState([]);
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = function() {
    let dados = mocks.faturasPJ

    setCardsData(dados);
    setCardsDataFiltered(dados);
  }

  const setPagina = function(pagina) {
    let lastPage = Math.ceil(cardsDataFiltered.length / itensPorPagina)
    if(pagina > 0 && pagina <= lastPage) setPage(pagina)
  }

  const setarItensPorPagina = function(itens) {
    setItensPorPagina(itens);
    setPage(1);
  }

  const cardsArray = function() {
    let cardsArray = [];
    let startIndex = (page - 1) * itensPorPagina

    for(let i = startIndex; i < (startIndex + itensPorPagina); i++) {
      if(cardsDataFiltered[i]) {
        cardsArray.push(cardsDataFiltered[i]);
      }
    }

    return cardsArray;
  }

  const filter = function(forn = fornecimento) {
    setFornecimento(forn);
    setPage(1);

    let filteredCardsData = cardsData.filter(item => {
      if((!forn || item.fornecimento.includes(forn)) && true) return true;
    })

    setCardsDataFiltered(filteredCardsData);
  }

  const filterSituacao = function(sit = situacao) {
    setSituacao(sit);
    setPage(1);

    let filteredCardsData = cardsData.filter(item => {
      if((!sit || item.situacao.includes(sit)) && true) return true;
    })

    setCardsDataFiltered(filteredCardsData);
  }

  return (
    <SafeAreaView>
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Breadcrumb config={breadcrumb} navigation={navigation} backButton={true}/>
        <Text style={styles.title}>Bem vindo à Sabesp | Mobile</Text>
        <Text style={styles.title}>Faturas e pagamentos</Text>
        <View style={styles.dateContainer}>
          <View style={{ width: '30%' }}>
            <Text style={{fontSize: 18}}>Período:</Text>
          </View>
          <View style={{ width: '70%' }}>
            <TextInput 
              mode="outlined"
              label='De:'
              style={styles.dateInput} 
              theme={{ colors: { primary: '#00a5e4' }}}
              value={dataInicial} 
              onChangeText={value => { setDataInicial(value) }} 
              right={<TextInput.Icon style={styles.dateIcon} name={'calendar-blank'} onPress={() => null}/>}
            />
            <TextInput 
              mode="outlined"
              label='Até:'
              style={styles.dateInput} 
              theme={{ colors: { primary: '#00a5e4' }}}
              value={dataFinal} 
              onChangeText={value => { setDataFinal(value) }} 
              right={<TextInput.Icon style={styles.dateIcon} name={'calendar-blank'} onPress={() => null}/>}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{fontSize: 18}}>Situação</Text>
          <Picker 
            selectedValue={situacao}
            onValueChange={val => filterSituacao(val)}
            style={styles.select}>
            <Picker.Item label="Todos" value="" />
            <Picker.Item label="Em Aberto" value="Em Aberto" />
            <Picker.Item label="Pendentes" value="Pendente" />
            <Picker.Item label="Pagas" value="Paga" />
            <Picker.Item label="Parcialmente pagas" value="Parcialmente paga" />
            <Picker.Item label="Acordo de parcelamentos" value="Acordo de parcelamento" />
          </Picker>
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Itens por página:</Text>
          <View style={styles.paginationButtonBar}>
            <TouchableOpacity 
              style={itensPorPagina === 3 ? styles.paginationButton33Selected :  styles.paginationButton33}
              onPress={() => setarItensPorPagina(3)}>
              <Text>{'03'}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={itensPorPagina === 5 ? styles.paginationButton33Selected :  styles.paginationButton33}
              onPress={() => setarItensPorPagina(5)}>
              <Text>{'05'}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={itensPorPagina === 10 ? styles.paginationButton33Selected :  styles.paginationButton33}
              onPress={() => setarItensPorPagina(10)}>
              <Text>{'10'}</Text>
            </TouchableOpacity>
          </View>
          <TextInput 
            mode="outlined"
            style={styles.input} 
            theme={{ colors: { primary: '#00a5e4' }}}
            placeholder="Digite o fornecimento" 
            value={fornecimento} 
            onChangeText={text => setFornecimento(text)}
            right={<TextInput.Icon name={'magnify'} onPress={() => filter(fornecimento)}/>}
          />
          {cardsArray().map((item, index) => (<FaturaCard dados={item} key={index} navigation={navigation}/>))}

          <View style={styles.paginationButtonBar}>
            <TouchableOpacity 
              style={styles.paginationButton20}
              onPress={() => setPage(1)}>
              <FontAwesomeIcon icon={ faAnglesLeft } size={16}/>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.paginationButton20}
              onPress={() => setPagina(page - 1)}>
              <FontAwesomeIcon icon={ faAngleLeft } size={16}/>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.paginationButton20}
              onPress={() => null }>
              <Text>{String(page).padStart(2, '0')}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.paginationButton20}
              onPress={() => setPagina(page + 1)}>
              <FontAwesomeIcon icon={ faAngleRight } size={16}/>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.paginationButton20}
              onPress={() => setPage(Math.ceil(cardsDataFiltered.length / itensPorPagina))}>
              <FontAwesomeIcon icon={ faAnglesRight } size={16}/>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};