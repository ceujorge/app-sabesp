import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { TextInput, Checkbox } from "react-native-paper";

import styles from "../styles";

export default function Confirmacao({ navigation, step, setStep }) {
  const [check1, setCheck1] = useState(true)
  const [check2, setCheck2] = useState(true)
  const [check3, setCheck3] = useState(true)
  const [check4, setCheck4] = useState(true)
  const [check5, setCheck5] = useState(true)
  const [check6, setCheck6] = useState(true)

  const [switch1, setSwitch1] = useState(false);
  const toggleSwitch1 = () => setSwitch1(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Primeira ligação de água e esgoto</Text>

      <Text style={[styles.textCenter, {marginTop: 20}]}>{'Orçamento n. 5489562\ne Termo de aceite'}</Text>

      <TextInput 
        label='Descrição' 
        style={styles.infoInput}
        theme={{ colors: { primary: '#00a5e4' }}}
        disabled={true}
        value={'Primeira ligação de água e esgoto'}
      />

      <Text style={styles.title}>Dados do imóvel</Text>

      <TextInput 
        label='Endereço de ligação de água e esgoto' 
        style={styles.infoInput}
        theme={{ colors: { primary: '#00a5e4' }}}
        disabled={true}
        value={'AV. RODRIGUES CASTRO, 605 JUNDIAÍ - SP'}
      />

      <TextInput 
        label='Cruzamento' 
        style={styles.infoInput}
        theme={{ colors: { primary: '#00a5e4' }}}
        disabled={true}
        multiline={true}
        value={'AV RODRIGUES CASTRO, 900 JUNDIAÍ - SP X RUA CARLOS MARQUES, 475 JUNDIAÍ - SP'}
      />

      <Text style={styles.title}>Dados pessoais</Text>

      <TextInput 
        label='Titular responsável' 
        style={styles.infoInput}
        theme={{ colors: { primary: '#00a5e4' }}}
        disabled={true}
        value={'Walter da Silva'}
      />

      <TextInput 
        label='CPF' 
        style={styles.infoInput}
        theme={{ colors: { primary: '#00a5e4' }}}
        disabled={true}
        multiline={true}
        value={'111.222.***-44'}
      />

      <Text style={styles.title}>Documentos</Text>

      <View style={styles.row}>
        <Checkbox.Android
          status={check1 ? 'checked' : 'unchecked'}
          onPress={() => setCheck1(!check1)}
        />
        <Text style={[styles.textLeft, {marginTop: 6}]}>CPF DO TITULAR</Text>
      </View>

      <View style={styles.row}>
        <Checkbox.Android
          status={check2 ? 'checked' : 'unchecked'}
          onPress={() => setCheck2(!check2)}
        />
        <Text style={[styles.textLeft, {marginTop: 6}]}>TERMO DE RESPONSABILIDADE PELO IMÓVEL</Text>
      </View>

      <View style={styles.row}>
        <Checkbox.Android
          status={check3 ? 'checked' : 'unchecked'}
          onPress={() => setCheck3(!check3)}
        />
        <Text style={[styles.textLeft, {marginTop: 6}]}>FACHADA DO IMÓVEL</Text>
      </View>

      <View style={styles.row}>
        <Checkbox.Android
          status={check4 ? 'checked' : 'unchecked'}
          onPress={() => setCheck4(!check4)}
        />
        <Text style={[styles.textLeft, {marginTop: 6}]}>FOTO FRONTAL DA CAIXA UMA E TUBO CAMISA</Text>
      </View>

      <View style={styles.row}>
        <Checkbox.Android
          status={check5 ? 'checked' : 'unchecked'}
          onPress={() => setCheck5(!check5)}
        />
        <Text style={[styles.textLeft, {marginTop: 6}]}>FOTO FRONTAL DA CAIXA UMA</Text>
      </View>

      <View style={styles.row}>
        <Checkbox.Android
          status={check6 ? 'checked' : 'unchecked'}
          onPress={() => setCheck6(!check6)}
        />
        <Text style={[styles.textLeft, {marginTop: 6}]}>{'FOTO DA CAIXA DE INSPEÇÃO - \nLIGAÇÃO DE ESGOTO'}</Text>
      </View>

      <View style={styles.row}>
        <Text style={[styles.textLeftBold, {width: '50%'}]}>Preço</Text>
        <Text style={[styles.textRightBold, {width: '50%'}]}>R$ 156,30</Text>
      </View>

      <Text style={styles.textLeft}>O valor será cobrado na próxima fatura orçamento sujeito à alteração conforme análise.</Text>
      <Text style={styles.textLeft}>Orçamento sujeito à alteração conforme análise</Text>
      <Text style={styles.textLeft}>Prazo para análise e execução do serviço</Text>
      <Text style={styles.textLeftBold}>10 dias úteis</Text>

      <View style={styles.switchContainer}>
        <Switch
          onValueChange={toggleSwitch1}
          value={switch1}
        />
        <Text style={styles.switchText}>
          Declaro que sou o novo titular responsável pelas faturas do serviço de água e esgoto do endereço acima. Caso seja comprovada a falsidade das informações por mim fornecidas, serei responsável civil e criminalmente.
        </Text>
      </View>

      <TouchableOpacity 
        style={switch1 ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
        onPress={() => setStep(5)} 
        disabled={!switch1}>
        <Text style={styles.textButtonSubmit}>Confirmar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textButtonOutline}>Cancelar</Text>
      </TouchableOpacity>

    </View>
  );
}