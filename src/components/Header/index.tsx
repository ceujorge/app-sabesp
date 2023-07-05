import React from "react";
import { View, TouchableOpacity, Image, StatusBar } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'

import styles from "./styles";

export default function Header({ navigation, backButton }) {
    return (
        <View style={styles.header}>
            <View style={[styles.row, { marginTop: 40 }]}>
            <TouchableOpacity style={styles.leftMenu} onPress={backButton}>
                <FontAwesomeIcon icon={ faArrowLeft } size={24} style={{color: 'black'}}/>
            </TouchableOpacity>
            <View style={styles.rowCenter}>
                <Image source={require('../../../assets/brand/logo_horizontal.png')} style={styles.logoHorizontal}/>
            </View>
        </View>
      </View>
    );
}