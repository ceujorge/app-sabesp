import React, { useState } from "react";
import { View, Text, Image, Switch, TouchableOpacity, SafeAreaView, ScrollView, Linking } from "react-native";
import { TextInput } from "react-native-paper";
import Collapsible from 'react-native-collapsible';
import * as Animatable from 'react-native-animatable';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

import Header from "../../Header";
import Breadcrumb from "../../Breadcrumb"

import styles from "../styles";

const breadcrumb = [
  {label: 'Home', link: 'Home'}, 
  {label: 'Transferência de Titularidade', link: '', active: true}
]

export default function TransferenciaValidacao({ navigation }) {
  const [progression, setProgression] = useState(0)

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [collapsed, setCollapsed]: any = useState(true);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  return (
    <SafeAreaView>
      <Header />
      <Breadcrumb config={ breadcrumb } navigation={ navigation }/>
      <ScrollView  contentContainerStyle={{ paddingBottom: 150 }}>
        {progression == 0 ? (
          <View style={styles.container}>
            <View style={styles.steps}>
              <FontAwesomeIcon icon={ faCircle } size={14} style={styles.activeStep}/>
              <Text style={styles.activeStep}>Identificação</Text>
              <FontAwesomeIcon icon={ faMinus } size={14} style={ styles.activeStep}/>
              <FontAwesomeIcon icon={ faCircle } size={14} style={ styles.activeStep}/>
              <Text style={ styles.activeStep}>Dados do hidrômetro</Text>
              <FontAwesomeIcon icon={ faMinus } size={14} style={ styles.inactiveStep}/>
              <FontAwesomeIcon icon={ faCircle } size={14} style={ styles.inactiveStep}/>
              <Text style={ styles.inactiveStep}>Confirmação</Text>
            </View>
            <Text style={styles.cadastroTituloBold}>Transferencia de titularidade</Text>

            <Image style={styles.imgHidrometro} source={require('../../../../assets/imagens/hidrometro.png')} />

            <Text style={styles.cadastroTituloBold}>Informação do hidrômetro</Text>

            <View style={styles.row}>
              <Text style={styles.itemNumber}>1</Text>
              <Text style={styles.cadastroTextoLeft}>Vá até o hidrômetro do imóvel.</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.itemNumber}>2</Text>
              <Text style={styles.cadastroTextoLeft}>Tire uma foto do hidrômetro exibindo o consumo.</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.itemNumber}>3</Text>
              <Text style={styles.cadastroTextoLeft}>Carregue a foto.</Text>
            </View>

            <Text style={[styles.cadastroTextoLeft, {marginBottom: 10}]}>Imagem da leitura.</Text>
            <View style={[styles.row, {justifyContent: 'space-between'}]}>
              <Text style={[styles.cadastroTextoLeft, {marginLeft: 20}]}>Carregar a foto</Text>
              <Image style={styles.imgAnexo} source={require('../../../../assets/icons/anexo.png')} />
            </View>

            <View style={styles.row}>
              <Text style={styles.itemNumber}>4</Text>
              <Text style={styles.cadastroTextoLeft}>Informe o consumo do hidrômetro</Text>
            </View>

            <View style={styles.row}>
              <TextInput 
                label='Leirura do hidrômetro' 
                style={styles.cadastroInputHidrometro}
                theme={{ colors: { primary: '#00a5e4' }}}
              />
              <Text style={styles.textoHidrometro}>m3</Text>
            </View>

            <Text style={styles.cadastroTextoLeft}>Consumidor, é necessário informar (com foto) o consumo do seu hidrômetro até a data da solicitação da troca de titularidade. Caso não informe a foto, vamos considerar a ultima leitura.</Text>

            <TouchableOpacity style={styles.buttonSubmit} onPress={() => setProgression(1)}>
              <Text style={styles.textButtonSubmit}>Continuar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonOutline} onPress={() => setProgression(1)}>
              <Text style={styles.textButtonOutline}>Continuar sem informar</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {progression == 1 ? (
          <View style={styles.container}>
            <View style={styles.steps}>
              <FontAwesomeIcon icon={ faCircle } size={14} style={styles.activeStep}/>
              <Text style={styles.activeStep}>Identificação</Text>
              <FontAwesomeIcon icon={ faMinus } size={14} style={ styles.activeStep}/>
              <FontAwesomeIcon icon={ faCircle } size={14} style={ styles.activeStep}/>
              <Text style={ styles.activeStep}>Dados do hidrômetro</Text>
              <FontAwesomeIcon icon={ faMinus } size={14} style={ styles.inactiveStep}/>
              <FontAwesomeIcon icon={ faCircle } size={14} style={ styles.inactiveStep}/>
              <Text style={ styles.inactiveStep}>Confirmação</Text>
            </View>

            <View style={styles.buttonOutlineMiniContainer}>
              <TouchableOpacity style={styles.buttonOutlineMini} onPress={() => navigation.navigate('CadastroPJComAcesso')}>
                <Text style={styles.textButtonOutline}>Editar</Text>
              </TouchableOpacity>
            </View>

            <TextInput 
              label='Código de fornecimento' 
              style={styles.cadastroTextoLeft}
              value={'123456789'} 
              disabled
            />

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
              label='RG' 
              style={styles.cadastroTextoLeft}
              value={'11.222.333-XX'} 
              disabled
            />
                        
            <TextInput 
              label='Data de Nascimento' 
              style={styles.cadastroTextoLeft}
              value={'01/01/2000'} 
              disabled
            />

            <TextInput 
              label='Gênero' 
              style={styles.cadastroTextoLeft}
              value={'Masculino'} 
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

            <TouchableOpacity style={styles.collapsibleHeader} onPress={toggleExpanded}>
              <Text style={styles.collapsibleHeaderText}>Vencimento da fatura</Text>
              <FontAwesomeIcon icon={ collapsed ? faPlus : faMinus} size={22} style={styles.caret}/>
            </TouchableOpacity>
            <Collapsible style={styles.collapsible} collapsed={collapsed}>
              <Animatable.Text animation={collapsed ? undefined : 'fadeInDown'} duration={300} useNativeDriver >
                <Text style={styles.collapsibleItem}>As faturas emitidas com a nova titularidade vencerão no 9 (nono) dia útil após a emissão da fatura e serão entregues no endereço do fornecimento. Somente após a confirmação da Alteração da Titularidade será possível alterar o vencimento e a modalidade da entrega das faturas pela Sabesp Mobile ou demais canais de atendimento.</Text>
              </Animatable.Text>
            </Collapsible>            
            <View style={styles.switchContainer}>
              <Switch
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              <Text style={styles.switchText}>
                Declaro que sou o novo titular responsável pelas faturas do serviço de água e esgoto do endereço acima. Caso seja comprovada a falsidade das informações por mim fornecidas, serei responsabilizado civil e criminalmente.
              </Text>
            </View>

            <TouchableOpacity 
              style={isEnabled ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
              onPress={() => setProgression(2)} 
              disabled={!isEnabled}>
              <Text style={styles.textButtonSubmit}>Concluir a transferência</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {progression == 2 ? (
          <View style={styles.container}>
            <View style={styles.steps}>
              <FontAwesomeIcon icon={ faCircle } size={14} style={styles.activeStep}/>
              <Text style={styles.activeStep}>Identificação</Text>
              <FontAwesomeIcon icon={ faMinus } size={14} style={ styles.activeStep}/>
              <FontAwesomeIcon icon={ faCircle } size={14} style={ styles.activeStep}/>
              <Text style={ styles.activeStep}>Dados do hidrômetro</Text>
              <FontAwesomeIcon icon={ faMinus } size={14} style={ styles.activeStep}/>
              <FontAwesomeIcon icon={ faCircle } size={14} style={ styles.activeStep}/>
              <Text style={ styles.activeStep}>Confirmação</Text>
            </View>
            {/* <Text style={styles.cadastroTextoBold}>Fulano, validamos seu cadastro</Text>
            <Text style={styles.cadastroTexto}>Agora crie uma senha de acesso</Text> */}

            <Text style={styles.cadastroTituloBold}>{'Confirmação da\nTransferência de titularidade'}</Text>

            <View style={{ alignItems: 'center' }}>
              <FontAwesomeIcon icon={ faCircleCheck } size={100} style={{ color: '#00a000', margin: 30 }}/>
              <Text style={styles.cadastroTituloBold}>Solicitação concluída</Text>
            </View>

            <TextInput 
              label='Numero da solicitação' 
              style={styles.cadastroTextoLeft}
              value={'123456789'} 
              disabled
            />
        
            <TextInput 
              label='Data' 
              style={styles.cadastroTextoLeft}
              value={'23/01/2023 14:13'} 
              disabled
            />
        
            <TextInput 
              label='Leitura' 
              style={styles.cadastroTextoLeft}
              value={'123456'} 
              disabled
            />

            <Text style={styles.cadastroTituloBold}>De</Text>

            <TextInput 
              label='Nome' 
              style={styles.cadastroTextoLeft}
              value={'Walter da Silva'} 
              disabled
            />

            <Text style={styles.cadastroTituloBold}>Para</Text>

            <TextInput 
              label='Nome' 
              style={styles.cadastroTextoLeft}
              value={'Fulano de Tal'} 
              disabled
            />

            <TextInput 
              label='CPF' 
              style={styles.cadastroTextoLeft}
              value={'111.111.111-11'} 
              disabled
            />
            
            <TextInput 
              label='Endereço' 
              style={styles.cadastroTextoLeft}
              value={'Av. XV de Novembro, 1800 Santos - SP'} 
              disabled
            />

            <TouchableOpacity style={styles.buttonSubmit} onPress={() => null}>
              <Text style={styles.textButtonSubmit}>Baixar comprovante em pdf</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.textButtonOutline}>Ir para Home</Text>
            </TouchableOpacity>

          </View>        
        ) : null}
      </ScrollView>
    </SafeAreaView>
  )
}