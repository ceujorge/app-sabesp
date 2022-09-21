import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'

import styles from "./styles";

export default function Header() {
    return (
        <View style={styles.container}>
            <Image style={styles.tinyLogo} source={require('../../../assets/brand/logo.png')} />
            <Text style={styles.title}>Sabesp{'\n'}Mobile</Text>
            <View style={styles.rightMenu}>
                <FontAwesomeIcon icon={ faMagnifyingGlass } size={28} style={styles.searchIcon}/>
                <FontAwesomeIcon icon={ faBars } size={28} />
            </View>
            <StatusBar barStyle="light-content" backgroundColor='#303030' />
        </View>
    );
}