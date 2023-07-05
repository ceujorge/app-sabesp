import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'

import styles from "./styles";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Image style={styles.footerImg} source={require('../../../assets/imagens/footer.png')} />
    </View>
  );
}