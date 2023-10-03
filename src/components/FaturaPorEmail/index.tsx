import React, { useState } from "react";
import { View, Text, Modal, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck'
import { TextInput, Checkbox, } from "react-native-paper";
import axios from "axios";

import styles from "./styles";
import Header from "../Header";

export default function FaturaPorEmail({ navigation }) {
  const [page, setPage] = useState(1);
  const [fornecimento, setFornecimento] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [showModalFornecimento, setShowModalFornecimento] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showModalErro, setShowModalErro] = useState(false)
  const [protocolo, setProtocolo] = useState('');
  const [check, setCheck] = useState(false)
  const [habilitaBotao, setHabilitaBotao] = useState(true)
  const [erro, setErro] = useState('');

  const achaEndereco = () => {
    axios.get('http://pwa-api-nshom.sabesp.com.br/viario/fornecimento/' + fornecimento + '/endereco')
      .then(res => {
        setEndereco(res.data)
      })
  }

  const geraProtocolo = () => {
    setHabilitaBotao(false)

    axios.post('http://pwa-api-nshom.sabesp.com.br/pedidos/alteracaoendereco', {
      'tipoPedido': 'CRM006B',
      'codigoFornecimento': fornecimento,
      'email': email
    }).then(res => {
      setProtocolo(res.data.protocolo);
      setShowModal(true);
      setHabilitaBotao(true)
    }).catch(error => {
      setErro(error.response.data.details)
      setShowModalErro(true)
      setHabilitaBotao(true)
    })
  }

  const vaiPaginaConfirma = () => {
    achaEndereco();
    setPage(2)
  }

  return (
    <SafeAreaView>
    <StatusBar barStyle="dark-content" backgroundColor='#ffffff' />
      <ScrollView>
      <Header navigation={navigation} backButton={() => page === 1 ? navigation.navigate('Servicos') : setPage(1)}/>
        {
          page === 1 ? (
            <View style={styles.container}>
              <Text style={{ fontSize: 20, textAlign: 'center', margin: 20 }}>
                Receber fatura por e-mail
              </Text>
              <Text style={{ fontSize: 16, textAlign: 'center', margin: 20, color: '#a0a0a0' }}>
                Selecione o fornecimento
              </Text>

              <TextInput 
                placeholder="Fornecimento"
                style={{}}
                theme={{ colors: { primary: '#00a5e4' }}}
                label='Fornecimento' 
                value={fornecimento} 
                onChangeText={value => { setFornecimento(value) }}
                keyboardType='numeric'
              />
              <View style={styles.linkContainer}>
                <Text style={styles.hyperlink} onPress={() => setShowModalFornecimento(true)}>
                  Localize o código de fornecimento da sua conta
                </Text>
              </View>

              <TextInput 
                placeholder="E-mail"
                style={{ marginBottom: 12 }}
                theme={{ colors: { primary: '#00a5e4' }}}
                label='E-mail' 
                value={email} 
                onChangeText={value => { setEmail(value) }}
              />
              <TextInput 
                placeholder="Confime seu E-mail"
                style={{ marginBottom: 12 }}
                theme={{ colors: { primary: '#00a5e4' }}}
                label='Confirme seu E-mail' 
                value={confirmEmail} 
                onChangeText={value => { setConfirmEmail(value) }}
              />

              {
                !(email.length && confirmEmail.length && email === confirmEmail) ? (
                  <Text style={{ fontSize: 14, textAlign: 'center', margin: 20, color: 'red' }}>
                    Os dois e-mails informados devem ser iguais.
                  </Text>
                ) : null
              }

              <TouchableOpacity 
                style={(email && confirmEmail && email === confirmEmail) ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
                onPress={() => vaiPaginaConfirma()}
                disabled={!(email && confirmEmail && email === confirmEmail)}>
                <Text style={styles.textButtonSubmit}>Continuar</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.container}>
              <View style={styles.borderedContainer}>
                <Text style={styles.textBold}>Receber fatura por e-mail</Text>

                <Image source={require('../../../assets/icons/exclamation-blue.png')} style={{ width: 100, height: 100, alignSelf: 'center'}}/>

                <Text style={[styles.text, { fontSize: 16 }]}>Atenção</Text>
                <Text style={styles.text}>Após aderir à fatura por e-mail você deixará de recebê-la em papel.</Text>
                <Text style={styles.textBold}>Fornecimento: <Text style={styles.text}>{fornecimento}</Text></Text>
                <Text style={styles.textBold}>Endereço: <Text style={styles.text}>{endereco ? `${endereco.toponimo} ${endereco.nomeLogradouro}, ${endereco.numeroImovel}, ${endereco.bairro}, ${endereco.nomeMunicipio} - ${endereco.estado}, ${endereco.cep}` : ''}</Text></Text>

                <View style={styles.checkBoxContainer}>
                  <Checkbox.Android
                    status={check ? 'checked' : 'unchecked'}
                    onPress={() => setCheck(!check)}
                  />
                  <Text style={[styles.textBold, {marginTop: 15}]}>Declaro que lí e estou ciente.</Text>
                </View>

                <TouchableOpacity 
                  style={(check && habilitaBotao) ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
                  onPress={() => geraProtocolo()}
                  disabled={!(check && habilitaBotao)}>
                  <Text style={styles.textButtonSubmit}>Continuar</Text>
                </TouchableOpacity>

              </View>
            </View>
          )
        }

        <Modal animationType="slide" visible={showModalFornecimento} transparent={true}>
          <ScrollView style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Localize seu código de fornecimento</Text>
              <Text style={styles.modalText}>Seu código de fornecimento pode ser encontrado no canto esquerdo superior da sua conta mensal.</Text>

              <Image style={styles.modalImagem} source={require('../../../assets/imagens/localizar-fornecimento.png')} />

              <TouchableOpacity style={styles.modalButton} onPress={() => setShowModalFornecimento(false)}>
                <Text style={styles.modalButtonText}>Ok</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Modal>

        <Modal animationType="slide" visible={showModal} transparent={true}>
          <ScrollView style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.modalView}>
              <View style={styles.center}>
                <FontAwesomeIcon icon={ faCircleCheck } size={100} style={{ color: '#00a000' }}/>
              </View>
              <Text style={styles.modalTitle}>E-mail cadastrado com sucesso!</Text>
              <Text style={styles.modalText}>A partir de agora, suas faturas serão enviada para {email}.</Text>
              <Text style={styles.modalText}>Protocolo de atendimento: <Text style={styles.modalTitle}>nº {protocolo}</Text>.</Text>

              <TouchableOpacity style={styles.modalButton} onPress={() => navigation.navigate('Faturas')}>
                <Text style={styles.modalButtonText}>Voltar para faturas</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Modal>

        <Modal animationType="slide" visible={showModalErro} transparent={true}>
          <ScrollView style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.modalView}>
              <View style={styles.center}>
                <Image source={require('../../../assets/icons/exclamation.png')} style={{ width: 100, height: 100}}/>
              </View>
              <Text style={styles.modalTitle}>Erro!</Text>
              <Text style={styles.modalText}>{erro}</Text>

              <TouchableOpacity style={styles.modalButton} onPress={() => setShowModalErro(false)}>
                <Text style={styles.modalButtonText}>Ok</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Modal>

      </ScrollView>
    </SafeAreaView>
  )
};