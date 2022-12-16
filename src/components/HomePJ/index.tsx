import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from "react-native";

import styles from "./styles";

import Header from "../Header";
import Breadcrumb from "../Breadcrumb";

const breadcrumb = [
  {label: 'Login', link: 'Login'}, 
  {label: 'Acesso', link: '', active: true}, 
]

export default function HomePJ({ navigation }) {
  return(
    <SafeAreaView>
    <Header />
    <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
      <Breadcrumb config={breadcrumb} navigation={navigation} backButton={true}/>
      <Text style={styles.title}>Bem vindo à Sabesp | Mobile</Text>
      <Text style={[styles.defaultText, {margin: 12, textAlign: 'center'}]}>Aproveite as facilidades deste novo ambiente que oferecemos a sua empresa e selecione a melhor forma que te atende.</Text>
      <View style={styles.headerPJ}>
        <Image style={styles.avatar} source={require('../../../assets/avatar.png')} />
        <View style={{ width: '60%' }}>
          <Text style={styles.textHeaderPJ}>SILVIA MARIA ROCHA</Text>
          <Text style={{fontSize: 14}}>ENGINEERING DO BRASIL</Text>
          <Text style={{fontSize: 14}}>REPRESENTANTE LEGAL</Text>

          <Text style={styles.smallText}>Você é o responsável legal por todos os processos solicitados à Sabesp</Text>
        </View>
      </View>
      <View style={styles.cardRow}>
        <Image style={styles.icon1} source={require('../../../assets/icons/docs1.png')} />
        <View style={{ width: '65%' }}>
          <Text style={styles.cardText}>{'Consultar fatura\npor CNPJ'}</Text>
          <Text style={styles.cardLink} onPress={() => navigation.navigate('FaturasCNPJ')}>Acesse aqui</Text>
        </View>
      </View>
      <View style={styles.cardRow}>
        <Image style={styles.icon2} source={require('../../../assets/icons/docs2.png')} />
        <View style={{ width: '65%' }}>
          <Text style={styles.cardText}>{'Consultar fatura\npor fornecimento'}</Text>
          <Text style={styles.cardLink} onPress={() => navigation.navigate('FaturasPJFornecimento')}>Acesse aqui</Text>
        </View>
      </View>
      <View style={styles.cardRow}>
        <Image style={styles.icon3} source={require('../../../assets/icons/docsmoney.png')} />
        <View style={{ width: '65%' }}>
          <Text style={styles.cardText}>{'Consultar fatura por\ndata de vencimento'}</Text>
          <Text style={styles.cardLink} onPress={() => navigation.navigate('FaturasPJData')}>Acesse aqui</Text>
        </View>
      </View>
      <View style={styles.cardRow}>
        <Image style={styles.contatoIcon} source={require('../../../assets/icons/contato.png')} />
        <View style={{ width: '60%' }}>
          <Text style={[styles.defaultText, {fontWeight: 'bold'}]}>FALE COM A EQUIPE DE GESTÃO SABESP</Text>
          <Text style={styles.smallText}>
            Este não é um canal de emergência, porém é um canal direto e estamos disponíveis para melhor atendê-lo(a).
          </Text>
          <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('FaleComSabesp')}>
            <Text style={styles.textButtonOutline}>Envie uma mensagem</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}