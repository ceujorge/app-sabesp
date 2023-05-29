import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, Modal, Image } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { TextInput, Checkbox } from "react-native-paper";
import axios from "axios";
import moment from "moment";
import 'moment/locale/pt-br';

moment.locale('pt-br');

import styles from "../styles";

export default function BuscaFornecimento({ navigation }) {
    const [fornecimento, setFornecimento] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [textModal2, setTextModal2] = useState([]);
    const [isSelected, setSelection] = useState(false);

    const getFaturaFornecimento = (fornecimento:string) => {
      axios.get('http://pwa-api-nsqua.sabesp.com.br/fatura/fornecimento/' + fornecimento)
        .then(res => {
          processaFaturas(res.data)
        }).catch(error => {
          if(error.response) {
            if(error.response.data.message == 'Fornecimento não encontrado') {
              setTextModal2([
                '',
                'Fornecimento não encontrado. Verifique se o número foi digitado corretamente. Caso o erro continue, acesse o chat ou ligue para 0800 055 0195.'
              ])
              setShowModal2(true);
            } else {
              setTextModal2([
                '',
                'Houve um problema e não conseguimos processar o seu pedido. Por favor, tente novamente mais tarde.'
              ])
              setShowModal2(true);
            }
          }
          setTextModal2([
            '',
            'Houve um problema e não conseguimos processar o seu pedido. Por favor tente novamente mais tarde.'
          ])
          setShowModal2(true);
        })
    }

    const processaFaturas = (dados) => {
      if(dados.length < 1) {
        setTextModal2([
          '',
          'Este fornecimento ainda não possui nenhuma fatura fechada.\n\nApós o fechamento da fatura, ela aparecerá aqui.'
        ])
        setShowModal2(true);
        return;
      }

      let limite = moment().subtract(180, 'days');
      let faturas = [];
      let faturasPos = [];

      dados.forEach(fatura => {
        if(moment(fatura.dataEmissao).diff(limite, 'days') > 0) {
          faturas.push(fatura);
        } else {
          faturasPos.push(fatura);
        }
      });

      let dividas = faturas.filter(fatura => fatura.situacaoDaFatura != 'PAGA');
      let dividasAntigas = faturasPos.filter(fatura => fatura.situacaoDaFatura == 'EM ATRASO')
    
      if(dividas.length == 0) {
        if(dividasAntigas.length > 0) {
          setTextModal2([
            'Nada por aqui.',
            'Este fornecimento não possui faturas em aberto, entre as emitidas nos últimos 180 dias. Mas existem faturas em atraso emitidas há mais tempo ou indisponíveis para fatura simplificada. Para consultá-las, faça login ',
            'Clicando aqui',
          ])
        } else {
          setTextModal2([
            'Parabéns!',
            'Parabéns! Este fornecimento não possui nenhuma fatura não paga. Para consultar suas faturas completas e histórico de consumo, faça login ',
            'Clicando aqui',
          ])
        }
        setShowModal2(true);
        return
      }

      navigation.navigate('FaturaSimplificada', { dadosFornecimento: faturas, fornecimento: fornecimento })
    }

    return (
      <ScrollView style={{ backgroundColor: '#F1F6F9' }}>
        <View style={styles.center}>
          <Text style={styles.loginTitle}>Bem-vindo ao Sabesp Mobile</Text>
          <Text style={styles.loginInformation}>Insira abaixo o seu código de fornecimento para ter acesso à 2ª via das contas emitidas nos <Text style={{fontWeight: 'bold'}}>últimos 180 dias.</Text></Text>

          <TextInput 
            style={styles.loginInput}
            theme={{ colors: { primary: '#00a5e4' }}}
            label='Fornecimento' 
            keyboardType='numeric'
            maxLength={14}
            value={fornecimento} 
            onChangeText={value => { setFornecimento(value) }}
          />

          <View style={styles.linkContainer}>
            <Text style={styles.hyperlink} onPress={() => setShowModal(true)}>
              Localize o código de fornecimento da sua conta
            </Text>
          </View>

          <View style={styles.checkBoxContainer}>
            <Checkbox.Android
              status={isSelected ? 'checked' : 'unchecked'}
              color={'#00a5e4'}
              onPress={() => setSelection(!isSelected)}
            />
            <Text style={{fontSize: 14}}>Manter meu fornecimento salvo</Text>
          </View>

          <TouchableOpacity style={fornecimento ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
            onPress={() => getFaturaFornecimento(fornecimento)}
            disabled={!fornecimento}>
            <Text style={styles.textButtonSubmit}>Buscar</Text>
          </TouchableOpacity>
        </View>

        <Modal animationType="slide" visible={showModal} transparent={true}>
          <ScrollView style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Localize seu código de fornecimento</Text>
              <Text style={styles.modalText}>Seu código de fornecimento pode ser encontrado no canto esquerdo superior da sua conta mensal.</Text>

              <Image style={styles.modalImagem} source={require('../../../../assets/imagens/localizar-fornecimento.png')} />

              <TouchableOpacity style={styles.modalButton} onPress={() => setShowModal(false)}>
                <Text style={styles.modalButtonText}>Ok</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Modal>

        <Modal animationType="slide" visible={showModal2} transparent={true}>
          <ScrollView style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.modalView}>
              <View style={styles.center}>
                <Image source={require('../../../../assets/icons/exclamation.png')} style={{ width: 100, height: 100}}/>
              </View>
              <Text style={styles.modalTitle}>{textModal2[0]}</Text>
              <Text style={styles.modalText}>
                {textModal2[1]}
                <Text style={styles.hyperlink} onPress={() => navigation.navigate('Faturas', { tab: 1 })}>{textModal2[2] || ''}</Text>
              </Text>

              <TouchableOpacity style={styles.modalButton} onPress={() => setShowModal2(false)}>
                <Text style={styles.modalButtonText}>Ok</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Modal>

      </ScrollView>
  );
}