import React, { useState } from "react";
import { View, Text, Switch, Linking, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { TextInput, Checkbox } from "react-native-paper";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck'

import Header from "../Header";
import Breadcrumb from "../Breadcrumb"

import FirstStep from "./Steps/FirstStep";
import SecondStep from "./Steps/SecondStep";
import ThirdStep from "./Steps/ThirdStep";
import Confirmacao from "./Steps/Confirmacao";
import Consulta from "./Steps/Consulta";

import styles from "./styles";

const breadcrumb = [
  {label: 'Home', link: 'Home'}, 
  {label: 'Primeira Ligação', link: '', active: true}
]

export default function LigacaoAgua({ navigation }) {
  const [step, setStep] = useState(0);

  const [switch1, setSwitch1] = useState(false);
  const toggleSwitch1 = () => setSwitch1(previousState => !previousState);

  return (
    <SafeAreaView>
      <Header/>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Breadcrumb config={ breadcrumb } navigation={ navigation }/>
        {step < 5 ? (
          <View style={styles.steps}>
            <FontAwesomeIcon icon={ faCircle } size={14} style={styles.activeStep}/>
            <Text style={styles.activeStep}>Identificação</Text>
            <FontAwesomeIcon icon={ faMinus } size={14} style={step >= 1 ? styles.activeStep : styles.inactiveStep}/>
            <FontAwesomeIcon icon={ faCircle } size={14} style={step >= 1 ? styles.activeStep : styles.inactiveStep}/>
            <Text style={step >= 1 ? styles.activeStep : styles.inactiveStep}>Dados do imóvel</Text>
            <FontAwesomeIcon icon={ faMinus } size={14} style={step >= 4 ? styles.activeStep : styles.inactiveStep}/>
            <FontAwesomeIcon icon={ faCircle } size={14} style={step >= 4 ? styles.activeStep : styles.inactiveStep}/>
            <Text style={step >= 4 ? styles.activeStep : styles.inactiveStep}>Confirmação</Text>
          </View>
        ) : null}

        {step == 0 ? (<View style={styles.container}>
          <Text style={styles.title}>Ligação de água e esgoto</Text>

          <View style={styles.containerBorder}>
            <Text style={[styles.title, { alignSelf: 'flex-start', marginTop: 0}]}>Como pedir uma ligação de água e esgoto</Text>

            <View style={styles.rowStart}>
              <Text style={styles.itemNumber}>1</Text>
              <Text style={styles.textLeft}>Identifique seu endereço e veja se tem rede de água e esgoto, aceite o termo de condições adequadas e clique em pedir instalação</Text>
            </View>
            <View style={styles.rowStart}>
              <Text style={styles.itemNumber}>2</Text>
              <Text style={styles.textLeft}>Antes de iniciar a instalação do ramal interno de esgoto, entre em contato com a Sabesp para obter a localização e profundidade da rede de esgoto da sua rua.</Text>
            </View>
            <View style={styles.rowStart}>
              <Text style={styles.itemNumber}>3</Text>
              <Text style={styles.textLeft}>Faça seu login ou cadastre-se na Sabesp</Text>
            </View>
            <View style={styles.rowStart}>
              <Text style={styles.itemNumber}>4</Text>
              <Text style={styles.textLeft}>Preencha as informações e os termos</Text>
            </View>
            <View style={styles.rowStart}>
              <Text style={styles.itemNumber}>5</Text>
              <Text style={styles.textLeft}>Acompanhe o status da solicitação</Text>
            </View>
          </View>

          <View style={styles.containerBorder}>
            <Text style={[styles.title, { alignSelf: 'flex-start', marginTop: 0}]}>Condições adequadas para a ligação de água e esgoto</Text>

            <View style={styles.rowStart}>
              <FontAwesomeIcon icon={ faCircleCheck } size={16} style={styles.itemCheck}/>
              <Text style={styles.textLeft}>Terreno delimitado, cercado por muro, arames ou outros materiais, tornando seu imóvel independente dos vizinhos e da via pública.</Text>
            </View>
            <View style={styles.rowStart}>
              <FontAwesomeIcon icon={ faCircleCheck } size={16} style={styles.itemCheck}/>
              <Text style={styles.textLeft}>Imóvel em obra ou concluído</Text>
            </View>
            <View style={styles.rowStart}>
              <FontAwesomeIcon icon={ faCircleCheck } size={16} style={styles.itemCheck}/>
              <Text style={styles.textLeft}>Placa com número do imóvel afixada em local visível</Text>
            </View>
            <View style={styles.rowStart}>
              <FontAwesomeIcon icon={ faCircleCheck } size={16} style={styles.itemCheck}/>
              <Text style={styles.textLeft}>Acesso livre ao local de instalação</Text>
            </View>

            <View style={styles.linkContainer}>
              <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://site.sabesp.com.br/site/uploads/file/Folhetos/2022/AF_WEB_FOLHETO_PEDIDO_LIGACAO_AGUA_374x210mm_JULHO2022.pdf')}>
                Ver as orientações completas
              </Text>
            </View>
          </View>

          <View style={styles.containerBorder}>
            <Text style={[styles.title, { alignSelf: 'flex-start', marginTop: 0}]}>Peça uma ligação de água e esgoto.</Text>
            <Text style={styles.textCenter}>Confira se seu endereço tem rede de água e esgoto</Text>

            <TextInput 
              label='Cep' 
              placeholder="Digite o cep"
              style={{ marginTop: 10, marginBottom: 10 }}
              theme={{ colors: { primary: '#00a5e4' }}}
              keyboardType='numeric'
            />

            <View style={styles.switchContainer}>
              <Switch
                onValueChange={toggleSwitch1}
                value={switch1}
              />
              <Text style={styles.switchText}>
              Declaro que estou ciente que as instalações de água e esgoto deverão estar regularizadas para a realização dos serviços.
              </Text>
            </View>

            <TouchableOpacity 
              style={switch1 ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
              onPress={() => setStep(1)} 
              disabled={!switch1}>
              <Text style={styles.textButtonSubmit}>Pedir instalação</Text>
            </TouchableOpacity>
          </View>

        </View>) : null}

        {step == 1 ? (<FirstStep navigation={navigation} step={step} setStep={setStep}/>) : null}

        {step == 2 ? (<SecondStep navigation={navigation} step={step} setStep={setStep}/>) : null}

        {step == 3 ? (<ThirdStep navigation={navigation} step={step} setStep={setStep}/>) : null}

        {step == 4 ? (<Confirmacao navigation={navigation} step={step} setStep={setStep}/>) : null}

        {step == 5 ? (<Consulta navigation={navigation} step={step} setStep={setStep}/>) : null}
      </ScrollView>
    </SafeAreaView>
  );
}