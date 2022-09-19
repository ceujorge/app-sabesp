import React, { useState, useEffect } from "react";
import { View, Text, Linking, TouchableOpacity, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { TextInput } from "react-native-paper";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faCopy } from '@fortawesome/free-regular-svg-icons/faCopy'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons/faAnglesRight'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons/faAnglesLeft'

import Login from "../../Login";

import styles from "./styles";
import mocks from "../../../mocks/mocks";

function FaturaCard({ dados }) {
  const titles = ['Data de\nEmissão','Valor da fatura','Data de\nvencimento','Situação']

  return (
    <>
      <Table style={styles.table}>
        <TableWrapper style={{ flexDirection: 'row' }}>
          <Col 
            data={titles} 
            style={styles.tableCol} 
            textStyle={{ color: '#fff', alignSelf: 'flex-end', marginRight: 10, fontWeight: 'bold' }}
            widthArr={[100]}
            heightArr={[70, 70, 70, 70]}
          />
          <Rows 
            data={dados} 
            style={styles.cardsData}
            textStyle={{ alignSelf: 'flex-start', marginLeft: 10 }}
            widthArr={[150]}
            heightArr={[70, 70, 70, 70]}
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
        <TouchableOpacity style={styles.buttonCard}>
          <FontAwesomeIcon icon={ faDownload } size={18} style={styles.buttonCardIcon}/>
          <Text style={styles.buttonCardText}>Baixar</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default function FaturaCompleta({ navigation }) {
  const [logado, setLogado] = useState(false);
  const [situacao, setSituacao] = useState('');
  const [itensPorPagina, setItensPorPagina] = useState(3);
  const [page, setPage] = useState(1);
  const [cardsData, setCardsData] = useState([])
  const [faturasTotal, setFaturasTotal] = useState(0);

  useEffect(() => {
    let cardsDataParsed = []

    mocks.faturaSimplificada.map(i => {
      cardsDataParsed.push([
        [i.dataEmissao.split('T')[0].split('-').reverse().join('/')], 
        [("R$ " + i.valor).replace('.', ',')], 
        [i.dataVencimento.split('T')[0].split('-').reverse().join('/')], 
        [i.statusFatura]
      ])
    })

    setCardsData(cardsDataParsed)
  }, [])

  const setPagina = function(pagina) {
    let lastPage = Math.ceil(cardsData.length / itensPorPagina)
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
      if(cardsData[i]) {
        cardsArray.push(cardsData[i]);
      }
    }

    return cardsArray;
  }

  return (
    <>
      {logado ? (<>
        <ScrollView>
          <View style={styles.inputContainer}>
            <Text>Situação</Text>
            <Picker 
              selectedValue={situacao}
              onValueChange={val => setSituacao(val)}
              style={styles.select}>
              <Picker.Item label="Todos" value="" />
              <Picker.Item label="Em Aberto" value="Em Aberto" />
              <Picker.Item label="Pendentes" value="Pendentes" />
              <Picker.Item label="Pagas" value="Pagas" />
              <Picker.Item label="Parcialmente pagas" value="Parcialmente pagas" />
              <Picker.Item label="Acordo de parcelamentos" value="Acordo de parcelamentos" />
            </Picker>
          </View>

          <View style={styles.container}>
            <Text style={styles.label}>Itens por página:</Text>
            <View style={styles.paginationButtonBar}>
              <TouchableOpacity 
                style={itensPorPagina === 3 ? styles.paginationButton33Selected :  styles.paginationButton33}
                onPress={() => setarItensPorPagina(3)}>
                {'03'}
              </TouchableOpacity>
              <TouchableOpacity 
                style={itensPorPagina === 5 ? styles.paginationButton33Selected :  styles.paginationButton33}
                onPress={() => setarItensPorPagina(5)}>
                {'05'}
              </TouchableOpacity>
              <TouchableOpacity 
                style={itensPorPagina === 10 ? styles.paginationButton33Selected :  styles.paginationButton33}
                onPress={() => setarItensPorPagina(10)}>
                {'10'}
              </TouchableOpacity>
            </View>
            <TextInput 
              mode="outlined"
              style={styles.input} 
              theme={{ colors: { primary: '#00a5e4' }}}
              placeholder="Digite o fornecimento" 
              value={''} 
              right={<TextInput.Icon name={'magnify'} onPress={() => null}/>}
            />
            {cardsArray().map(item => (<FaturaCard dados={item}/>))}

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
                {String(page).padStart(2, '0')}
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.paginationButton20}
                onPress={() => setPagina(page + 1)}>
                <FontAwesomeIcon icon={ faAngleRight } size={16}/>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.paginationButton20}
                onPress={() => setPage(Math.ceil(cardsData.length / itensPorPagina))}>
                <FontAwesomeIcon icon={ faAnglesRight } size={16}/>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </>) : (
        <Login navigation={ navigation } setLogado={ setLogado }/>
      )}
    </>
  )
};