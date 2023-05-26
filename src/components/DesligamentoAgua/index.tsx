import React, { useState } from "react";
import { View, Text, Modal, Linking, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { TextInput, Checkbox } from "react-native-paper";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck'

import Header from "../Header";
import Breadcrumb from "../Breadcrumb"

import styles from "./styles";

const breadcrumb = [
  {label: 'Home', link: 'Home'}, 
  {label: 'Desligamento Temporário', link: '', active: true}
]

export default function DesligamentoAgua({ navigation }) {
  const [step, setStep] = useState(1);
  const [fornecimento, setFornecimento] = useState('1018261920001');
  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView>
      <Header/>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Breadcrumb config={ breadcrumb } navigation={ navigation }/>
        <View style={styles.steps}>
          <FontAwesomeIcon icon={ faCircle } size={14} style={styles.activeStep}/>
          <Text style={styles.activeStep}>Identificação</Text>
          <FontAwesomeIcon icon={ faMinus } size={14} style={step == 2 ? styles.activeStep : styles.inactiveStep}/>
          <FontAwesomeIcon icon={ faCircle } size={14} style={step == 2 ? styles.activeStep : styles.inactiveStep}/>
          <Text style={step == 2 ? styles.activeStep : styles.inactiveStep}>Solicitação</Text>
          <FontAwesomeIcon icon={ faMinus } size={14} style={styles.inactiveStep}/>
          <FontAwesomeIcon icon={ faCircle } size={14} style={styles.inactiveStep}/>
          <Text style={styles.inactiveStep}>Confirmação</Text>
        </View>

        <Text style={styles.title}>Desligamento Temporário</Text>

        {step === 1 ? (<View style={styles.container}>
          <Text style={styles.textLeft}>Aqui você solicita o desligamento temporário, ou seja, a interrupção temporária do abastecimento de água, sem a retirada das instalações da ligação.</Text>
          <Text style={styles.textLeft}>Este serviço deve ser solicitado sempre que o imóvel ficar vago por um determinado período, evitando que sejam emitidas faturas mensais durante o período em que o imóvel estiver vago sem o consumo de água.</Text>
          <Text style={styles.textLeft}>Após a execução do serviço, para que o abastecimento de água seja restabelecido e as faturas do serviço de água e/ou esgoto voltem a ser enviadas, você deverá solicitar a Religação em um de nossos canais de atendimento.</Text>

          <Text style={styles.textLeftBold}>O desligamento temporário não retira seu nome da fatura, nem encerra sua relação contratual com a Sabesp.</Text>

          <Text style={styles.textLeft}>Informe o fornecimento que será solicitado o Desligamento Temporário:</Text>

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

          <Text style={styles.textLeftBold}>Desligamento temporário (Supressão à pedido)</Text>

          <View style={styles.row}>
            <Text style={styles.textLeft}>Fornecimento: </Text>
            <Text style={styles.textLeftBold}>{fornecimento}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.textLeft}>Endereço: </Text>
            <Text style={styles.textLeftBold}>{'Av. XV de Novembro, 1800 \nSantos - SP'}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.textLeft}>Prazo de atendimento: </Text>
            <Text style={styles.textLeftBold}>07 dias úteis</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.textLeft}>Preço: </Text>
            <Text style={styles.textLeftBold}>Gratuíto</Text>
          </View>

          <Text style={styles.textLeft}>É necessário deixar acesso livre ao local e manter uma pessoa maior de 18 anos para atender nossa equipe.</Text>
          <Text style={styles.textLeft}>Havendo resíduo do consumo, ocorrerá a cobrança em fatura posterior.</Text>
          <Text style={styles.textLeft}>O desligamento não será realizado, caso no momento da execução do serviço, for constatado que o imóvel encontra-se ocupado.</Text>
          <Text style={styles.textLeft}>A religação somente poderá ser solicitada pelo titular ou representante com procuração em um de nossos canais de atendimento, e haverá cobrança pelo serviço.</Text>

          <View style={styles.checkBoxContainer}>
            <Checkbox.Android
              status={isSelected2 ? 'checked' : 'unchecked'}
              onPress={() => setSelection2(!isSelected2)}
            />
            <Text>Sim, autorizo o serviço de desligamento temporário para o abastecimento da ligação de água deste fornecimento</Text>
          </View>

          <TouchableOpacity 
            style={isSelected2 ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
            onPress={() => setShowModal(true)}
            disabled={!isSelected2}>
            <Text style={styles.textButtonSubmit}>Prosseguir</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.textButtonOutline}>Voltar</Text>
          </TouchableOpacity>

          <Modal animationType="slide" visible={showModal} transparent={true}>
            <ScrollView>
              <View style={styles.modalView}>
                <View style={styles.center}>
                  <FontAwesomeIcon icon={ faCircleCheck } size={100} style={{ color: '#00a000', marginTop: 30}}/>
                  <Text style={styles.title}>Sua solicitação foi concluída!</Text>

                  <View style={styles.row}>
                    <Text style={styles.textLeft}>Descrição: </Text>
                    <Text style={styles.textLeftBold}>{'Desligamento temporário \n(Supressão à pedido)'}</Text>
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
                      setStep(1);
                      setShowModal(false);
                      setSelection2(false);
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
        </View>) : null}
      </ScrollView>
    </SafeAreaView>
  );
}