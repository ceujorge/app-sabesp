import React, { useState } from "react";
import { View, Text, Image, Linking, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons/faCircleQuestion'


import styles from "../styles";

export default function SecondStep({ navigation, step, setStep }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>2/3</Text>
      <Text style={styles.title}>Documentos do imóvel</Text>
      
      <Text style={styles.textLeft}>Documento de identificação</Text>
      <Picker selectedValue={''}>
        <Picker.Item label="Selecione" value="" />
        <Picker.Item label="Escritura Pública" value="EscrituraPublica" />
        <Picker.Item label="Matrícula do Registro do imóvel" value="Matricula" />
        <Picker.Item label="IPTU" value="IPTU" />
        <Picker.Item label="Contrato particular de compra e venda com firma reconhecida" value="ContratoFirma" />
        <Picker.Item label="Contrato de locação com cláusula especifica de representação" value="ContratoClausula" />
      </Picker>
      
      <Text style={[styles.textLeft, {marginBottom: 10, marginTop: 20}]}>Documento</Text>
      <View style={[styles.row, {justifyContent: 'space-between'}]}>
        <Text style={[styles.textLeft, {marginLeft: 20}]}>Carregar o arquivo</Text>
        <Image style={styles.imgAnexo} source={require('../../../../assets/icons/anexo.png')} />
      </View>

      <Text style={[styles.textLeft, {marginBottom: 10, marginTop: 20}]}>Fachada do imóvel <FontAwesomeIcon icon={ faCircleQuestion } size={16} style={{}}/></Text>
      <View style={[styles.row, {justifyContent: 'space-between'}]}>
        <Text style={[styles.textLeft, {marginLeft: 20}]}>Carregar o arquivo</Text>
        <Image style={styles.imgAnexo} source={require('../../../../assets/icons/anexo.png')} />
      </View>

      <Text style={[styles.textLeft, {marginBottom: 10, marginTop: 20}]}>{'Foto frontal da caixa UMA\ne tubo camisa '}<FontAwesomeIcon icon={ faCircleQuestion } size={16} style={{}}/></Text>
      <View style={[styles.row, {justifyContent: 'space-between'}]}>
        <Text style={[styles.textLeft, {marginLeft: 20}]}>Carregar o arquivo</Text>
        <Image style={styles.imgAnexo} source={require('../../../../assets/icons/anexo.png')} />
      </View>

      <Text style={[styles.textLeft, {marginBottom: 10, marginTop: 20}]}>Foto frontal da caixa UMA <FontAwesomeIcon icon={ faCircleQuestion } size={16} style={{}}/></Text>
      <View style={[styles.row, {justifyContent: 'space-between'}]}>
        <Text style={[styles.textLeft, {marginLeft: 20}]}>Carregar o arquivo</Text>
        <Image style={styles.imgAnexo} source={require('../../../../assets/icons/anexo.png')} />
      </View>

      <Text style={[styles.textLeft, {marginBottom: 10, marginTop: 20}]}>Imagem da leitura. <FontAwesomeIcon icon={ faCircleQuestion } size={16} style={{}}/></Text>
      <View style={[styles.row, {justifyContent: 'space-between'}]}>
        <Text style={[styles.textLeft, {marginLeft: 20}]}>Carregar o arquivo</Text>
        <Image style={styles.imgAnexo} source={require('../../../../assets/icons/anexo.png')} />
      </View>

      <Text style={[styles.textCenter, {marginTop: 20}]}>O arquivo deve ter no máximo 1MB e estar no formato .pdf .jpg .jpeg ou .png.</Text>
      
      <Text style={[styles.textCenter, {marginTop: 20}]}>Agora seus documentos serão analisados e você será avisado pelo canal de comunicação escolhido em seu cadastro.</Text>

      <TouchableOpacity style={styles.buttonSubmit} onPress={() => setStep(3)}>
        <Text style={styles.textButtonSubmit}>Avançar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textButtonOutline}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}