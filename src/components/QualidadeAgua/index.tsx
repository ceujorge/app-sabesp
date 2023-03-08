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
  {label: 'Qualidade da água', link: '', active: true}
]

export default function QualidadeAgua({ navigation }) {
  const [step, setStep] = useState(1);
  const [fornecimento, setFornecimento] = useState('1018261920001');
  const [check1, setCheck1] = useState('');
  const [check2, setCheck2] = useState('');
  const [check3, setCheck3] = useState('');
  const [check4, setCheck4] = useState('');
  const [check5, setCheck5] = useState('');
  const [check6, setCheck6] = useState('');
  const [radio, setRadio] = useState('');
  const [checked, setChecked] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [modal, setModal] = useState(false);
  const [modalAviso, setModalAviso] = useState(false);

  const setMascaraTel = function (tel) {
    tel = tel.replace(/\D/g, "").substring(0, 11); //Remove tudo o que não é dígito
    tel = tel.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    tel = tel.replace(/(\d)(\d{4})$/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    setTelefone(tel)
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
          <Text style={step >= 5 ? styles.activeStep : styles.inactiveStep}>Confirmação</Text>
        </View>

        <Text style={styles.title}>Qualidade da água</Text>

        {step == 1 ? (<View style={styles.container}>
          <Text style={styles.textLeft}>A Sabesp só verifica a qualidade da água que ela mesma fornece.</Text>
          <Text style={styles.textLeft}>Antes de prosseguir este atendimento, verifique se o problema ocorre na primeira torneira após o cavalete.</Text>
          <Text style={styles.textLeft}>Em quais locais do seu imóvel a água apresenta problema? Seleciona uma ou mais opções:</Text>

          <View style={styles.checkBoxContainer}>
            <Checkbox
              status={check1 ? 'checked' : 'unchecked'}
              onPress={() => setCheck1(!check1)}
            />
            <Text style={[styles.textLeft, {marginTop: 10}]}>Na primeira torneira após o cavalete (a água vem direto da rua)</Text>
          </View>

          <View style={styles.checkBoxContainer}>
            <Checkbox
              status={check2 ? 'checked' : 'unchecked'}
              onPress={() => setCheck2(!check2)}
            />
            <Text style={[styles.textLeft, {marginTop: 10}]}>Após passar por caixa d'água ou reservatório</Text>
          </View>

          <View style={styles.checkBoxContainer}>
            <Checkbox
              status={check3 ? 'checked' : 'unchecked'}
              onPress={() => setCheck3(!check3)}
            />
            <Text style={[styles.textLeft, {marginTop: 10}]}>Em uma torneira do imóvel, mas não sei se a água vem direto da rua ou da caixa d’água</Text>
          </View>

          <TouchableOpacity 
            style={(check1 || check2 || check3) ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
            onPress={() => check1 ? setStep(2) : setModalAviso(true)} 
            disabled={!(check1 || check2 || check3)}>
            <Text style={styles.textButtonSubmit}>Prosseguir</Text>
          </TouchableOpacity>

          <Modal animationType="slide" visible={modalAviso} transparent={true}>
            <ScrollView>
              <View style={styles.modalView}>
                <View style={styles.centerView}>
                  <Text style={styles.title}>Aviso</Text>
                  <Text style={styles.textLeft}>A Sabesp somente verifica a qualidade da água até o cavalete. Verifique se as instações internas estão em boas condições e realize a cada seis meses a <Text style={styles.hyperlink}>limpeza da caixa d'água.</Text></Text>

                  <TouchableOpacity 
                    style={styles.buttonSubmit} 
                    onPress={() => {
                      setStep(1);
                      setModalAviso(false);
                      navigation.navigate('Home')
                    }}>
                    <Text style={styles.textButtonSubmit}>Página inicial</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </Modal>
        </View>) : null}
        
        {step == 2 ? (<View style={styles.container}>
          <Text style={styles.textLeft}>Em quais locais do seu imóvel a água apresenta problema? Selecione uma ou mais opções:</Text>
          <Text style={styles.textLeft}>Resposta: Na primeira torneira após o cavalete (a água vem direto da rua){check2 ? ', Após passar por caixa d’água ou reservatório' : ''}{check3 ? ', Em uma torneira do imóvel, mas não sei se a água vem direto da rua ou da caixa d’água' : ''}</Text>

          <Text style={styles.textLeft}>Qual a situação da sua água?</Text>

          <View style={styles.checkBoxContainer}>
            <Checkbox
              status={check4 ? 'checked' : 'unchecked'}
              onPress={() => setCheck4(!check4)}
            />
            <Text style={[styles.textLeft, {marginTop: 10}]}>Gosto estranho</Text>
          </View>

          <View style={styles.checkBoxContainer}>
            <Checkbox
              status={check5 ? 'checked' : 'unchecked'}
              onPress={() => setCheck5(!check5)}
            />
            <Text style={[styles.textLeft, {marginTop: 10}]}>Cheiro ruim</Text>
          </View>

          <View style={styles.checkBoxContainer}>
            <Checkbox
              status={check6 ? 'checked' : 'unchecked'}
              onPress={() => setCheck6(!check6)}
            />
            <Text style={[styles.textLeft, {marginTop: 10}]}>Água suja</Text>
          </View>

          <TouchableOpacity 
            style={(check4 || check5 || check6) ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
            onPress={() => setStep(3)} 
            disabled={!(check4 || check5 || check6)}>
            <Text style={styles.textButtonSubmit}>Continuar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.buttonOutline} onPress={() => setStep(1)}>
            <Text style={styles.textButtonOutline}>Voltar</Text>
          </TouchableOpacity>
        </View>) : null}

        {step == 3 ? (<View style={styles.container}>
          <Text style={styles.textLeft}>Em quais locais do seu imóvel a água apresenta problema? Selecione uma ou mais opções:</Text>
          <Text style={styles.textLeft}>Resposta: Na primeira torneira após o cavalete (a água vem direto da rua){check2 ? ', Após passar por caixa d’água ou reservatório' : ''}{check3 ? ', Em uma torneira do imóvel, mas não sei se a água vem direto da rua ou da caixa d’água' : ''}</Text>

          <Text style={styles.textLeft}>Qual a situação da sua água?</Text>
          <Text style={styles.textLeft}>Resposta: {`${check4 ? 'Gosto estranho' : ''}${check5 ? ' Cheiro ruim' : ''}${check6 ? ' Água suja' : ''}`}</Text>

          <Text style={styles.textLeft}>Os vizinhos tem o mesmo problema?</Text>
          <View style={styles.radioBar}>
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                value="Sim"
                status={ radio === 'Sim' ? 'checked' : 'unchecked' }
                onPress={() => setRadio('Sim')}
              />
              <Text style={styles.radioTexto}>Sim</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                value="Não/Não sei"
                status={ radio === 'Não/Não sei' ? 'checked' : 'unchecked' }
                onPress={() => setRadio('Não/Não sei')}
              />
              <Text style={styles.radioTexto}>Não/Não sei</Text>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.buttonSubmit} 
            onPress={() => setStep(4)}>
            <Text style={styles.textButtonSubmit}>Continuar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.buttonOutline} onPress={() => setStep(2)}>
            <Text style={styles.textButtonOutline}>Voltar</Text>
          </TouchableOpacity>
          
        </View>) : null}
        
        {step == 4 ? (<View style={styles.container}>
          <TextInput 
            label='Fornecimento' 
            theme={{ colors: { primary: '#00a5e4' }}}
            value={fornecimento}
            onChangeText={value => setFornecimento(value)}
          />

          <TouchableOpacity 
            style={styles.buttonSubmit} 
            onPress={() => setStep(5)}>
            <Text style={styles.textButtonSubmit}>Continuar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.buttonOutline} onPress={() => setStep(3)}>
            <Text style={styles.textButtonOutline}>Voltar</Text>
          </TouchableOpacity>
        </View>) : null}

        {step == 5 ? (<View style={styles.container}>
          <Text style={styles.title}>Para prosseguir, verifique se os dados estão corretos:</Text>

          <Text style={styles.textLeftBold}>Em quais locais do seu imóvel a água apresenta problema? Selecione uma ou mais opções:</Text>
          <Text style={styles.textLeft}>Resposta: Na primeira torneira após o cavalete (a água vem direto da rua){check2 ? ', Após passar por caixa d’água ou reservatório' : ''}{check3 ? ', Em uma torneira do imóvel, mas não sei se a água vem direto da rua ou da caixa d’água' : ''}</Text>

          <Text style={styles.textLeftBold}>O que está acontecendo com a sua água?</Text>
          <Text style={styles.textLeft}>Resposta: {`${check4 ? 'Gosto estranho' : ''}${check5 ? ' Cheiro ruim' : ''}${check6 ? ' Água suja' : ''}`}</Text>  

          <Text style={styles.textLeftBold}>Os vizinhos tem o mesmo problema?</Text>
          <Text style={styles.textLeft}>Resposta: {radio}</Text>

          <Text style={styles.title}>Com base nas respostas fornecidas será aberto o seguinte serviço:</Text>

          <Text style={styles.textLeft}>
            <Text style={styles.textLeftBold}>Descrição: </Text>
            Qualidade da água {check4 ? 'Gosto' : check5 ? 'Cheiro' : 'Cor'}
          </Text>

          <Text style={styles.textLeft}><Text style={styles.textLeftBold}>Endereço: </Text>RUA SERRA GERAL, N 114, VILA GUILHERME FM - FRANCISCO MORATO - SP</Text>
          <Text style={styles.textLeft}><Text style={styles.textLeftBold}>Prazo de atendimento: </Text>24 horas</Text>
          <Text style={styles.textLeft}><Text style={styles.textLeftBold}>Preço: </Text>Gratuíto</Text>
          <Text style={styles.textLeft}><Text style={styles.textLeftBold}>Importante: </Text>No momento da execução do serviço, ser for constatada divergência entre as informações aqui registradas e as condições do local, pode haver alteração no preço e/ou prazo informados.</Text>

          <View style={styles.checkBoxContainer}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => setChecked(!checked)}
            />
            <Text style={[styles.textLeftBold, {marginTop: 10}]}>Sim, confirmo o pedido</Text>
          </View>

          <TouchableOpacity 
            style={checked ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
            onPress={() => setStep(6)} 
            disabled={!checked}>
            <Text style={styles.textButtonSubmit}>Continuar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.buttonOutline} onPress={() => setStep(4)}>
            <Text style={styles.textButtonOutline}>Voltar</Text>
          </TouchableOpacity>
        </View>) : null}
        
        {step == 6 ? (<View style={styles.container}>
          <Text style={styles.textLeft}>Para continuar o seu atendimento, será necessário identificar-se.</Text> 
          <Text style={styles.textLeft}>As informações aqui registradas são de uso exclusivo da Sabesp, não sendo compartilhadas com outras empresas.</Text> 

          <TextInput 
            label='Nome*' 
            theme={{ colors: { primary: '#00a5e4' }}}
            value={nome}
            style={{ margin: 10 }}
            onChangeText={value => setNome(value)}
          />
          <TextInput 
            label='Sobrenome*' 
            theme={{ colors: { primary: '#00a5e4' }}}
            value={sobrenome}
            style={{ margin: 10 }}
            onChangeText={value => setSobrenome(value)}
          />
          <TextInput 
            label='Telefone*' 
            theme={{ colors: { primary: '#00a5e4' }}}
            value={telefone}
            style={{ margin: 10 }}
            keyboardType='numeric'
            onChangeText={value => setMascaraTel(value)}
          />
          <TextInput 
            label='Email*' 
            theme={{ colors: { primary: '#00a5e4' }}}
            value={email}
            style={{ margin: 10 }}
            onChangeText={value => setEmail(value)}
          />

          <Text style={styles.textLeftBold}>* Campos obrigatórios</Text>

          <TouchableOpacity 
            style={(nome && sobrenome && telefone && email) ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
            onPress={() => setModal(true)} 
            disabled={!(nome && sobrenome && telefone && email)}>
            <Text style={styles.textButtonSubmit}>Continuar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.buttonOutline} onPress={() => setStep(4)}>
            <Text style={styles.textButtonOutline}>Voltar</Text>
          </TouchableOpacity>

          <Modal animationType="slide" visible={modal} transparent={true}>
            <ScrollView>
              <View style={styles.modalView}>
                <View style={styles.centerView}>
                  <FontAwesomeIcon icon={ faCircleCheck } size={100} style={{ color: '#00a000', marginTop: 30}}/>
                  <Text style={styles.title}>Sua solicitação foi concluída!</Text>
                  <Text style={styles.textLeft}>Descrição: <Text style={styles.textLeftBold}>Qualidade da água {check4 ? 'Gosto' : check5 ? 'Cheiro' : 'Cor'}</Text></Text>
                  <Text style={styles.textLeft}>Número da solicitação: <Text style={styles.textLeftBold}>12345678910</Text></Text>
                  <Text style={styles.textLeft}>Data e hora do pedido: <Text style={styles.textLeftBold}>09/03/2023 15:32.</Text></Text>

                  <TouchableOpacity 
                    style={styles.buttonSubmit} 
                    onPress={() => {
                      setStep(1);
                      setModal(false);
                      navigation.navigate('Home')
                    }}>
                    <Text style={styles.textButtonSubmit}>Página inicial</Text>
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