import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { TextInput, Checkbox } from "react-native-paper";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck'
import { faSquareMinus } from '@fortawesome/free-regular-svg-icons/faSquareMinus'
import * as Progress from 'react-native-progress';

import styles from "../styles";

const width = Dimensions.get('window').width;

export default function Consulta({ navigation, step, setStep }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ligação de água e esgoto</Text>

      <FontAwesomeIcon icon={ faCircleCheck } size={100} style={styles.successIcon}/>
      <Text style={styles.title}>Solicitação enviada</Text>

      <Text style={styles.textLeftBold}>Ligação de água e esgoto</Text>

      <TextInput 
        label='Numero da solicitação' 
        style={styles.infoInput}
        theme={{ colors: { primary: '#00a5e4' }}}
        disabled={true}
        value={'15489562'}
      />

      <TextInput 
        label='Novo titular' 
        style={styles.infoInput}
        theme={{ colors: { primary: '#00a5e4' }}}
        disabled={true}
        value={'Walter *****a da Sil**'}
      />

      <TextInput 
        label='CPF' 
        style={styles.infoInput}
        theme={{ colors: { primary: '#00a5e4' }}}
        disabled={true}
        value={'333.444.***-66'}
      />

      <TextInput 
        label='Endereço' 
        style={styles.infoInput}
        theme={{ colors: { primary: '#00a5e4' }}}
        disabled={true}
        multiline={true}
        value={'Av Rodrigues Castro, 605, Jundiaí - SP'}
      />

      <Text style={[styles.textLeft, { marginTop: 10, color: '#999'}]}>Situação</Text>
      <View style={styles.row}>
        <FontAwesomeIcon icon={faSquareMinus} size={16} style={{ color: '#999', marginRight: 5 }}/>
        <Text style={styles.textLeft}>Em análise de informações</Text>
      </View>

      <Progress.Bar progress={1/4} width={width / 10 * 9} color='#00a5e4' style={{ alignSelf: 'center', marginBottom: 30}}/>

      <View style={styles.row}>
        <View style={{ width: '25%'}}>
          <Image style={{ height: 50, width: 50, margin: 10 }} source={require('../../../../assets/icons/iconSuccess.png')} />
          <Text style={styles.textSmall}>{'Solicitação de\nLigação\n16/11/2022'}</Text>
        </View>
        <View style={{ width: '25%'}}>
          <Image style={{ height: 50, width: 50, margin: 10 }} source={require('../../../../assets/icons/iconDocumento.png')} />
          <Text style={styles.textSmall}>{'Análise dos\nDocumentos'}</Text>
        </View>
        <View style={{ width: '25%'}}>
          <Image style={{ height: 50, width: 50, margin: 10 }} source={require('../../../../assets/icons/iconCalendario.png')} />
          <Text style={styles.textSmall}>{'Agendamento\n da Instalação'}</Text>
        </View>
        <View style={{ width: '25%'}}>
          <Image style={{ height: 50, width: 50, margin: 10 }} source={require('../../../../assets/icons/iconCasa.png')} />
          <Text style={styles.textSmall}>Concluído</Text>
        </View>
      </View>

      <Progress.Bar progress={1/4} width={width / 10 * 9} color='#00a5e4' style={{ alignSelf: 'center', marginBottom: 30, marginTop: 20}}/>

      <View style={styles.row}>
        <Image style={{ height: 10, width: 10, margin: 5 }} source={require('../../../../assets/icons/processing.png')} />
        <Image style={{ height: 10, width: 10, margin: 5 }} source={require('../../../../assets/imagens/doc_imovel.png')} />
        <Text style={styles.textLeft}>DOCUMENTO DO IMÓVEL</Text>
      </View>

      <View style={styles.row}>
        <Image style={{ height: 10, width: 10, margin: 5 }} source={require('../../../../assets/icons/processing.png')} />
        <Image style={{ height: 10, width: 10, margin: 5 }} source={require('../../../../assets/imagens/fachada_imovel.png')} />
        <Text style={styles.textLeft}>FACHADA DO IMÓVEL</Text>
      </View>

      <View style={styles.row}>
        <Image style={{ height: 10, width: 10, margin: 5 }} source={require('../../../../assets/icons/processing.png')} />
        <Image style={{ height: 10, width: 10, margin: 5 }} source={require('../../../../assets/imagens/foto_frontal_camisa.png')} />
        <Text style={styles.textLeft}>FOTO FRONTAL DA CAIXA UMA E TUBO CAMISA</Text>
      </View>

      <View style={styles.row}>
        <Image style={{ height: 10, width: 10, margin: 5 }} source={require('../../../../assets/icons/processing.png')} />
        <Image style={{ height: 10, width: 10, margin: 5 }} source={require('../../../../assets/imagens/foto_frontal_uma.png')} />
        <Text style={styles.textLeft}>FOTO FRONTAL DA CAIXA UMA</Text>
      </View>

      <View style={styles.row}>
        <Image style={{ height: 10, width: 10, margin: 5 }} source={require('../../../../assets/icons/processing.png')} />
        <Image style={{ height: 10, width: 10, margin: 5 }} source={require('../../../../assets/imagens/foto_caixa_inspecao.png')} />
        <Text style={styles.textLeft}>FOTO DA CAIXA DE INSPEÇÃO ABERTA</Text>
      </View>

      <View style={styles.row}>
        <Image style={{ height: 10, width: 10, margin: 5 }} source={require('../../../../assets/icons/processing.png')} />
        <Image style={{ height: 10, width: 10, margin: 5 }} source={require('../../../../assets/imagens/foto_caixa_inspecao.png')} />
        <Text style={styles.textLeft}>FOTO DA CAIXA DE INSPEÇÃO FECHADA</Text>
      </View>

      <View style={styles.row}>
        <Image style={{ height: 10, width: 10, margin: 5 }} source={require('../../../../assets/icons/processing.png')} />
        <Image style={{ height: 10, width: 10, margin: 5 }} source={require('../../../../assets/imagens/foto_caixa_inspecao.png')} />
        <Text style={styles.textLeft}>FOTO DO LOCAL DA CAIXA DE INSPEÇÃO</Text>
      </View>

      <TouchableOpacity style={styles.buttonSubmit} onPress={() => null}>
        <Text style={styles.textButtonSubmit}>Baixar comprovante em PDF</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textButtonOutline}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}