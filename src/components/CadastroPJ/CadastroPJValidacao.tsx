import React, { useState } from "react";
import { View, Text, Image, Switch, TouchableOpacity, SafeAreaView, ScrollView, Dimensions } from "react-native";
import { TextInput, Checkbox } from "react-native-paper";
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck'
import * as Progress from 'react-native-progress';
import moment from "moment";
import 'moment/locale/pt-br';

import Header from "../Header";
import styles from "./styles";

moment.locale('pt-br');

export default function CadastroPJValidacao({ navigation }) {
  const [progression, setProgression] = useState(0)
  const [isSelected, setSelection] = useState(false);
  const [chk1, setChk1] = useState(false)
  const [chk2, setChk2] = useState(false)
  const [chk3, setChk3] = useState(false)

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const width = Dimensions.get('window').width;

  const capitalizar = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <SafeAreaView>
      <Header />
      <ScrollView  contentContainerStyle={{ paddingBottom: 100 }}>
        {progression < 3 ? (
          <View style={styles.steps}>
            <FontAwesomeIcon icon={ faCircle } size={14} style={styles.activeStep}/>
            <Text style={styles.activeStep}>Identificação</Text>
            <FontAwesomeIcon icon={ faMinus } size={14} style={styles.activeStep}/>
            <FontAwesomeIcon icon={ faCircle } size={14} style={styles.activeStep}/>
            <Text style={styles.activeStep}>Validação</Text>
            <FontAwesomeIcon icon={ faMinus } size={14} style={progression == 2 ? styles.activeStep : styles.inactiveStep}/>
            <FontAwesomeIcon icon={ faCircle } size={14} style={progression == 2 ? styles.activeStep : styles.inactiveStep}/>
            <Text style={progression == 2 ? styles.activeStep : styles.inactiveStep}>Confirmação</Text>
          </View>
        ) : null}

        {/* Envio de documento */}
        {progression == 0 ? (
          <View style={styles.container}>
            <Text style={styles.cadastroTituloBold}>Cadastro de Representante Legal Pessoa Jurídica</Text>
            <Text style={styles.cadastroTituloBold}>Envio de documento</Text>
  
            <View style={{ flexDirection: 'row'}}>
              <Text style={styles.itemNumber}>1</Text>
              <Text style={styles.cadastroTextoLeft}>Selecione o documento que comprove seu vínculo com a empresa</Text>
            </View>
            <Text style={{color: '#606060'}}>Documento de comprovação</Text>
            <Picker 
              style={styles.cadastroTextoLeft}
              selectedValue={''}>
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Contrato Social" value="Contrato Social" />
              <Picker.Item label="Cartão do MEI" value="Cartão do MEI" />
              <Picker.Item label="Procuração com firma reconhecida" value="Procuração com firma reconhecida" />
            </Picker>
  
            <View style={{ flexDirection: 'row'}}>
              <Text style={styles.itemNumber}>2</Text>
              <Text style={styles.cadastroTextoLeft}>Carregue o arquivo digital</Text>
            </View>
            <View style={{ flexDirection: 'row'}}>
              <View style={{ width: '80%'}}>
                <Text style={[styles.cadastroTextoLeft, {marginLeft: 30, marginBottom: 15}]}>Documento de Comprovação</Text>
                <Text style={styles.cadastroTexto}>Carregar arquivo</Text>
              </View>
              <View style={{ width: '20%'}}>
                <Image style={styles.imgDocumento2} source={require('../../../assets/icons/anexoDocumento.png')} />
              </View>
            </View>
  
            <Text style={styles.cadastroTextoLeft}>O arquivo deve ter no máximo 10 MB e estar no formato .pdf, .jpg, .jpeg, ou .png.</Text>
            <Text style={styles.cadastroTextoLeft}>Agora seu documento será analisado. Avisaremos você pelo canal de comunicação escolhido em seu cadastro.</Text>
            
            <TouchableOpacity style={styles.buttonSubmit} onPress={() => setProgression(1) } >
              <Text style={styles.textButtonSubmit}>Enviar</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {/* Fornecimento responsável */}
        {progression == 1 ? (
          <View style={styles.container}>
            <Text style={styles.cadastroTituloBold}>Cadastro de Representante Legal Pessoa Jurídica</Text>

            <Text style={styles.cadastroTextoBold}>Eng****** do Brasil S/A.</Text>
            <Text style={styles.cadastroTexto}>{'09.433.094/0004-00\nAV. CORONEL CARLOS\nPRATA PRAIA GRANDE - SP'}</Text>

            <Text style={styles.cadastroTextoBold}>Selecione qual fornecimento você será responsável</Text>
            <Text style={styles.cadastroTexto}>
              Segue abaixo a lista de fornecimentos vinculados ao CNPJ digitado, selecione os fornecimentos no qual você irá representar
            </Text>

            <View style={[styles.checkBoxContainer, {marginBottom: 20}]}>
              <Checkbox
                status={isSelected ? 'checked' : 'unchecked'}
                onPress={() => setSelection(!isSelected)}
              />
              <Text style={styles.checkboxBold}>Selecionar Todos</Text>
            </View>

            <View style={styles.checkBoxContainer}>
              <Checkbox
                status={isSelected ? 'checked' : chk1 ? 'checked' : 'unchecked'}
                onPress={() => setChk1(!chk1)}
              />
              <View>
                <Text style={styles.checkboxSubText}>Código de Fornecimento 123456789</Text>
                <Text style={styles.checkboxText}>{'AV. CORONEL CARLOS PRATA\nPRAIA GRANDE - SP'}</Text>
              </View>
            </View>

            <View style={styles.checkBoxContainer}>
              <Checkbox
                status={isSelected ? 'checked' : chk2 ? 'checked' : 'unchecked'}
                onPress={() => setChk2(!chk2)}
              />

              <View>
                <Text style={styles.checkboxSubText}>Código de Fornecimento 123456000</Text>
                <Text style={styles.checkboxText}>{'AV RODRIGUES CASTRO, 605\nJUNDIAÍ - SP'}</Text>
              </View>
            </View>

            <View style={styles.checkBoxContainer}>
              <Checkbox
                status={isSelected ? 'checked' : chk3 ? 'checked' : 'unchecked'}
                onPress={() => setChk3(!chk3)}
              />
              <View>
                <Text style={styles.checkboxSubText}>Código de Fornecimento 123456789</Text>
                <Text style={styles.checkboxText}>{'AV PRESIDENTE VARGAS, 234\nSÃO PAULO - SP'}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.buttonSubmit} onPress={() => setProgression(2) } >
              <Text style={styles.textButtonSubmit}>Continuar</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {/* Confirmação */}
        {progression >= 2 ? (
          <View style={styles.container}>
            {progression == 2 ? (
              <Text style={styles.cadastroTituloBold}>Cadastro de Representante Legal Pessoa Jurídica</Text>
            ) : (
              <>
                <Text style={styles.cadastroTituloBold}>Solicitação feita com sucesso!!!</Text>
                <Text style={styles.cadastroTexto}>{capitalizar(moment().utcOffset('-0300').format('ddd. DD [de] MMM, [às] hh:mm[h]'))}</Text>

                <Text style={[styles.cadastroTituloBold, { textAlign: 'left' }]}>Cadastro de Representante Legal Pessoa Jurídica</Text>
                <Text style={styles.cadastroTextoLeft}>
                  O prazo para validação das informações fornecidas são de <Text style={{fontWeight: 'bold'}}>3 dias úteis</Text> e após aprovação será efetuada a alteração do Representante Legal.
                </Text>

                <Text style={styles.cadastroTextoLeft}>{'Código de Fornecimento\n'}<Text style={{fontWeight: 'bold', fontSize: 20}}>123456000</Text></Text>
                <Text style={styles.cadastroTextoLeft}>{'Número da solicitação\n'}<Text style={{fontWeight: 'bold', fontSize: 20}}>15489562</Text></Text>

                <Text style={[styles.cadastroTextoLeft, {marginBottom: 5}]}>Situação</Text>
                <View style={{ flexDirection: 'row'}}>
                  <Text style={[styles.cadastroTextoLeft, {marginBottom: 5}]}>
                    <FontAwesomeIcon icon={ faCircleCheck } size={20} style={{ color: '#00a000', padding: 50 }}/>
                    ⠀Solicitação concluída com sucesso
                  </Text>
                </View>
                <Progress.Bar progress={1} width={width / 10 * 9} color='#00c000' style={{ alignSelf: 'center', marginBottom: 30}}/>

                <Text style={styles.cadastroTituloBold}>Comprovante</Text>
              </>
            )}

            <Text style={styles.cadastroTituloBold}>Dados da Empresa</Text>

            <TextInput 
              label='Razão Social' 
              style={styles.cadastroTextoLeft}
              value={'Eng****** Brasil S/A.'} 
              disabled
            />

            <TextInput 
              label='CNPJ' 
              style={styles.cadastroTextoLeft}
              value={'09.433.094/0004-00'} 
              disabled
            />

            <Text style={styles.cadastroTituloBold}>Dados Pessoais</Text>

            {progression == 2 ? (
              <View style={styles.buttonOutlineMiniContainer}>
                <TouchableOpacity style={styles.buttonOutlineMini} onPress={() => navigation.navigate('CadastroPJComAcesso')}>
                  <Text style={styles.textButtonOutline}>Editar</Text>
                </TouchableOpacity>
              </View>
            ) : null}

            <TextInput 
              label='Nome completo' 
              style={styles.cadastroTextoLeft}
              value={'Fulano de Tal'} 
              disabled
            />

            <TextInput 
              label='CPF' 
              style={styles.cadastroTextoLeft}
              value={'123.456.789-10'} 
              disabled
            />

            <TextInput 
              label='Telefone' 
              style={styles.cadastroTextoLeft}
              value={'(11) xxxxx-9999'} 
              disabled
            />

            <TextInput 
              label='E-mail' 
              style={styles.cadastroTextoLeft}
              value={'fulanodetal@gmail.com'} 
              disabled
            />

            <TextInput 
              label='Endereço' 
              style={styles.cadastroTextoLeft}
              value={'Av. XV de Novembro, 1800 Santos - SP'} 
              disabled
            />

            <Text style={styles.cadastroTituloBold}>Código de fornecimento informado</Text>

            <TextInput 
              label='Código de fornecimento' 
              style={styles.cadastroTextoLeft}
              value={'123456789'} 
              disabled
            />

            <TextInput 
              label='Endereço' 
              style={styles.cadastroTextoLeft}
              value={'Av. Rodrigues Castro, 605 Jundiaí - SP'} 
              disabled
            />

            <TextInput 
              label='Código de fornecimento' 
              style={styles.cadastroTextoLeft}
              value={'Av. Pres. Vargas, 234 São Paulo - SP'} 
              disabled
            />

            <TextInput 
              label='Endereço' 
              style={styles.cadastroTextoLeft}
              value={'Av. XV de Novembro, 1800 Santos - SP'} 
              disabled
            />
            
            {progression == 2 ? (
              <>
                <View style={{ flexDirection: 'row' }}>
                  <Switch
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{marginTop: -90}}
                  />
                  <Text style={styles.cadastroTextoLeft}>
                    Declaro que sou o Representante Legal do CNPJ citado acima. Caso seja comprovada a falsidade das informações por mim fornecidas, serei responsabilizado civil e criminalmente.
                  </Text>
                </View>
                <TouchableOpacity 
                  style={isEnabled ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
                  onPress={() => setProgression(3)} 
                  disabled={!isEnabled}>
                  <Text style={styles.textButtonSubmit}>Continuar</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Home') } >
                  <Text style={styles.textButtonOutline}>Ir para Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSubmit} onPress={() => null } >
                  <Text style={styles.textButtonSubmit}>Baixar comprovante em PDF</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        ) : null}

        {/* Sucesso */}
        {progression == 3 ? (
          <View style={styles.container}>
            
          </View>
        ) : null}

      </ScrollView>
    </SafeAreaView>
  )
}
