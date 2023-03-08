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
  {label: 'Falta de Água', link: '', active: true}
]

export default function FaltaDeAgua({ navigation }) {
  const [step, setStep] = useState(1);
  const [fornecimento, setFornecimento] = useState('1018261920001');
  const [check1, setCheck1] = useState('');
  const [check2, setCheck2] = useState('');
  const [checked, setChecked] = useState(false);
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [modal, setModal] = useState(false);

  const setMascaraTel = function (tel) {
    tel = tel.replace(/\D/g, "").substring(0, 11);                   //Remove tudo o que não é dígito
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
          <Text style={step >= 4 ? styles.activeStep : styles.inactiveStep}>Confirmação</Text>
        </View>

        <Text style={styles.title}>Falta de água ou pouca pressão</Text>

        {step == 1 ? (<View style={styles.container}>
          <Text style={styles.textLeft}>A falta de água pode ocorrer por vários motivos. Antes de prosseguir este atendimento, por favor, verifique se:</Text>
          <Text style={styles.textLeft}>- A falta de água é apenas no seu imóvel ou se os seus vizinhos também estão sem água.</Text>
          <Text style={styles.textLeft}>- O registro do seu cavalete está aberto.</Text>
          <Text style={styles.textLeft}>- Sai água da torneira de jardim ou da primeira torneira direto da rua, mas não tem água no interior do seu imóvel. Neste caso, pode haver algum problema interno como, por exemplo, um vazamento. <Text style={styles.hyperlink}>Caso seja necessário, consulte dicas e testes para identificar vazamentos.</Text></Text>

          <TouchableOpacity style={styles.buttonSubmit} onPress={() => setStep(2)}>
            <Text style={styles.textButtonSubmit}>Prosseguir</Text>
          </TouchableOpacity>
        </View>) : null}
        
        {step == 2 ? (<View style={styles.container}>
          <Text style={styles.textLeft}>Responda as questões abaixo.</Text>

          <Text style={styles.textLeft}>O que está acontecendo com a sua água?</Text>
          <View style={styles.radioBar}>
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                value="naoSai"
                status={ check1 === 'naoSai' ? 'checked' : 'unchecked' }
                onPress={() => setCheck1('naoSai')}
              />
              <Text style={styles.radioTexto}>Não sai água</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                value="saiPouca"
                status={ check1 === 'saiPouca' ? 'checked' : 'unchecked' }
                onPress={() => setCheck1('saiPouca')}
              />
              <Text style={styles.radioTexto}>Sai pouca água</Text>
            </View>
          </View>

          <Text style={styles.textLeft}>Os vizinhos têm o mesmo problema?</Text>
          <View style={styles.radioBar}>
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                value="sim"
                status={ check2 === 'sim' ? 'checked' : 'unchecked' }
                onPress={() => setCheck2('sim')}
              />
              <Text style={styles.radioTexto}>Sim</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                value="nao"
                status={ check2 === 'nao' ? 'checked' : 'unchecked' }
                onPress={() => setCheck2('nao')}
              />
              <Text style={styles.radioTexto}>Não/Não sei</Text>
            </View>
          </View>

          <TouchableOpacity 
            style={check1 && check2 ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
            onPress={() => setStep(3)} 
            disabled={!(check1 && check2)}>
            <Text style={styles.textButtonSubmit}>Continuar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.buttonOutline} onPress={() => setStep(1)}>
            <Text style={styles.textButtonOutline}>Voltar</Text>
          </TouchableOpacity>
        </View>) : null}
        
        {step == 3 ? (<View style={styles.container}>
          <TextInput 
            label='Fornecimento' 
            theme={{ colors: { primary: '#00a5e4' }}}
            value={fornecimento}
            onChangeText={value => setFornecimento(value)}
          />

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
          <Text style={styles.title}>Para prosseguir, verifique se os dados estão corretos:</Text>

          <Text style={styles.textLeftBold}>O que está acontecendo com a sua água?</Text>
          <Text style={styles.textLeft}>Resposta: {check1 == 'naoSai' ? 'Não sai água' : 'Sai pouca água'}</Text>  

          <Text style={styles.textLeftBold}>Os vizinhos tem o mesmo problema?</Text>
          <Text style={styles.textLeft}>Resposta: {check2 == 'sim' ? 'Sim' : 'Não'}</Text>

          <Text style={styles.title}>Com base nas respostas fornecidas será aberto o seguinte serviço:</Text>

          <Text style={styles.textLeft}>
            <Text style={styles.textLeftBold}>Descrição: </Text>
            {check1 == 'naoSai' ? 'Falta de Água' : 'Pouca Pressão'} {check2 == 'sim' ? 'Geral' : 'Local'}
          </Text>

          <Text style={styles.textLeft}><Text style={styles.textLeftBold}>Endereço: </Text>RUA SERRA GERAL, N 114, VILA GUILHERME FM - FRANCISCO MORATO - SP</Text>
          <Text style={styles.textLeft}><Text style={styles.textLeftBold}>Prazo de atendimento: </Text>24 horas</Text>
          <Text style={styles.textLeft}><Text style={styles.textLeftBold}>Importante: </Text>No momento da execução do serviço, ser for constatada divergência entre as informações aqui registradas e as condições do local, pode haver alteração no preço e/ou prazo informados.</Text>
          <Text style={styles.textLeft}><Text style={styles.textLeftBold}>Preço: </Text>Gratuíto</Text>

          <View style={styles.checkBoxContainer}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => setChecked(!checked)}
            />
            <Text style={[styles.textLeftBold, {marginTop: 10}]}>Sim, confirmo o pedido</Text>
          </View>

          <TouchableOpacity 
            style={checked ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
            onPress={() => setStep(5)} 
            disabled={!checked}>
            <Text style={styles.textButtonSubmit}>Continuar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.buttonOutline} onPress={() => setStep(3)}>
            <Text style={styles.textButtonOutline}>Voltar</Text>
          </TouchableOpacity>
        </View>) : null}
        
        {step == 5 ? (<View style={styles.container}>
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
                  <Text style={styles.textLeft}>Descrição: <Text style={styles.textLeftBold}>{check1 == 'naoSai' ? 'Falta de Água' : 'Pouca Pressão'} {check2 == 'sim' ? 'Geral' : 'Local'}</Text></Text>
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