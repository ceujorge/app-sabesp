import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StatusBar, ScrollView, SafeAreaView, Image, Linking, ImageBackground } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'

import styles from "./styles";

export default function PreLogin({ navigation }) {
  const [showModal, setShowModal] = useState(true);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <ScrollView>
      
        <View style={styles.logoLoginContainer}>
          <Image style={styles.logoLogin} source={require('../../../assets/brand/loginLogo.png')} />
        </View>

        <View style={styles.menu}>
          <FontAwesomeIcon icon={ faBars } size={24} style={{ color: '#ffffff'}}/>
        </View>

        <View style={styles.main}>
          <Text style={styles.title}>{'Bem vindo ao\nSabesp Mobile'}</Text>
          <Text style={styles.hyperlink}>Termos de serviço e Política de Privacidade</Text>
          <View style={styles.row}>

            <View style={styles.halfRow}>
              <TouchableOpacity style={styles.buttonSubmit} onPress={() => navigation.navigate('Faturas')}>
                <Text style={styles.textButtonSubmitHalf}>Para você</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.halfRow}>
              <TouchableOpacity style={styles.buttonSubmit} onPress={() => null}>
                <Text style={styles.textButtonSubmitHalf}>Para negócios</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.socialRow}>
            <TouchableOpacity onPress={() => Linking.openURL('https://m.facebook.com/SabespOficial/?mibextid=LQQJ4d')}>
              <Image source={require('../../../assets/icons/facebook.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com/sabespcia?igshid=YmMyMTA2M2Y=')}>
              <Image source={require('../../../assets/icons/instagram.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/sabesp?s=11&t=ahx8Vp2bokWSF_DoKZ5sQg')}>
              <Image source={require('../../../assets/icons/twitter.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/@SabespCia')}>
              <Image source={require('../../../assets/icons/youtube.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}