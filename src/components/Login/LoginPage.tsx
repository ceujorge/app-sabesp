import React, { useState } from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";

import Header from "../Header";
import Login from ".";
import Servicos from "../Servicos";

export default function LoginPage({ route, navigation }) {
  const tipoPessoa = route.params.tipoPessoa
  const redirect = route.params.redirect

  return (
    <SafeAreaView>
      <Header />
      <ScrollView  contentContainerStyle={{ paddingBottom: 100 }}>
        <Login navigation={navigation} tipoPessoa={tipoPessoa} redirect={redirect}/>
        <Servicos navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  )
}