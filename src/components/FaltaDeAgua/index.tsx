import React, { useState } from "react";
import { View, Text, Modal, Image, TouchableOpacity, ScrollView, SafeAreaView, StatusBar, Linking } from "react-native";
import { TextInput, Checkbox, RadioButton } from "react-native-paper";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck'
import axios from "axios";

import Header from "../Header";

import styles from "./styles";

export default function FaltaDeAgua({ navigation }) {
  const [step, setStep] = useState(1);
  const [fornecimento, setFornecimento] = useState('')
  const [radio1, setRadio1] = useState('10')
  const [radio2, setRadio2] = useState('sim')
  const [showModalFornecimento, setShowModalFornecimento] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showModalErro, setShowModalErro] = useState(false)
  const [endereco, setEndereco] = useState('');
  const [protocolo, setProtocolo] = useState('');
  const [checkbox, setChecbox] = useState(false)
  const [habilitaBotao, setHabilitaBotao] = useState(true)
  const [erro, setErro] = useState('');

  const geraProtocolo = () => {
    setHabilitaBotao(false)

    let codPedido = radio1 + (radio1 == '10' ? (radio2 == 'sim' ? '50' : '60') : (radio2 == 'sim' ? '10' : '20'))

    axios.post('http://pwa-api-nshom.sabesp.com.br/pedidosNew', {
      'tipoPedido': codPedido,
      'tipoOrigem': "Fornecimento",
      'origemCodigoFornecimento': fornecimento,
      'dadosSolicitante': {
        'nome': 'teste',
        'sobrenome': 'teste2',
        'email': 'teste@teste.com',
        'telefone': '(11) 99999-9999'
      }
    }).then(res => {
      if(res.data.concorrencia = true) {
        setErro('Já existe uma solicitação registrada deste serviço ou de serviço relacionado para este imóvel')
        setShowModalErro(true)
        setHabilitaBotao(true)
      }
      setProtocolo(res.data.protocolo);
      setShowModal(true);
      setHabilitaBotao(true)
    }).catch(error => {
      setErro(error.response.data.details.substring(0, 200))
      setShowModalErro(true)
      setHabilitaBotao(true)
    })
  }

  const processaFornecimento = () => {
    axios.get('http://pwa-api-nshom.sabesp.com.br/fornecimento/' + fornecimento)
      .then(resp => {
        if(resp.data.tipoPde == 'FICT') {
          setErro('Este tipo de serviço não está disponível para o "Fornecimento" informado.')
          setShowModalErro(true)
        } else if(resp.data.tipoLigacao == '2') {
          setErro('Este tipo de serviço não está disponível para o "Fornecimento" informado.')
          setShowModalErro(true)
        } else if(resp.data.status == 'ENCERRADO E FATURADO' || resp.data.status == 'ENCERRADO A FATURAR' || resp.data.status == 'ENCERRAMENTO EM ANDAMENTO' ) {
          setErro('Este tipo de serviço não está disponível para o "Fornecimento" informado.')
          setShowModalErro(true)
        } else if(resp.data.status == 'CORTADO') {
          setErro('Este tipo de serviço não está disponível para o "Fornecimento" informado.')
          setShowModalErro(true)
        } else {
          // passou
          axios.get('http://pwa-api-nshom.sabesp.com.br/viario/fornecimento/' + fornecimento + '/endereco')
            .then(res => {
              setEndereco(res.data)
              setStep(4);
            }).catch(error => {
              console.log(error)
              setErro(error.response.data.details.substring(0, 200))
              setShowModalErro(true)
            })
        }
      }).catch(error => {
        console.log(error.response)
        setErro(error.response.data.details.substring(0, 200))
        setShowModalErro(true)
      })
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor='#ffffff' />
      <ScrollView>
        <Header navigation={navigation} backButton={() => step === 1 ? navigation.navigate('Servicos') : setStep(step - 1)}/>

        {step === 1 ? (<View style={styles.container}>
          <View style={styles.borderedContainer}>
            <Text style={styles.textBold}>Falta de água ou pouca pressão</Text>
            <Image source={require('../../../assets/icons/exclamation-blue.png')} style={{ width: 100, height: 100, alignSelf: 'center'}}/>

            <Text style={[styles.text, {textAlign: 'center'}]}>A falta de água pode ocorrer por vários motivos. Antes de prosseguir com esse andamento, por favor verifique se:</Text>

            <View style={styles.rowBorder}>
              <Text style={styles.itemNumber}>1</Text>
              <Text style={styles.text}>O registro de sua casa está aberto.</Text>
            </View>
            <View style={styles.rowBorder}>
              <Text style={styles.itemNumber}>2</Text>
              <Text style={styles.text}>A falta de água é apenas no seu imóvel ou se os seus vizinhos também estão sem água.</Text>
            </View>
            <View style={styles.rowBorder}>
              <Text style={styles.itemNumber}>3</Text>
              <Text style={styles.text}>Sai água da torneira de jardim ou da promeira torneira direto da rua, mas não tem água no interior do seu imóvel. Neste caso, pode haver algum problema interno como, por exemplo, um vazamento. <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://site.sabesp.com.br/site/interna/Default.aspx?secaoId=244')}>Caso seja necessário, consulte dicas e testes para identificar vazamentos.</Text></Text>
            </View>

            <TouchableOpacity 
              style={styles.buttonSubmit} 
              onPress={() => setStep(2)}>
              <Text style={styles.textButtonSubmit}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>) : null}

        {step === 2 ? (<View style={styles.container}>
          <Text style={styles.textBold}>Falta de água ou pouca pressão</Text>

          <Text style={styles.textGray}>O que está acontecendo com a sua água?</Text>
          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="Todos"
              status={ radio1 === '10' ? 'checked' : 'unchecked' }
              onPress={() => setRadio1('10')}
              color="#00a5e4"
            />
            <Text style={styles.radioTexto}>Não sai água</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="Todos"
              status={ radio1 === '11' ? 'checked' : 'unchecked' }
              onPress={() => setRadio1('11')}
              color="#00a5e4"
            />
            <Text style={styles.radioTexto}>Sai pouca água</Text>
          </View>

          <Text style={styles.textGray}>Os vizinhos tem o mesmo problema?</Text>
          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="Todos"
              status={ radio2 === 'sim' ? 'checked' : 'unchecked' }
              onPress={() => setRadio2('sim')}
              color="#00a5e4"
            />
            <Text style={styles.radioTexto}>Sim</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="Todos"
              status={ radio2 === 'nao' ? 'checked' : 'unchecked' }
              onPress={() => setRadio2('nao')}
              color="#00a5e4"
            />
            <Text style={styles.radioTexto}>Não/Não sei</Text>
          </View>

          <TouchableOpacity 
            style={styles.buttonSubmit} 
            onPress={() => setStep(3)}>
            <Text style={styles.textButtonSubmit}>Continuar</Text>
          </TouchableOpacity>

        </View>) : null}

        {step === 3 ? (<View style={styles.container}>
          <Text style={styles.textBold}>Falta de água ou pouca pressão</Text>

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

          <TouchableOpacity 
            style={styles.buttonSubmit} 
            onPress={() => processaFornecimento()}>
            <Text style={styles.textButtonSubmit}>Continuar</Text>
          </TouchableOpacity>
        </View>) : null}

        {step === 4 ? (<View style={styles.container}>
          <View style={styles.borderedContainer}>
            <Text style={styles.textBold}>Falta de água ou pouca pressão</Text>

            <Text style={[styles.textBold, {textAlign: 'left'}]}>Descrição: <Text style={styles.text}>{(radio1 == '10' ? 'Falta de água ' : 'Pouca pressão ') + (radio2 == 'sim' ? 'geral' : 'local') }</Text></Text>
            <Text style={[styles.textBold, {textAlign: 'left'}]}>Endereço: <Text style={styles.text}>{endereco ? `${endereco.toponimo} ${endereco.nomeLogradouro}, ${endereco.numeroImovel}, ${endereco.bairro}, ${endereco.nomeMunicipio} - ${endereco.estado}, ${endereco.cep} - ${endereco.complemento}` : ''}</Text></Text>
            <Text style={[styles.textBold, {textAlign: 'left'}]}>Atendimento: <Text style={styles.text}>24 horas</Text></Text>
            <Text style={[styles.textBold, {textAlign: 'left'}]}>Preço: <Text style={styles.text}>Gratuíto</Text></Text>
            <Text style={[styles.textBold, {textAlign: 'left'}]}>Importante: <Text style={styles.text}>No momento da execução do serviço, se for constatada divergência entre as informações aqui registradas e as condições do local, pode haver alteração no preço e/ou prazo informados.</Text></Text>

            <View style={{ flexDirection: 'row' }}>
              <Checkbox.Android
                status={checkbox ? 'checked' : 'unchecked'}
                onPress={() => setChecbox(!checkbox)}
              />
              <Text style={[styles.textBold, {textAlign: 'left', marginTop: 10}]}>Confirmo que lí e estou de acordo.</Text>
            </View>

            <TouchableOpacity 
              style={(checkbox && habilitaBotao) ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
              onPress={() => geraProtocolo()}
              disabled={(!checkbox && habilitaBotao)}>
              <Text style={styles.textButtonSubmit}>Concluir solicitação</Text>
            </TouchableOpacity>
          </View>
        </View>) : null}

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
              <Text style={styles.modalTitle}>Solicitação realizada com sucesso!</Text>
              <Text style={styles.modalText}>Protocolo de atendimento: <Text style={styles.modalTitle}>nº {protocolo}</Text>.</Text>

              <TouchableOpacity style={styles.modalButton} onPress={() => navigation.navigate('Servicos')}>
                <Text style={styles.modalButtonText}>Voltar para o início</Text>
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
              <Text style={styles.modalText}>{erro}</Text>

              <TouchableOpacity style={styles.modalButton} onPress={() => setShowModalErro(false)}>
                <Text style={styles.modalButtonText}>Ok</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}