import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft'

import styles from "./styles";

export default function Breadcrumb({ config, navigation, backButton = false }) {
  return (
      <View style={styles.container}>
        {backButton ? (
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={ faAngleLeft } size={16}/>
          </TouchableOpacity>
        ) : null }
        {config.map((item, index) => {
          return (<Text key={index}>
              <Text 
                onPress={() => item.link ? navigation.navigate(item.link) : null} 
                style={item.active ? {fontWeight: 'bold'} : {}}
              >{item.label}</Text>
              {config.length > index + 1 ? <Text style={styles.divisor}>{' > '}</Text> : null}
            </Text>
          )
        })}
      </View>
  )
}