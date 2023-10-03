import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, Dimensions } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import axios from "axios";
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

export default function HistoricoPagamento({ navigation, faturas, fornecimento }) {
  const [pagamento, setPagamento] = useState(null)
  const [fatura, setFatura] = useState('');
  const [leituras, setLeituras] = useState('');

  useEffect(() => {
    axios.get('http://pwa-api-nshom.sabesp.com.br/consumo/fornecimento/' + fornecimento.codigo + '/leituras')
      .then(res => {
        setLeituras(res.data);
      })
  })


  return (
    <View style={styles.container}>
      {pagamento === null ? (
        <></>
      ) : (
        <>
          <Pagamento fatura={fatura} fornecimento={fornecimento.codigo} simples={false}/>
        </>
      )}
    </View>
  )
}
