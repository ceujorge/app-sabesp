import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function Footer({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.third}>
          <TouchableOpacity onPress={() => navigation.navigate('Faturas')}>
            <Image source={require('../../../assets/icons/servicos/graphic.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.third}>
          <TouchableOpacity onPress={() => null}>
            <Image source={require('../../../assets/icons/servicos/pesquisa.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.third}>
          <TouchableOpacity onPress={() => navigation.navigate('Servicos')}>
            <Image source={require('../../../assets/icons/servicos/progress-wrench.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}