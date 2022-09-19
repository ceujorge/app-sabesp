import React, { useState } from "react";
import { View, Text, Linking, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
import { TextInput, Checkbox } from "react-native-paper";

import styles from "../styles";

export default function FaturaSimplificada({ navigation }) {
    const [found, setFound] = useState(false)
    const [fornecimento, setFornecimento] = useState('')
    const [isSelected, setSelection] = useState(false);

    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} >
        <View style={styles.center}>
          <Text style={styles.loginTitle}>Solicite a 2a via de fatura</Text>
          <Text style={styles.loginInformation}>
            No campo abaixo, insira o seu código de fornecimento para ter acesso à segunda via das contas emitidas nos últimos 90 dias.
          </Text>
          
          <Text style={styles.loginOuterLabel}>
            Fornecimento
          </Text>

          <View style={styles.loginPassword} >
            <TextInput 
              mode="outlined"
              theme={{ colors: { primary: '#00a5e4' }}}
              placeholder="Digite" 
              value={fornecimento} 
              onChangeText={value => { setFornecimento(value) }} 
              maxLength={15}
              right={found ? <TextInput.Icon name={'close-circle-outline'} onPress={() => setFound(false)}/> : null}
            />
            
            {!found ? (
              <TouchableOpacity style={styles.buttonFornecimento} onPress={() => setFound(true)}>
                <Text style={styles.textButtonFornecimento}>Ver conta</Text>
              </TouchableOpacity>
            ) : null}

          </View>

            {found ? (
              <>
                <Text style={styles.loginBold}>Fulano de ***</Text>
                <Text style={styles.loginInformation}>
                  {'AV. PRESIDENTE C*********\nPRAIA GRANDE - SP'}
                </Text>

                <View style={styles.faturasContainer}>
                  <Text style={styles.faturasValor}>R$ 164,80</Text>
                  <Text style={styles.faturasTextBold}>TOTAL DE DÉBITOS EM ABERTO</Text>
                  <Text style={styles.faturasText}>
                    {'Aqui você tem acesso somente à faturas emitidas\n nos ultimos 90 dias. Para acesso completo às\n faturas, faça login '} 
                    <Text style={{ textDecorationLine: 'underline' }} onPress={() => Linking.openURL('javascript:void(0)')}>
                      CLICANDO AQUI
                    </Text>
                  </Text>
                  <View style={styles.cardContainer}>
                    <View style={styles.cardFatura}>
                      <Text style={styles.cardText}>Ago/2021</Text>
                      <Text style={styles.cardValor}>R$ 45,23</Text>
                      <Text style={styles.cardText}>Vencimento 05/09/2022</Text>
                      <Text style={styles.cardVencido}>Vencida</Text>
                      <View style={styles.row}>
                        <TouchableOpacity style={styles.buttonPagar} onPress={() => null}>
                          <Text style={styles.textButtonFornecimento}>Pagar conta</Text>
                        </TouchableOpacity>
                        <FontAwesomeIcon icon={ faDownload } size={18} style={styles.downloadIcon}/>
                      </View>
                    </View>
                    <View style={styles.cardFatura}>
                      <Text style={styles.cardText}>Ago/2022</Text>
                      <Text style={styles.cardValor}>R$ 45,23</Text>
                      <Text style={styles.cardText}>Vencimento 05/09/2022</Text>
                      <Text style={styles.cardVencido}>Vencida</Text>
                      <View style={styles.row}>
                        <TouchableOpacity style={styles.buttonPagar} onPress={() => null}>
                          <Text style={styles.textButtonFornecimento}>Pagar conta</Text>
                        </TouchableOpacity>
                        <FontAwesomeIcon icon={ faDownload } size={18} style={styles.downloadIcon}/>
                      </View>
                    </View>
                    <View style={styles.cardFatura}>
                      <Text style={styles.cardText}>Ago/2023</Text>
                      <Text style={styles.cardValor}>R$ 45,23</Text>
                      <Text style={styles.cardText}>Vencimento 05/09/2022</Text>
                      <Text style={styles.cardVencido}>Vencida</Text>
                      <View style={styles.row}>
                        <TouchableOpacity style={styles.buttonPagar} onPress={() => null}>
                          <Text style={styles.textButtonFornecimento}>Pagar conta</Text>
                        </TouchableOpacity>
                        <FontAwesomeIcon icon={ faDownload } size={18} style={styles.downloadIcon}/>
                      </View>
                    </View>
                  </View>
                </View>
              </>
            ) : (
              <>
                <View style={styles.linkContainer}>
                  <Text style={styles.hyperlink} onPress={() => Linking.openURL('javascript:void(0)')}>
                    Localize o código de fornecimento da sua conta
                  </Text>
                </View>

                <View style={styles.checkBoxContainer}>
                  <Checkbox
                    status={isSelected ? 'checked' : 'unchecked'}
                    onPress={() => setSelection(!isSelected)}
                  />
                  <Text>Salve meu fornecimento</Text>
                </View>
              </>
            )}
        </View>
      </ScrollView>
  );
}