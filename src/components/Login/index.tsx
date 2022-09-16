import React, { useState } from "react";
import { View, Text, Linking, TouchableOpacity, ScrollView} from "react-native";
import { TextInput } from "react-native-paper";
import { CheckBox } from "@rneui/themed";

import styles from "./styles";

export default function Login({ navigation, setLogado }) {
    const [CPF, setCPF]: any = useState('');
    const [PASS, setPASS]: any = useState('');
    const [isSelected, setSelection] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [check1, setCheck1] = useState(false);

    const setMascaraCpf = function (cpf) {
        cpf = cpf.replace(/\D/g, "");                          //Remove tudo o que não é dígito
        cpf = cpf.replace(/^(\d{3})(\d{3})(\d)/g, "$1.$2.$3"); //Coloca a pontuação
        cpf = cpf.replace(/(\d)(\d{2})$/, "$1-$2");            //Coloca hífen entre os dois ultimos digitos e o resto
        setCPF(cpf);
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.center}>
                <Text style={styles.loginTitle}>Bem-vindo à Sabesp | Sabesp Mobile</Text>
                <Text style={styles.loginInformation}>Insira seu login e senha para ter acesso completo aos serviços disponíveis.</Text>
            </View>
            <View>
                <TextInput 
                    mode="outlined" 
                    placeholder="Digite o seu CPF"
                    style={styles.loginInput}
                    theme={{ colors: { primary: '#00a5e4' }}}
                    label='CPF' 
                    value={CPF} 
                    onChangeText={value => { setMascaraCpf(value) }}
                    maxLength={14}
                />

                <TextInput 
                    mode="outlined"
                    label='Senha'
                    style={styles.loginPassword} 
                    theme={{ colors: { primary: '#00a5e4' }}}
                    textContentType="password"
                    placeholder="Digite sua senha" 
                    value={PASS} 
                    onChangeText={value => { setPASS(value) }} 
                    secureTextEntry={passwordVisible}
                    right={<TextInput.Icon name={passwordVisible ? 'eye' : 'eye-off'} onPress={() => setPasswordVisible(!passwordVisible)}/>}
                />

                <View style={styles.linkContainer}>
                    <Text style={styles.hyperlink} onPress={() => Linking.openURL('javascript:void(0)')}>
                        Esqueci minha senha
                    </Text>
                </View>

                <View style={styles.checkBoxContainer}>
                    <CheckBox
                        center
                        title="Mantenha-me conectado"
                        checked={check1}
                        onPress={() => setCheck1(!check1)}
                    />
                </View>

                <TouchableOpacity style={styles.buttonOutline} onPress={() => setLogado(true)}>
                    <Text style={styles.textButtonOutline}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSubmit} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.textButtonSubmit}>Meu primeiro acesso</Text>
                </TouchableOpacity>

                <Text style={styles.loginInformation}></Text>     
            </View>
        </ScrollView>
    )
};