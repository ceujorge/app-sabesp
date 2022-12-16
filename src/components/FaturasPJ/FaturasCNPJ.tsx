import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { TextInput } from "react-native-paper";
import { Table, TableWrapper, Rows, Col } from 'react-native-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons/faAnglesRight'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons/faAnglesLeft'
import { faStar } from '@fortawesome/free-regular-svg-icons/faStar'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons/faStar'

import Header from "../Header";
import styles from "./styles";
import Breadcrumb from "../Breadcrumb";

const breadcrumb = [
  {label: 'Login', link: 'Login'}, 
  {label: 'Acesso', link: 'HomePJ'}, 
  {label: 'Raiz CNPJ', link: '', active: true},
]

const mock = [{
    "favorito": "S",
    "cnpj": "07.313.934/0001-00",
    "fornecimento": "30 fornecimentos vinculados no CNPJ"
  },{
    "favorito": "N",
    "cnpj": "03.211.302/0001-00",
    "fornecimento": "160 fornecimentos vinculados no CNPJ"
  },{
    "favorito": "N",
    "cnpj": "06.213.490/0001-00",
    "fornecimento": "98 fornecimentos vinculados no CNPJ"
  }]

function FaturaCard({ dados, navigation }) {
  const titles = [
    <View style={styles.favoritoTitleContainer}>
      <FontAwesomeIcon icon={ dados.favorito == 'S' ? faStarSolid : faStar } size={18} style={styles.favoritoTitleStar}/>
      <Text style={styles.favoritoTitle}>CNPJ</Text>
    </View>
    ,'Fornecimento']

  let cardsDataParsed = [
    [dados.cnpj], 
    [dados.fornecimento], 
  ]

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
            data={cardsDataParsed} 
            style={styles.cardsData}
            textStyle={{ alignSelf: 'flex-start', marginLeft: 20 }}
            widthArr={[170]}
            heightArr={[70, 70, 70, 70]}
          />
        </TableWrapper>
      </Table>
      <View style={styles.buttonCardBar}>
        <TouchableOpacity style={[styles.buttonSubmit, {width: '30%'}]} onPress={() => navigation.navigate('FaturasPJFornecimento')}>
          <Text style={styles.textButtonSubmit}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default function FaturasCNPJ({ navigation }) {
  const [itensPorPagina, setItensPorPagina] = useState(3);
  const [page, setPage] = useState(1);
  const [CNPJ, setCNPJ] = useState('')
  const [cardsData, setCardsData] = useState([])
  const [cardsDataFiltered, setCardsDataFiltered] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = function() {
    setCardsData(mock);
    setCardsDataFiltered(mock);
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

  const filter = function(cnpj = CNPJ) {
    setCNPJ(cnpj);
    setPage(1);

    let filteredCardsData = cardsData.filter(item => {
      if((!cnpj || item.cnpj.includes(cnpj)) && true) return true;
    })

    setCardsDataFiltered(filteredCardsData);
  }

  const setMascaraCnpj = function (cnpj) {
    cnpj = cnpj.replace(/\D/g, "").substring(0, 14);                   //Remove tudo o que não é dígito
    cnpj = cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d)/g, "$1.$2.$3/$4"); //Coloca a pontuação
    cnpj = cnpj.replace(/(\d)(\d{2})$/, "$1-$2");    //Coloca hífen entre os dois ultimos digitos e o resto
    setCNPJ(cnpj);
  }

  return (
    <SafeAreaView>
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Breadcrumb config={breadcrumb} navigation={navigation} backButton={true}/>
        <Text style={styles.title}>Bem vindo à Sabesp | Mobile</Text>
        <View style={styles.headerPJ}>
          <Image style={styles.avatar} source={require('../../../assets/avatar.png')} />
          <View>
            <Text style={styles.textHeaderPJ}>SILVIA MARIA ROCHA</Text>
            <Text style={[styles.textHeaderPJ, {fontSize: 16}]}>ENGINEERING DO BRASIL</Text>
            <Text style={[styles.textHeaderPJ, {fontSize: 14, fontWeight: 'normal'}]}>REPRESENTANTE LEGAL</Text>
          </View>
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
            placeholder="Digite o CNPJ" 
            keyboardType='numeric'
            value={CNPJ} 
            onChangeText={text => setMascaraCnpj(text)}
            right={<TextInput.Icon name={'magnify'} onPress={() => filter(CNPJ)}/>}
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