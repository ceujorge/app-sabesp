import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, Dimensions } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import styles from "./styles";
import moment from "moment";
import 'moment/locale/pt-br';

moment.locale('pt-br');

import Pagamento from "../Pagamento";

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
            <Text style={styles.text}>{dataEmissao}</Text>
            <View style={styles.rightMenu}>
            <Text style={[styles.text, { color: color, fontWeight: 'bold' }]}>{situacao}</Text>
            </View>
          </View>
          <Text style={[styles.text, { fontSize: 32, fontWeight: 'bold'}]}>{valorFatura}</Text>
  
          <View style={styles.row}>
            <Text style={styles.text}>Vencimento: {dataVencimento}</Text>
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


export default function HistoricoPagamento({ navigation, faturas, fornecimento }) {
  const [pagamento, setPagamento] = useState(null)
  const [fatura, setFatura] = useState('');
  const [qntFaturas, setQtdFaturas] = useState(10);
  const [faturasExibir, setFaturasExibir] = useState('');
  const [faturasFiltradas, setFaturasFiltradas] = useState(faturas);
  const [showModalFiltros, setShowModalFiltros] = useState(false);
  const [dadosFiltro, setDadosFiltro] = useState('');
  const [tipoFiltro, setTipoFiltro] = useState('');

  useEffect(() => {
    setFaturasExibir(faturas.slice(0, qntFaturas)); // 10 primeiras faturas para página inicial
    criaDadosFiltro();
  }, [])

  const criaDadosFiltro = () => {
    let situacoesFatura = faturas.map(fatura => fatura.situacaoDaFatura)
    let anosFaturas = faturas.map(fatura => {
      return moment(fatura.dataEmissao).format('YYYY');
    })

    situacoesFatura = situacoesFatura.filter((situacao, index) => {
      return situacoesFatura.indexOf(situacao) === index;
    });

    anosFaturas = anosFaturas.filter((ano, index) => {
      return anosFaturas.indexOf(ano) === index;
    });

    setDadosFiltro({ 'ano': anosFaturas, 'situacao': situacoesFatura});
  }

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

  const carregarMais = () => {
    setFaturasExibir(faturasFiltradas.slice(0, qntFaturas + 10));
    setQtdFaturas(qntFaturas + 10);
  }

  const showFilter = (filtro) => {
    setShowModalFiltros(true);
    setTipoFiltro(filtro);
  }

  const filtrarPorAno = (ano) => {
    const faturasParaExibir = faturas.filter(fatura => moment(fatura.dataEmissao).format('YYYY') === ano);

    setFaturasFiltradas(faturasParaExibir);
    setFaturasExibir(faturasParaExibir);
    setShowModalFiltros(false);
  }

  const filtrarPorSituacao = (situacao) => {
    const faturasParaExibir = situacao == 'Todos' ? faturas : faturas.filter(fatura => fatura.situacaoDaFatura.toLowerCase() === situacao.toLowerCase());

    setFaturasFiltradas(faturasParaExibir);
    setFaturasExibir(faturasParaExibir);

    setShowModalFiltros(false);
  }

  return (
    <View style={styles.container}>
      {faturas.length ? (
        <>
        {pagamento === null ? (
          <>
            <Text style={[styles.text, { marginTop: 15, marginBottom: 0 }]}>Débito Total: </Text>
            <Text style={[styles.text, { fontSize: 32, fontWeight: 'bold' }]}>{calculaDebitos()[2] != '0' ? calculaDebitos()[2] : '-' }</Text>
            <Text style={styles.text}>Faturas em aberto: <Text style={{ fontWeight: 'bold' }}>{calculaDebitos()[0] != '0' ? calculaDebitos()[0] : '-' }</Text></Text>
            <Text style={styles.text}>Faturas vencidas: <Text style={{ fontWeight: 'bold', color: 'red'}}>{calculaDebitos()[1] != '0' ? calculaDebitos()[1] : '-' }</Text></Text>

            <View style={styles.row}>
              <TouchableOpacity style={styles.buttonFilter} onPress={() => showFilter('ano')}>
                <Image style={{ height: 18, width: 18, marginRight: 10, paddingTop: 5 }} source={require('../../../assets/icons/filter-outline.png')} />
                <Text style={styles.textButtonSubmitFilter}>Ano</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonFilter} onPress={() => showFilter('situacao')}>
                <Image style={{ height: 18, width: 18, marginRight: 10, paddingTop: 5 }} source={require('../../../assets/icons/filter-outline.png')} />
                <Text style={styles.textButtonSubmitFilter}>Situação</Text>
              </TouchableOpacity>
            </View>

            {faturasExibir ? faturasExibir.map((item, index) => (
                <CardFatura 
                  dados={item} 
                  setPagamento={setPagamento}
                  setFatura={setFatura}
                  key={index}
                />
              )
            ) : null}
            
            <View>
              <Text style={styles.contadorText}>{`Exibindo ${String(faturasExibir.length).padStart(2, '0')} de ${String(faturasFiltradas.length).padStart(2, '0')}`}</Text>
              {faturasFiltradas > faturasExibir ? (
                <TouchableOpacity style={[styles.rightMenu, { marginTop: 10 }]} onPress={() => carregarMais()}>
                  <Text style={styles.hyperlink}>Carregar mais</Text>
                </TouchableOpacity>
              ) : null}
            </View>

            <Modal animationType="slide" visible={showModalFiltros} transparent={true}>
              <ScrollView style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} contentContainerStyle={{ flex: 1, justifyContent: 'flex-end' }}>
                <View style={styles.modalView}>
                  <>
                    {tipoFiltro == 'ano' && dadosFiltro ? (
                      <>
                        <View style={{flexDirection: 'row', margin: 15}}>
                          <Image style={{ height: 22, width: 22, marginRight: 10, paddingTop: 3 }} source={require('../../../assets/icons/filter-outline-blue.png')} />
                          <Text style={{fontWeight: 'bold', fontSize: 18}}>Filtrar por Ano</Text>
                        </View>
                        {dadosFiltro.ano.map(ano => {
                          return (
                            <TouchableOpacity style={{ borderBottomColor: '#999', borderBottomWidth: 1 }} onPress={() => filtrarPorAno(ano)}>
                              <Text style={{fontWeight: 'bold', margin: 15, fontSize: 18}}>{ano}</Text>
                            </TouchableOpacity>
                          )
                        })}
                      </>
                    ) : null}

                    {tipoFiltro == 'situacao' && dadosFiltro ? (
                      <>
                        <View style={{flexDirection: 'row', margin: 15}}>
                          <Image style={{ height: 22, width: 22, marginRight: 10, paddingTop: 3 }} source={require('../../../assets/icons/filter-outline-blue.png')} />
                          <Text style={{fontWeight: 'bold', fontSize: 18}}>Fitrar por Situação</Text>
                        </View>

                        <TouchableOpacity style={{ borderBottomColor: '#999', borderBottomWidth: 1 }} onPress={() => filtrarPorSituacao('Todos')}>
                          <Text style={{fontWeight: 'bold', margin: 15, fontSize: 18}}>Todos</Text>
                        </TouchableOpacity>
                        {dadosFiltro.situacao.map(situacao => {
                          return (
                            <TouchableOpacity style={{ borderBottomColor: '#999', borderBottomWidth: 1 }} onPress={() => filtrarPorSituacao(situacao)}>
                              <Text style={{fontWeight: 'bold', margin: 15, fontSize: 18}}>{capitalize(situacao)}</Text>
                            </TouchableOpacity>
                          )
                        })}
                      </>
                    ) : null}
                  </>
                </View>
              </ScrollView>
            </Modal>
          </>
        ) : (
          <Pagamento fatura={fatura} fornecimento={fornecimento.codigo} simples={false}/>
        )}
        </>
      ) : (
        <View style={styles.borderedContainer}>
          <Image source={require('../../../assets/icons/exclamation-blue.png')} style={{ width: 100, height: 100, alignSelf: 'center'}}/>

          <Text style={[styles.textBold, {marginBottom: 10, alignSelf: 'center'}]}>Nada por aqui.</Text>
          <Text style={[styles.text, {marginBottom: 10}]}>Este fornecimento ainda não possui nenhuma fatura fechada.</Text>
          <Text style={[styles.text, {marginBottom: 10}]}>Após o fechamento da fatura, ele aparecerá aqui.</Text>

        </View>
      )}

    </View>
  )
}
