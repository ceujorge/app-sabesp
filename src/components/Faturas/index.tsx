import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, useWindowDimensions, StatusBar, SafeAreaView, ImageBackground, Touchable } from "react-native";
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'

import styles from "./styles";
import BuscaFornecimento from "./FaturaSimplificada/BuscaFornecimento";
import Login from "../Login";
import { ServicosMenu } from "../Servicos";

export default function Faturas({ route, navigation }) {
  const [menuServicos, setMenuServicos] = useState(false)

  const tab = route.params ? route.params.tab : 0;
  const layout = useWindowDimensions();

  const renderScene = SceneMap({
    first: () => <BuscaFornecimento navigation={navigation}/>,
    second: () => <Login navigation={navigation}/>,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#00a5e4' }}
      style={{ backgroundColor: '#fff' }}
      labelStyle={{ color: '#303030', fontWeight: 'bold', textTransform: 'capitalize' }}
      activeColor='#00a5e4'
    />
  );

  const [index, setIndex] = React.useState(tab);
  const [routes] = React.useState([
    { key: 'first', title: 'Fatura Simplificada' },
    { key: 'second', title: 'Fatura Completa' },
  ]);

  return (
    <SafeAreaView style={{flex: 1}}>    
      <StatusBar backgroundColor="rgba(0, 0, 0, 0.3)" translucent={true} />

      <ImageBackground source={require('../../../assets/imagens/background.png')}  style={styles.image}>
        <View style={styles.rowHeader}>
          <TouchableOpacity style={styles.leftMenu} onPress={() => navigation.navigate('PreLogin')}>
            <FontAwesomeIcon icon={ faArrowLeft } size={24} style={{color: 'white'}}/>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.rightMenu} onPress={() => setMenuServicos(true)}>
            <FontAwesomeIcon icon={ faBars } size={24} style={{color: 'white'}}/>
          </TouchableOpacity>
        </View>
        <Image source={require('../../../assets/brand/logo_branco.png')} />
      </ImageBackground>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
        style={styles.tabView}
        swipeEnabled={false}
      />

      <ServicosMenu navigation={navigation} showMenu={menuServicos} setShowMenu={setMenuServicos} />
    </SafeAreaView>
  );
}