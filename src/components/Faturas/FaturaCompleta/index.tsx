import React, { useState } from "react";
import { View, Text, CheckBox, Linking, TouchableOpacity, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faCopy } from '@fortawesome/free-regular-svg-icons/faCopy'

import Login from "../../Login";

import styles from "./styles";

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
              style={styles.tableData}
              textStyle={{ alignSelf: 'flex-start', marginLeft: 10 }}
              widthArr={[150]}
              heightArr={[70, 70, 70, 70]}
            />
          </TableWrapper>
        </Table>
        <View style={styles.buttonBar}>
          <TouchableOpacity style={styles.button}>
            <FontAwesomeIcon icon={ faCopy } size={18} style={styles.buttonIcon}/>
            <Text style={styles.buttonText}>Copiar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <FontAwesomeIcon icon={ faMagnifyingGlass } size={18} style={styles.buttonIcon}/>
            <Text style={styles.buttonText}>Detalhes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <FontAwesomeIcon icon={ faDownload } size={18} style={styles.buttonIcon}/>
            <Text style={styles.buttonText}>Baixar</Text>
          </TouchableOpacity>
        </View>
    </>
  )
}

export default function FaturaCompleta({ navigation }) {
  const [logado, setLogado] = useState(false);
  const [tableData, setTableData] = useState([
    [['05/01/2022'], ['R$ 46,25'], ['25/01/2022'], ['Vencida']],
    [['05/02/2022'], ['R$ 49,86'], ['25/02/2022'], ['Aberto']],
  ])

  return (
    <>
      {logado ? (<>
        <ScrollView>
          <View style={styles.container}>
            <TextInput 
              mode="outlined"
              style={styles.input} 
              theme={{ colors: { primary: '#00a5e4' }}}
              placeholder="Digite o fornecimento" 
              value={''} 
              right={<TextInput.Icon name={'magnify'} onPress={() => null}/>}
            />
            <FaturaCard dados={tableData[0]} />
            <FaturaCard dados={tableData[1]} />
          </View>
        </ScrollView>
      </>) : (
        <Login navigation={ navigation } setLogado={ setLogado }/>
      )}
    </>
  )
};