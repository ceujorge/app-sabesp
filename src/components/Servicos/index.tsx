import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, Dimensions } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'

import Header from "../Header";
import Footer from "../Footer";

import styles from "./styles";

export default function Servicos({ navigation, route }) {
  const links = route.params ? route.params.links : false;
  const height = Dimensions.get('window').height


  return (
    <>
      {links ? (
        <>
          <ScrollView style={{ height: height - 60 }}>
            <Header navigation={navigation} backButton={() => navigation.goBack()}/>
              <View style={styles.container}>
                <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
                  Links úteis
                </Text>
                <TouchableOpacity style={styles.borderedContainer}>
                  <View style={styles.row}>
                    <Text style={styles.textMenuServicosLinks}>Entenda sua fatura</Text>
                    <View style={styles.rightArrow}>
                      <FontAwesomeIcon icon={ faChevronRight } size={18} style={{ color: '#00a5e4', marginTop: -10 }}/>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.borderedContainer}>
                  <View style={styles.row}>
                    <Text style={styles.textMenuServicosLinks}>Tabela de tarifas</Text>
                    <View style={styles.rightArrow}>
                      <FontAwesomeIcon icon={ faChevronRight } size={18} style={{ color: '#00a5e4', marginTop: -10 }}/>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.borderedContainer}>
                  <View style={styles.row}>
                    <Text style={styles.textMenuServicosLinks}>Como fazer a leitura do medidor</Text>
                    <View style={styles.rightArrow}>
                      <FontAwesomeIcon icon={ faChevronRight } size={18} style={{ color: '#00a5e4', marginTop: -10 }}/>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.borderedContainer}>
                  <View style={styles.row}>
                    <Text style={styles.textMenuServicosLinks}>Teste de vazamento</Text>
                    <View style={styles.rightArrow}>
                      <FontAwesomeIcon icon={ faChevronRight } size={18} style={{ color: '#00a5e4', marginTop: -10 }}/>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.borderedContainer}>
                  <View style={styles.row}>
                    <Text style={styles.textMenuServicosLinks}>Código de Defesa do Consumidor</Text>
                    <View style={styles.rightArrow}>
                      <FontAwesomeIcon icon={ faChevronRight } size={18} style={{ color: '#00a5e4', marginTop: -10 }}/>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.borderedContainer}>
                  <View style={styles.row}>
                    <Text style={styles.textMenuServicosLinks}>Lei Estadual de Defesa do Consumidor</Text>
                    <View style={styles.rightArrow}>
                      <FontAwesomeIcon icon={ faChevronRight } size={18} style={{ color: '#00a5e4', marginTop: -10 }}/>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.borderedContainer}>
                  <View style={styles.row}>
                    <Text style={styles.textMenuServicosLinks}>Decreto 5903</Text>
                    <View style={styles.rightArrow}>
                      <FontAwesomeIcon icon={ faChevronRight } size={18} style={{ color: '#00a5e4', marginTop: -10 }}/>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.borderedContainer}>
                  <View style={styles.row}>
                    <Text style={styles.textMenuServicosLinks}>Deliberação 106 da ARSESP</Text>
                    <View style={styles.rightArrow}>
                      <FontAwesomeIcon icon={ faChevronRight } size={18} style={{ color: '#00a5e4', marginTop: -10 }}/>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.borderedContainer}>
                  <View style={styles.row}>
                    <Text style={styles.textMenuServicosLinks}>Ministério da Saúde</Text>
                    <View style={styles.rightArrow}>
                      <FontAwesomeIcon icon={ faChevronRight } size={18} style={{ color: '#00a5e4', marginTop: -10 }}/>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
          </ScrollView>
          <Footer navigation={navigation}/>
        </>
      ) : (
        <>
          <ScrollView style={{ height: height - 60 }}>
            <Header navigation={navigation} backButton={() => navigation.goBack()}/>
            <View style={styles.container}>
              <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
                Serviços Sabesp
              </Text>
              <TouchableOpacity style={styles.borderedContainer} onPress={() => navigation.navigate('FaturaPorEmail')}>
                <View style={styles.row}>
                  <Image source={require('../../../assets/icons/servicos/fatura-email.png')} />
                  <Text style={styles.textMenuServicos}>Receber fatura por e-mail</Text>
                  <View style={styles.rightArrow}>
                    <FontAwesomeIcon icon={ faChevronRight } size={18} style={{ color: '#00a5e4', marginTop: -10 }}/>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.borderedContainer} onPress={() => navigation.navigate('FaltaDeAgua')}>
                <View style={styles.row}>
                  <Image source={require('../../../assets/icons/servicos/falta-agua.png')} />
                  <Text style={styles.textMenuServicos}>Falta de água ou pouca pressão</Text>
                  <View style={styles.rightArrow}>
                    <FontAwesomeIcon icon={ faChevronRight } size={18} style={{ color: '#00a5e4', marginTop: -10 }}/>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.borderedContainer}>
                <View style={styles.row}>
                  <Image source={require('../../../assets/icons/servicos/conserto.png')} />
                  <Text style={styles.textMenuServicos}>Conserto</Text>
                  <View style={styles.rightArrow}>
                    <FontAwesomeIcon icon={ faChevronRight } size={18} style={{ color: '#00a5e4', marginTop: -10 }}/>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.borderedContainer}>
                <View style={styles.row}>
                  <Image source={require('../../../assets/icons/servicos/vazamento.png')} />
                  <Text style={styles.textMenuServicos}>Vazamento</Text>
                  <View style={styles.rightArrow}>
                    <FontAwesomeIcon icon={ faChevronRight } size={18} style={{ color: '#00a5e4', marginTop: -10 }}/>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        <Footer navigation={navigation}/>
        </>
      )}
    </>
  );
}

export function ServicosMenu({ navigation, showMenu, setShowMenu }) {
  const maisServicos = function() {
    setShowMenu(false);
    navigation.navigate('Servicos');
  }

  return (
    <Modal animationType="slide" visible={showMenu} transparent={true}>
      <TouchableOpacity 
        onPress={() => setShowMenu(false)} 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', flex: 1, justifyContent: 'flex-end' }}
        activeOpacity={1}
      > 
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.botaoMenuServicos}>
              <Image source={require('../../../assets/icons/servicos/perfil.png')} />
              <Text style={styles.textMenuServicos}>Perfil de usuário</Text>
              <View style={styles.rightArrow}>
                <FontAwesomeIcon icon={ faChevronRight } size={18} style={{ color: '#00a5e4' }}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoMenuServicos}>
              <Image source={require('../../../assets/icons/servicos/agende-atendimento.png')} />
              <Text style={styles.textMenuServicos}>Agende seu atendimento</Text>
              <View style={styles.rightArrow}>
                <FontAwesomeIcon icon={ faChevronRight } size={18} style={{ color: '#00a5e4' }}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoMenuServicos} onPress={() => navigation.navigate('Servicos', { links: true})}>
              <Image source={require('../../../assets/icons/servicos/links-uteis.png')} />
              <Text style={styles.textMenuServicos}>Links úteis</Text>
              <View style={styles.rightArrow}>
                <FontAwesomeIcon icon={ faChevronRight } size={18} style={{ color: '#00a5e4' }}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoMenuServicos}>
              <Image source={require('../../../assets/icons/servicos/agencia-proxima.png')} />
              <Text style={styles.textMenuServicos}>Agência mais próxima</Text>
              <View style={styles.rightArrow}>
                <FontAwesomeIcon icon={ faChevronRight } size={18} style={{ color: '#00a5e4' }}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => maisServicos()} style={styles.botaoMenuServicos}>
              <Image source={require('../../../assets/icons/servicos/mais-servicos.png')} />
              <Text style={styles.textMenuServicos}>Encontre mais serviços</Text>
              <View style={styles.rightArrow}>
                <FontAwesomeIcon icon={ faChevronRight } size={18} style={{ color: '#00a5e4' }}/>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}