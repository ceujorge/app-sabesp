import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView} from "react-native";
import Collapsible from 'react-native-collapsible';
import * as Animatable from 'react-native-animatable';
import { Table, TableWrapper, Rows, Col } from 'react-native-table-component';
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'

import Header from "../Header";
import Breadcrumb from "../Breadcrumb"
import Pagamento from "../Pagamento";

import styles from "./styles";

const breadcrumb = [
  {label: 'Home', link: 'Home'}, 
  {label: 'Parcelamento', link: '', active: true},
]

function CardAcordo({ parcela }) {
  const [pagamento, setPagamento] = useState(false)
  const titles = ['Nº da parcela','Data de\nVencimento','Valor da\nfatura','Situação']

  let data = [
    [`0${parcela}`], 
    [`15/${String(8 + parcela).padStart(2, 0)}/2022`], 
    ['50,37'], 
    ['Em aberto'],
  ]

  let mockFatura = {
    statusFatura: 'Em aberto',
    dataVencimento: `2022-${8 + parcela}-15T00:00:00-03:00`,
    valor: 'R$ 50,37',
    codigoDeBarras: '82640000001 2 08830097014 7 96018702211 1 08745781213 6',
  }

  return(
    <Table style={styles.table}>
      <TableWrapper style={{ flexDirection: 'row' }}>
        <Col 
          data={titles} 
          style={styles.tableCol} 
          textStyle={{ alignSelf: 'flex-end', textAlign: 'right', marginRight: 10, fontWeight: 'bold' }}
          widthArr={[50]}
          heightArr={[50, 50, 50, 50]}
        />
        <Rows 
          data={data} 
          style={styles.cardsData}
          textStyle={{ alignSelf: 'flex-start', marginLeft: 10 }}
          widthArr={[200]}
          heightArr={[50, 50, 50, 50]}
        />
      </TableWrapper>

      {pagamento ? 
        <Pagamento fatura={mockFatura} dropdown={true}/> 
      : 
        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.buttonSubmit} onPress={() => setPagamento(true)}>
            <Text style={styles.textButtonSubmit}>Selecionar</Text>
          </TouchableOpacity>
        </View>
      }


    </Table>
  )
}

export default function Acordos({ navigation }) {
  const [collapsed, setCollapsed]: any = useState(false);
  const [collapsed2, setCollapsed2]: any = useState(true);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  const toggleExpanded2 = () => {
    setCollapsed2(!collapsed2);
  };

  return(
    <SafeAreaView>
      <Header/>
      <Breadcrumb config={ breadcrumb } navigation={ navigation }/>
      <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
        <Text style={[styles.parcelaTextoBold, { fontSize: 18 }]}>Meus acordos de parcelamento</Text>

        <TouchableOpacity style={styles.collapsibleHeader} onPress={toggleExpanded}>
          <Text style={styles.collapsibleHeaderText}>
            <Image style={{ height: 30, width: 30, margin: 10  }} source={require('../../../assets/icons/parcelamento.png')} />
            ⠀Parcelamento
          </Text>
          <FontAwesomeIcon icon={ collapsed ? faPlus : faMinus } size={22} style={styles.caret}/>
        </TouchableOpacity>
        <Collapsible style={styles.collapsible} collapsed={collapsed}>
          <Animatable.View animation={collapsed ? undefined : 'fadeInDown'} duration={300} useNativeDriver>
            <View style={{ padding: 12 }}>
              <Text style={styles.parcelaTextoLeft}>
                Caso seu banco não esteja na relação de conveniados, utilize o código de barras para pagamento no site do seu banco
              </Text>
              <View style={styles.row}>
                <Text style={styles.parcelaTextoLeft}>Valor total das faturas</Text>
                <Text style={styles.parcelaTextoRight}>R$ 146,85</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.parcelaTextoLeft}>Juros</Text>
                <Text style={styles.parcelaTextoRight}>R$ 51,61</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.parcelaTextoLeft}>Valor total do acordo</Text>
                <Text style={styles.parcelaTextoRight}>R$ 201,46</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.parcelaTextoLeft}>Saldo devedor</Text>
                <Text style={styles.parcelaTextoBoldRight}>R$ 201,46</Text>
              </View>
            </View>

            <CardAcordo parcela={1}/>
            <CardAcordo parcela={2}/>
            <CardAcordo parcela={3}/>
            <CardAcordo parcela={4}/>
          </Animatable.View>
        </Collapsible>

        <TouchableOpacity style={styles.collapsibleHeader} onPress={toggleExpanded2}>
          <Text style={styles.collapsibleHeaderText}>
          <Image style={{ height: 30, width: 30, margin: 10 }} source={require('../../../assets/icons/parcelamento.png')} />
            ⠀Parcelamento
          </Text>
          <FontAwesomeIcon icon={ collapsed2 ? faPlus : faMinus } size={22} style={styles.caret}/>
        </TouchableOpacity>
        <Collapsible style={styles.collapsible} collapsed={collapsed2}>
          <Animatable.View animation={collapsed2 ? undefined : 'fadeInDown'} duration={300} useNativeDriver>
            <View style={{ padding: 12 }}>
              <Text style={styles.parcelaTextoLeft}>
                Caso seu banco não esteja na relação de conveniados, utilize o código de barras para pagamento no site do seu banco
              </Text>
              <View style={styles.row}>
                <Text style={styles.parcelaTextoLeft}>Valor total das faturas</Text>
                <Text style={styles.parcelaTextoRight}>R$ 146,85</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.parcelaTextoLeft}>Juros</Text>
                <Text style={styles.parcelaTextoRight}>R$ 51,61</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.parcelaTextoLeft}>Valor total do acordo</Text>
                <Text style={styles.parcelaTextoRight}>R$ 201,46</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.parcelaTextoLeft}>Saldo devedor</Text>
                <Text style={styles.parcelaTextoBoldRight}>R$ 201,46</Text>
              </View>
            </View>

            <CardAcordo parcela={1}/>
            <CardAcordo parcela={2}/>
            <CardAcordo parcela={3}/>
            <CardAcordo parcela={4}/>
          </Animatable.View>
        </Collapsible>

      </ScrollView>
    </SafeAreaView>
  )
}