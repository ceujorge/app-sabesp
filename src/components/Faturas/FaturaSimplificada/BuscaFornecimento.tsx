import React, { useState, useEffect } from "react";
import { View, Text, Linking, TouchableOpacity, ScrollView, Modal, Image } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
import { TextInput, Checkbox } from "react-native-paper";
import axios from "axios";

import styles from "../styles";

export default function BuscaFornecimento({ navigation }) {
    const [fornecimento, setFornecimento] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [textModal, setTextModal] = useState('');
    const [isSelected, setSelection] = useState(false);

    const getFaturaFornecimento = (fornecimento:string) => {
      axios.get('http://pwa-api-nsqua.sabesp.com.br/fatura/fornecimento/' + fornecimento)
        .then(res => {
          navigation.navigate('FaturaSimplificada', { dadosFornecimento: res.data, fornecimento: fornecimento })
        })
    }

    return (
      <ScrollView>
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
      </ScrollView>
  );
}