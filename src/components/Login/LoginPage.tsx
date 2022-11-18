import React, { useState } from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";

import Header from "../Header";
import Login from ".";

export default function LoginPage({ route, navigation }) {
  const tipoPessoa = route.params.tipoPessoa

  return (
    <SafeAreaView>
      <Header />
      <ScrollView  contentContainerStyle={{ paddingBottom: 100 }}>
        <Login navigation={navigation} tipoPessoa={tipoPessoa} />
      </ScrollView>
    </SafeAreaView>
  )
}