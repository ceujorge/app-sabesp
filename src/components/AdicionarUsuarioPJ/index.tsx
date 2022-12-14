import React, { useState } from "react";
import { View, Modal, Text, Image, Switch, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { TextInput, Checkbox} from "react-native-paper";
import { Picker } from '@react-native-picker/picker';
import Collapsible from 'react-native-collapsible';
import * as Animatable from 'react-native-animatable';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons/faCircleQuestion'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons/faCircleXmark'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck'

import Header from "../Header";
import styles from "./styles";
import mocks from "../../mocks/mocks";

function CheckBox({ text }) {
  const [checked, setChecked] = useState(false)

  return (
    <View style={styles.checkBoxContainer}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => setChecked(!checked)}
      />
      <Text style={styles.collapsibleItem}>{text}</Text>
    </View>
  )
}

export default function AdicionarUsuarioPJ({ navigation }) {
  const [step, setStep] = useState(1);
  const [perfil, setPerfil] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [renomear, setRenomear] = useState(false)

  const [collapsed1, setCollapsed1] = useState(true);
  const [collapsed2, setCollapsed2] = useState(true);
  const [collapsed3, setCollapsed3] = useState(true);
  const [collapsed4, setCollapsed4] = useState(true);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const toggleExpanded1 = () => setCollapsed1(!collapsed1);
  const toggleExpanded2 = () => setCollapsed2(!collapsed2);
  const toggleExpanded3 = () => setCollapsed3(!collapsed3);
  const toggleExpanded4 = () => setCollapsed4(!collapsed4);

  return(
    <SafeAreaView>
    <Header />
    <ScrollView  contentContainerStyle={{ paddingBottom: 100 }}>
      <View style={styles.steps}>
        <View style={styles.centerView}>
          <FontAwesomeIcon icon={ faCircle } size={14} style={[styles.activeStep, { color: '#00a5e4' }]}/>
          <Text style={styles.activeStep}>{'Cadastrar\nUsu??rio'}</Text>
        </View>
        <FontAwesomeIcon icon={ faMinus } size={14} style={styles.inactiveStep}/>
        <View style={styles.centerView}>
          <FontAwesomeIcon icon={ faCircle } size={14} style={step == 2 ? [styles.activeStep, { color: '#00a5e4' }] : styles.inactiveStep}/>
          <Text style={step == 2 ? styles.activeStep : styles.inactiveStep}>{'Confirma????o\nde Perfil'}</Text>
        </View>
        <FontAwesomeIcon icon={ faMinus } size={14} style={styles.inactiveStep}/>
        <View style={styles.centerView}>
          <FontAwesomeIcon icon={ faCircle } size={14} style={styles.inactiveStep}/>
          <Text style={styles.inactiveStep}>{'Finalizar\nCadastro'}</Text>
        </View>
      </View>
      {step == 1 ? (
        <>
          <Text style={styles.title}>Cadastrar Usu??rio</Text>

          <TextInput 
            label='Nome do usu??rio' 
            style={styles.cadastroInput}
            theme={{ colors: { primary: '#00a5e4' }}}
          />

          <TextInput 
            label='E-mail usu??rio' 
            style={styles.cadastroInput}
            theme={{ colors: { primary: '#00a5e4' }}}
          />

          <Text style={{marginLeft: 15, color: '#606060'}}>Documento de identifica????o</Text>
          <View style={{ flexDirection: 'row'}}>
            <Picker 
              style={{marginLeft: 15, width: '80%', backgroundColor: '#e7e7e7'}}
              onValueChange={value => setPerfil(value) }
              selectedValue={perfil}>
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="N??vel I" value="nivel1" />
              <Picker.Item label="N??vel II" value="nivel2" />
              <Picker.Item label="N??vel III" value="nivel3" />
            </Picker>
            <TouchableOpacity onPress={() => setShowModal(true)}>
              <FontAwesomeIcon icon={ faCircleQuestion } size={20} style={styles.questionIcon}/>
            </TouchableOpacity>
          </View>

          <Modal animationType="slide" visible={showModal} transparent={true}>
            <ScrollView>
              <View style={styles.modalView}>
                <Text style={styles.title}>{'ORIENTA????ES T??CNICAS PARA SELE????O DE PERFIL DE USU??RIO'}</Text>

                <Text style={styles.cadastroTextoLeft}>O perfil de usu??rio permite que o representante legal, configure um padr??o de acesso para uma determinada categoria de usu??rio. Esse recurso ?? o n??vel de permiss??es dentro do Sabesp Mobile.</Text>
                <Text style={styles.cadastroTextoLeft}>As op????es dispon??veis s??o:</Text>
                <Text style={styles.cadastroTextoLeft}>- N??vel III: avan??ado (master)</Text>
                <Text style={styles.cadastroTextoLeft}>- N??vel II: intermedi??rio</Text>
                <Text style={styles.cadastroTextoLeft}>- N??vel I: b??sico</Text>
                <Text style={styles.cadastroTextoLeft}>- Personalizado: o representante legal poder?? personalizar um novo perfil de usu??rio</Text>
                <Text style={styles.cadastroTextoLeft}>Voc?? tamb??m pode configurar o t??tulo dos n??veis de acesso com nomes que melhor se adequam ?? sua empresa (Vendedores, Gestores etc). Al??m disso, tamb??m ?? poss??vel alterar os servi??os dos n??veis existentes para melhor atender ??s suas necessidades, a partir das regras j?? existentes.</Text>

                <TouchableOpacity style={styles.centerView} onPress={() => setShowModal(false)}>
                  <FontAwesomeIcon icon={ faCircleXmark } size={20} style={styles.questionIcon}/>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Modal>

          <TouchableOpacity style={styles.buttonSubmit} onPress={() => setStep(2)}>
            <Text style={styles.textButtonSubmit}>Continuar</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.title}>Confirma????o de Perfil</Text>

          <View style={{flexDirection: 'row'}}>
            <TextInput 
              label='Perfil Selecionado' 
              style={[styles.cadastroInput, {width: '70%'}]}
              theme={{ colors: { primary: '#00a5e4' }}}
              value={'N??vel III'}
              disabled={!renomear}
            />
            <TouchableOpacity onPress={() => setRenomear(!renomear)}>
              <Image style={styles.imgRenomear} source={require('../../../assets/icons/renomear.png')} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.collapsibleHeader} onPress={toggleExpanded1}>
            <CheckBox text='Meu Cadastro' />
            <FontAwesomeIcon icon={ collapsed1 ? faPlus : faMinus } size={22} style={styles.caret}/>
          </TouchableOpacity>
          <Collapsible style={styles.collapsible} collapsed={collapsed1}>
            <Animatable.Text animation={collapsed1 ? undefined : 'fadeInDown'} duration={300} useNativeDriver >
              {mocks.permissoesPerfilPj[0].map((item, index) => (
                <CheckBox text={item} key={index}/>
              ))}
            </Animatable.Text>
          </Collapsible>

          <TouchableOpacity style={styles.collapsibleHeader} onPress={toggleExpanded2}>
            <CheckBox text='Minhas Faturas' />
            <FontAwesomeIcon icon={ collapsed2 ? faPlus : faMinus } size={22} style={styles.caret}/>
          </TouchableOpacity>
          <Collapsible style={styles.collapsible} collapsed={collapsed2}>
            <Animatable.Text animation={collapsed2 ? undefined : 'fadeInDown'} duration={300} useNativeDriver >
              {mocks.permissoesPerfilPj[1].map((item, index) => (
                <CheckBox text={item} key={index} />
              ))}
            </Animatable.Text>
          </Collapsible>

          <TouchableOpacity style={styles.collapsibleHeader} onPress={toggleExpanded3}>
            <CheckBox text='Emerg??ncias e Consertos' />
            <FontAwesomeIcon icon={ collapsed3 ? faPlus : faMinus } size={22} style={styles.caret}/>
          </TouchableOpacity>
          <Collapsible style={styles.collapsible} collapsed={collapsed3}>
            <Animatable.Text animation={collapsed3 ? undefined : 'fadeInDown'} duration={300} useNativeDriver >
              {mocks.permissoesPerfilPj[2].map((item, index) => (
                <CheckBox text={item} key={index}/>
              ))}
            </Animatable.Text>
          </Collapsible>
          
          <TouchableOpacity style={styles.collapsibleHeader} onPress={toggleExpanded4}>
            <CheckBox text='Liga????o de ??gua e esgoto' />
            <FontAwesomeIcon icon={ collapsed4 ? faPlus : faMinus } size={22} style={styles.caret}/>
          </TouchableOpacity>
          <Collapsible style={styles.collapsible} collapsed={collapsed4}>
            <Animatable.Text animation={collapsed4 ? undefined : 'fadeInDown'} duration={300} useNativeDriver >
              {mocks.permissoesPerfilPj[3].map((item, index) => (
                <CheckBox text={item} key={index} />
              ))}
            </Animatable.Text>
          </Collapsible>

          <View style={styles.switchContainer}>
            <Switch
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text style={styles.switchText}>
              Eu como representante legal, estou adicionando e autorizando o usu??rio acima adicionado a ter acesso a Sabesp Mobile, e realizando os servi??os que est??o de acordo com o perfil selecionado. Declaro que serei respons??vel pelas a????es do usu??rio cadastrado dentro da Sabesp Mobile.
            </Text>
          </View>

          <TouchableOpacity 
            style={isEnabled ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
            onPress={() => setShowModal2(true)} 
            disabled={!isEnabled}>
            <Text style={styles.textButtonSubmit}>Adicionar Usu??rio</Text>
          </TouchableOpacity>

          <Modal animationType="slide" visible={showModal2} transparent={true}>
            <ScrollView>
              <View style={styles.modalView}>
                <View style={styles.centerView}>
                  <FontAwesomeIcon icon={ faCircleCheck } size={100} style={{ color: '#00a000', marginTop: 30}}/>
                  <Text style={styles.title}>Perfil adicionado com sucesso!</Text>
                  <Text style={styles.cadastroTexto}>O perfil foi adicionado com sucesso, o usu??rio cadastrado receber?? um e-mail de valida????o para conclus??o do cadastro.</Text>

                  <TouchableOpacity 
                    style={styles.buttonSubmit} 
                    onPress={() => {
                      setStep(1);
                      setShowModal2(false);
                      setIsEnabled(false);
                      navigation.navigate('FornecimentoEncontrado')
                    }}>
                    <Text style={styles.textButtonSubmit}>Fechar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </Modal>
        </>
      )}

    </ScrollView>
    </SafeAreaView>
  )
}