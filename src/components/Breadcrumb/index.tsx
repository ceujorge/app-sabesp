import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";

import Header from "../Header";

import styles from "./styles";

export default function Breadcrumb({ config, navigation }) {
  return (
      <View style={styles.container}>
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