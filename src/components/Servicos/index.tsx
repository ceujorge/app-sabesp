import React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'

import styles from "./styles";

const dadosCard = [
  {
    servico: 'Transferência de titularidade',
    icon: require('../../../assets/icons/transferencia.png'),
    iconStyle: { width: 60, height: 50, margin: 5 },
    link: 'TransferenciaTitularidade',
  }, 
  {
    servico: 'Emergência para vazamentos',
    icon: require('../../../assets/icons/vazamentos.png'),
    iconStyle: { width: 45, height: 45, margin: 5 },
    link: '',
  }, 
  {
    servico: 'Religação',
    icon: require('../../../assets/icons/qualidadeagua.png'),
    iconStyle: { width: 45, height: 45, margin: 5 },
    link: 'LoginPage',
    redirect: 'ReligamentoAgua'
  }, 
  {
    servico: 'Desligamento Temporário',
    icon: require('../../../assets/icons/docs3.png'),
    iconStyle: { width: 40, height: 52, margin: 5 },
    link: 'LoginPage',
    redirect: 'DesligamentoAgua'
  }, 
  {
    servico: 'Ligação de água e esgoto',
    icon: require('../../../assets/icons/pin.png'),
    iconStyle: { width: 35, height: 52, margin: 5 },
    link: 'LoginPage',
    redirect: 'LigacaoAgua'
  }, 
  {
    servico: 'Falta de água ou pouca pressão',
    icon: require('../../../assets/icons/docsplus.png'),
    iconStyle: { width: 40, height: 52, margin: 5 },
    link: 'LoginPage',
    redirect: 'FaltaDeAgua'
  }, 
  {
    servico: 'Qualidade da água',
    icon: require('../../../assets/icons/qualidadeagua.png'),
    iconStyle: { width: 45, height: 45, margin: 5 },
    link: 'LoginPage',
    redirect: 'QualidadeAgua'
  }, 
  {
    servico: 'Alteração de endereço da Fatura',
    icon: require('../../../assets/icons/pin.png'),
    iconStyle: { width: 35, height: 52, margin: 5 },
    link: 'LoginPage',
    redirect: 'AlterarEndereco'
  }, 
]

function ServicoCard({ dados, navigation }) {
  return(
    <View style={styles.card}>
      <Image style={dados.iconStyle} source={dados.icon} />
      <Text style={styles.cardText}>{dados.servico}</Text>
      <Text style={styles.cardLink} onPress={() => dados.redirect ? navigation.navigate(dados.link, { 'redirect': dados.redirect }) : navigation.navigate(dados.link)}>Acesse aqui</Text>
    </View>
  )
}

export default function Servicos({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Serviços <Text style={styles.blue}>Sabesp</Text></Text>

      <View style={styles.row}>
        {dadosCard.map((item, id) => <ServicoCard dados={item} navigation={navigation} key={id}/>)}
      </View>

      <Text style={styles.text}>Ver mais serviços <FontAwesomeIcon icon={ faChevronDown } size={16} style={styles.blue}/></Text>
    </View>
  );
}