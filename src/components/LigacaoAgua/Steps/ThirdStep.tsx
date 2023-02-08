import React, { useState } from "react";
import { View, Text,  Switch, Linking, TouchableOpacity } from "react-native";
import { TextInput, RadioButton } from "react-native-paper";
import { Picker } from '@react-native-picker/picker';

import styles from "../styles";

export default function ThirdStep({ navigation, step, setStep }) {
  const [check1, setCheck1] = useState('')
  const [check2, setCheck2] = useState('')
  const [check3, setCheck3] = useState('')

  const [switch1, setSwitch1] = useState(false);
  const toggleSwitch1 = () => setSwitch1(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>3/3</Text>

      <Text style={styles.title}>Que tipo é o seu imóvel</Text>
      <View style={styles.row}>
        <RadioButton
          value="Residência"
          status={ check1 === 'Residência' ? 'checked' : 'unchecked' }
          onPress={() => setCheck1('Residência')}
        />
        <Text style={styles.radioTexto}>Residência</Text>
      </View>
      <View style={styles.row}>
        <RadioButton
          value="Comércio"
          status={ check1 === 'Comércio' ? 'checked' : 'unchecked' }
          onPress={() => setCheck1('Comércio')}
        />
        <Text style={styles.radioTexto}>Comércio</Text>
      </View>
      <View style={styles.row}>
        <RadioButton
          value="Industria"
          status={ check1 === 'Industria' ? 'checked' : 'unchecked' }
          onPress={() => setCheck1('Industria')}
        />
        <Text style={styles.radioTexto}>Entidade pública,Economia mista,Indústria</Text>
      </View>

      <Text style={styles.title}>Quantos imóveis tem no mesmo endereço?</Text>
      <TextInput 
        label='Quantidade' 
        style={{ marginTop: 10, marginBottom: 10 }}
        theme={{ colors: { primary: '#00a5e4' }}}
        keyboardType='numeric'
      />

      <Text style={styles.title}>A rua é pavimentada?</Text>
      <View style={styles.row}>
        <RadioButton
          value="Sim"
          status={ check2 === 'Sim' ? 'checked' : 'unchecked' }
          onPress={() => setCheck2('Sim')}
        />
        <Text style={styles.radioTexto}>Sim</Text>
      </View>
      <View style={styles.row}>
        <RadioButton
          value="Não"
          status={ check2 === 'Não' ? 'checked' : 'unchecked' }
          onPress={() => setCheck2('Não')}
        />
        <Text style={styles.radioTexto}>Não</Text>
      </View>

      <Text style={styles.title}>O passeio publico (calçada) é pavimentado?</Text>
      <View style={styles.row}>
        <RadioButton
          value="Sim"
          status={ check3 === 'Sim' ? 'checked' : 'unchecked' }
          onPress={() => setCheck3('Sim')}
        />
        <Text style={styles.radioTexto}>Sim</Text>
      </View>
      <View style={[styles.row, {marginBottom: 20}]}>
        <RadioButton
          value="Não"
          status={ check3 === 'Não' ? 'checked' : 'unchecked' }
          onPress={() => setCheck3('Não')}
        />
        <Text style={styles.radioTexto}>Não</Text>
      </View>

      <View style={styles.switchContainer}>
        <Switch
          onValueChange={toggleSwitch1}
          value={switch1}
        />
        <Text style={styles.switchText}>
          Declaro que as
          <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://agenciavirtual.sabesp.com.br/web/guest/guia-de-servicos')}> instalações de água e esgoto estão prontas e conforme orientações da Sabesp</Text>
          . Caso não esteja em conformidade, estou ciente que o retorno para a execução do serviço seja cobrado.
        </Text>
      </View>

      <TouchableOpacity 
        style={(switch1 && check1 && check2 && check3) ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
        onPress={() => setStep(4)} 
        disabled={!(switch1 && check1 && check2 && check3)}>
        <Text style={styles.textButtonSubmit}>Avançar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textButtonOutline}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}