import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StatusBar, ScrollView, SafeAreaView, Image, Linking} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'

import { ServicosMenu } from "../Servicos";

import styles from "./styles";

export default function PreLogin({ navigation }) {
  const [menuServicos, setMenuServicos] = useState(false)

  return (
    <SafeAreaView style={{ backgroundColor: '#F1F6F9' }}>
      <StatusBar backgroundColor="rgba(0, 0, 0, 0.3)" translucent={true} />
      <ScrollView>
      
        <View style={styles.logoLoginContainer}>
          <Image style={styles.logoLogin} source={require('../../../assets/brand/loginLogo.png')} />
        </View>

        <TouchableOpacity style={styles.menu} onPress={() => setMenuServicos(true)}>
          <FontAwesomeIcon icon={ faBars } size={24} style={{ color: '#ffffff'}}/>
        </TouchableOpacity>

        <View style={styles.main}>
          <Text style={styles.title}>{'Bem-vindo ao\nSabesp Mobile'}</Text>
          <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://p1bfdgrrns4j9qsuyuaioa.s3.amazonaws.com/2023/05/VVRzd1BRTUptUFRIenV6Z05PV1Y1UTo6.pdf ')}>
            Termos de serviço e Política de Privacidade
          </Text>
          <View style={styles.row}>

            <View style={styles.halfRow}>
              <TouchableOpacity style={styles.buttonSubmit} onPress={() => navigation.navigate('Faturas')}>
                <Text style={styles.textButtonSubmitHalf}>Para você</Text>
              </TouchableOpacity>
            </View>
            {/* <View style={styles.halfRow}>
              <TouchableOpacity style={styles.buttonSubmit} onPress={() => null}>
                <Text style={styles.textButtonSubmitHalf}>Para negócios</Text>
              </TouchableOpacity>
            </View> */}
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

      <ServicosMenu navigation={navigation} showMenu={menuServicos} setShowMenu={setMenuServicos} />

    </SafeAreaView>
  )
}