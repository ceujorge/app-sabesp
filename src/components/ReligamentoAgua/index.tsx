import React, { useState } from "react";
import { View, Text, Modal, Linking, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { TextInput, Checkbox, RadioButton } from "react-native-paper";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck'

import Header from "../Header";
import Breadcrumb from "../Breadcrumb"

import styles from "./styles";

const breadcrumb = [
  {label: 'Home', link: 'Home'}, 
  {label: 'Religação', link: '', active: true}
]

export default function ReligamentoAgua({ navigation }) {
  const [step, setStep] = useState(1);
  const [fornecimento, setFornecimento] = useState('1018261920001');
  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [check1, setCheck1] = useState('');
  const [check2, setCheck2] = useState('');
  const [descricao, setDescricao] = useState('');

  function resetForm() {
    setStep(1);
    setCheck1('');
    setCheck2('');
    setShowModal(false);
    setShowModal2(false);
    setSelection(false);
    setSelection2(false);
    setSelection3(false);
    setDescricao('');
  }

  return (
    <SafeAreaView>
      <Header/>
      <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
        <Breadcrumb config={ breadcrumb } navigation={ navigation }/>
        <View style={styles.steps}>
          <FontAwesomeIcon icon={ faCircle } size={14} style={styles.activeStep}/>
          <Text style={styles.activeStep}>Identificação</Text>
          <FontAwesomeIcon icon={ faMinus } size={14} style={step >= 2 ? styles.activeStep : styles.inactiveStep}/>
          <FontAwesomeIcon icon={ faCircle } size={14} style={step >= 2 ? styles.activeStep : styles.inactiveStep}/>
          <Text style={step >= 2 ? styles.activeStep : styles.inactiveStep}>Detalhamento</Text>
          <FontAwesomeIcon icon={ faMinus } size={14} style={step == 3 ? styles.activeStep : styles.inactiveStep}/>
          <FontAwesomeIcon icon={ faCircle } size={14} style={step == 3 ? styles.activeStep : styles.inactiveStep}/>
          <Text style={step == 3 ? styles.activeStep : styles.inactiveStep}>Confirmação</Text>
        </View>

        <Text style={styles.title}>Religação</Text>

        {step === 1 ? (<View style={styles.container}>
          <Text style={styles.textLeft}>Selecione o fornecimento que será solicitado a Religação: </Text>
          <View>
            <TouchableOpacity style={styles.buttonFornecimento} onPress={() => setStep(2)}>
              <Text style={styles.textButtonFornecimento}>Ver</Text>
            </TouchableOpacity>

            <TextInput 
              mode="outlined"
              theme={{ colors: { primary: '#00a5e4' }}}
              placeholder="Digite" 
              value={fornecimento} 
              keyboardType='numeric'
              onChangeText={value => { setFornecimento(value) }} 
              maxLength={15}
            />

            <View style={styles.linkContainer}>
              <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://sabesp.s3.amazonaws.com/guiaFatura.pdf')}>
                Onde encontrar o número
              </Text>
            </View>

            <Text style={styles.textLeft}>Sujeito a cobranças adicionais conforme avaliação do técnico da Sabesp no momento da execução do serviço.</Text>
          </View>
        </View>) : null}

        {step === 2 ? (<View style={styles.container}>
          <TextInput 
            mode="outlined"
            theme={{ colors: { primary: '#00a5e4' }}}
            placeholder="Digite" 
            value={fornecimento} 
            keyboardType='numeric'
            onChangeText={value => { setFornecimento(value) }} 
            maxLength={15}
            style={{ marginBottom: 10 }}
            right={<TextInput.Icon name={'close-circle-outline'} onPress={() => setStep(1)}/>}
          />

          <Text style={styles.textLeft}>Aqui você solicita a religação do abastecimento de água do seu imóvel.</Text>
          <Text style={styles.textLeft}>Responda as questões abaixo:</Text>
          <Text style={styles.textLeft}>Houve mudança nas instalações da ligação de água existente no imóvel?</Text>

          <View style={styles.radioBar}>
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                value="Todos"
                status={ check1 === 'Sim' ? 'checked' : 'unchecked' }
                onPress={() => setCheck1('Sim')}
              />
              <Text style={styles.radioTexto}>Sim</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                value="Ativos"
                status={ check1 === 'Não' ? 'checked' : 'unchecked' }
                onPress={() => setCheck1('Não')}
              />
              <Text style={styles.radioTexto}>Não</Text>
            </View>
          </View>

          {check1 == 'Não' ? (<>
            <Text style={styles.textLeft}>As instalações apresentam algua parte danificada? (Sem hidrômetro/medidor, vazamento, peças quebradas, enferrujadas, etc)</Text>

            <View style={styles.radioBar}>
              <View style={{flexDirection: 'row'}}>
                <RadioButton
                  value="Todos"
                  status={ check2 === 'Sim' ? 'checked' : 'unchecked' }
                  onPress={() => setCheck2('Sim')}
                />
                <Text style={styles.radioTexto}>Sim</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton
                  value="Ativos"
                  status={ check2 === 'Não' ? 'checked' : 'unchecked' }
                  onPress={() => setCheck2('Não')}
                />
                <Text style={styles.radioTexto}>Não</Text>
              </View>
            </View>
          </>) : null}

          {check2 == 'Sim' ? (<>
            <Text style={styles.textLeft}>Descreva o que aconteceu</Text>

            <TextInput 
              theme={{ colors: { primary: '#00a5e4' }}}
              onChangeText={value => { setDescricao(value) }} 
              value={descricao}
            />
          </>) : null}

          {check1 == 'Sim' ? 
            (<TouchableOpacity 
              style={styles.buttonSubmit} 
              onPress={() => setShowModal2(true)}>
              <Text style={styles.textButtonSubmit}>Prosseguir</Text>
            </TouchableOpacity>)
            :
            (<TouchableOpacity 
              style={styles.buttonSubmit} 
              onPress={() => setStep(3)}>
              <Text style={styles.textButtonSubmit}>Prosseguir</Text>
            </TouchableOpacity>)
          }

          <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.textButtonOutline}>Voltar</Text>
          </TouchableOpacity>
        </View>) : null}

        {step == 3 ? (<View style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.textLeft}>Descrição: </Text>
            <Text style={styles.textLeftBold}>Religação</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.textLeft}>Fornecimento: </Text>
            <Text style={styles.textLeftBold}>{fornecimento}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.textLeft}>Endereço: </Text>
            <Text style={styles.textLeftBold}>{'Av. XV de Novembro, 1800 \nSantos - SP'}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.textLeft}>Responsável: </Text>
            <Text style={styles.textLeftBold}>Rafaela</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.textLeft}>CPF: </Text>
            <Text style={styles.textLeftBold}>123.456.789-10</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.textLeft}>Prazo de atendimento: </Text>
            <Text style={styles.textLeftBold}>48 horas</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.textLeft}>Preço: </Text>
            <Text style={styles.textLeftBold}>R$ 40,00</Text>
          </View>

          <Text style={styles.textLeft}>É necessário deixar acesso livre ao local e manter uma pessoa maior de 18 anos para atender nossa equipe.</Text>
          <Text style={styles.textLeft}>No momento da execução do serviço, se for constatada divergência entre as informações aqui registradas e as condições do local, poderá haver alteração no preço e/ou prazo informado.</Text>
          <Text style={styles.textLeft}>Para aprovar o orçamento é necessário ser maior de 18 anos.</Text>
          <Text style={styles.textLeft}>A religação somente poderá ser solicitada pelo titular ou representante com procuração em um de nossos canais de atendimento e haverá cobrança pelo serviço.</Text>

          <View style={styles.checkBoxContainer}>
            <Checkbox.Android
              status={isSelected2 ? 'checked' : 'unchecked'}
              onPress={() => setSelection2(!isSelected2)}
            />
            <Text>Sim, aprovo o orçamento e sou maior de 18 anos.</Text>
          </View>

          <View style={styles.checkBoxContainer}>
            <Checkbox.Android
              status={isSelected3 ? 'checked' : 'unchecked'}
              onPress={() => setSelection3(!isSelected3)}
            />
            <Text>Sim, confirmo o pedido de Religação deste fornecimento.</Text>
          </View>

          <TouchableOpacity 
            style={isSelected2 && isSelected3 ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
            onPress={() => setShowModal(true)}
            disabled={!(isSelected2 && isSelected3)}>
            <Text style={styles.textButtonSubmit}>Prosseguir</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.textButtonOutline}>Voltar</Text>
          </TouchableOpacity>
        </View>) : null}


        <Modal animationType="slide" visible={showModal} transparent={true}>
          <ScrollView>
            <View style={styles.modalView}>
              <View style={styles.center}>
                <FontAwesomeIcon icon={ faCircleCheck } size={100} style={{ color: '#00a000', marginTop: 30}}/>
                <Text style={styles.title}>Sua solicitação foi concluída!</Text>

                <View style={styles.row}>
                  <Text style={styles.textLeft}>Descrição: </Text>
                  <Text style={styles.textLeftBold}>Religação</Text>
                </View>
                
                <View style={styles.row}>
                  <Text style={styles.textLeft}>Numero da solicitação: </Text>
                  <Text style={styles.textLeftBold}>123456789</Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.textLeft}>Data e hora do pedido: </Text>
                  <Text style={styles.textLeftBold}>15/03/2022 13:25</Text>
                </View>

                <TouchableOpacity 
                  style={styles.buttonSubmit} 
                  onPress={() => {
                    resetForm();
                    navigation.navigate('Home')
                  }}>
                  <Text style={styles.textButtonSubmit}>Página Inicial</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('PreLogin')}>
                  <Text style={styles.textButtonOutline}>Sair</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </Modal>
        <Modal animationType="slide" visible={showModal2} transparent={true}>
          <ScrollView>
            <View style={styles.modalView}>
              <Text style={[styles.title, { color: '#00a5e4' }]}>Não foi possível concluir seu pedido</Text>
              <Text style={styles.textLeft}>Serviço indisponível pela Sabesp Mobile. Para solicitar a Religação de seu abastecimento entre em contato com um de nossos Canais de Atendimento.</Text>

              <TouchableOpacity 
                style={styles.buttonSubmit} 
                onPress={() => {
                  resetForm();
                  navigation.navigate('Home')
                }}>
                <Text style={styles.textButtonSubmit}>Página Inicial</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}