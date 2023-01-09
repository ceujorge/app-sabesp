import React, { useState, useEffect } from "react";
import { View, Text, Image, Switch, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { TextInput, RadioButton } from "react-native-paper";
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
import mocks from "../../mocks/mocks";
import Breadcrumb from "../Breadcrumb";

const breadcrumb = [
  {label: 'Fornecimento', link: 'FaturasPJFornecimento'}, 
  {label: 'Acesso', link: 'FornecimentoEncontrado'}, 
  {label: 'Gestão de usuário', link: '', active: true},
]

function FaturaCard({ data, navigation }) {
  const [dados, setDados] = useState(data)

  const titles = [
    <View style={styles.favoritoTitleContainer}>
      <FontAwesomeIcon icon={ dados.favorito == 'S' ? faStarSolid : faStar } size={18} style={styles.favoritoTitleStar}/>
      <Text style={styles.favoritoTitle}>Nome</Text>
    </View>,
    'E-mail',
    'Perfil de Usuário',
    'Situação',
  ]

  let cardsDataParsed = [
    [dados.nome],
    [dados.email],
    [dados.perfil],
    [(
      <View style={styles.dateContainer}>
        <Text style={dados.situacao == 'ATIVO' ? styles.tableSituacaoAtivo : styles.tableSituacaoInativo}>{dados.situacao}</Text>
        <Switch onValueChange={toggleSwitch} value={dados.situacao == 'ATIVO' ? true : false} style={{marginLeft: 10}}/>
      </View>
    )],
  ]

  function toggleSwitch() {
    if(dados.situacao == 'ATIVO') setDados({...dados, 'situacao': 'INATIVO'})
    if(dados.situacao == 'INATIVO') setDados({...dados, 'situacao': 'ATIVO'})
  }

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
        <TouchableOpacity style={[dados.situacao == 'ATIVO' ? styles.buttonSubmit : styles.buttonSubmitDisabled, {width: '50%'}]} onPress={() => navigation.navigate('CadastroSemAcesso')}>
          <Text style={styles.textButtonSubmit}>Gerenciar Usuário</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default function GestaoUsuarioPJ({ navigation }) {
  const [itensPorPagina, setItensPorPagina] = useState(3);
  const [page, setPage] = useState(1);
  const [nome, setNome] = useState('')
  const [cardsData, setCardsData] = useState([])
  const [cardsDataFiltered, setCardsDataFiltered] = useState([]);
  const [checked, setChecked] = useState('Todos');

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = function() {
    setCardsData(mocks.gestaoUsuarioPj);
    setCardsDataFiltered(mocks.gestaoUsuarioPj);
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

  const filter = function(nome = nome) {
    setNome(nome);
    setPage(1);

    let filteredCardsData = cardsData.filter(item => {
      if((!nome || item.nome.toLowerCase().includes(nome.toLowerCase())) && true) return true;
    })

    setCardsDataFiltered(filteredCardsData);
  }

  return (
    <SafeAreaView>
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Breadcrumb config={breadcrumb} navigation={navigation} backButton={true}/>
        <View style={styles.container}>
          <View style={styles.radioBar}>
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                value="Todos"
                status={ checked === 'Todos' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('Todos')}
              />
              <Text style={styles.radioTexto}>Todos</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                value="Ativos"
                status={ checked === 'Ativos' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('Ativos')}
              />
              <Text style={styles.radioTexto}>Ativos</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                value="Inativos"
                status={ checked === 'Inativos' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('Inativos')}
              />
              <Text style={styles.radioTexto}>Inativos</Text>
            </View>
          </View>
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
            placeholder="Busque por nome" 
            value={nome} 
            onChangeText={text => setNome(text)}
            right={<TextInput.Icon name={'magnify'} onPress={() => filter(nome)}/>}
          />
          
          <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('AdicionarUsuarioPJ')}>
            <Text style={styles.textButtonOutline}>Adicionar Usuário</Text>
          </TouchableOpacity>

          {cardsArray().map((item, index) => (<FaturaCard data={item} key={index} navigation={navigation}/>))}

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