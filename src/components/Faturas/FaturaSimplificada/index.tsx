import React, { useState, useEffect } from "react";
import { View, Text, Linking, TouchableOpacity, ScrollView, Dimensions, Image } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
import { TextInput, Checkbox } from "react-native-paper";
import Carousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import moment from 'moment';
import 'moment/locale/pt-br';

import styles from "../styles";
import mocks from "../../../mocks/mocks";
import Pagamento from "../../Pagamento";

moment.locale('pt-br');

function CardFatura({ item, setPagamento, setFatura }) {
  const capitalizar = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const pagar = function() {
    setPagamento(true);
    setFatura(item);
  }

  return (
    <View style={styles.cardFatura}>
      <Text style={styles.cardText}>{capitalizar(moment(item.dataInicioCompetencia).format('MMM/YY'))}</Text>
      <Text style={styles.cardValor}>{'R$ ' + String(item.valor).replace('.', ',')}</Text>
      <Text style={styles.cardText}>{'Vencimento ' + moment(item.dataVencimento).format('DD/MM/YY')}</Text>
      <Text style={styles.cardOk}>{item.statusFatura}</Text>
      <View style={styles.rowCenter}>
        <TouchableOpacity style={styles.buttonPagar} onPress={() => pagar()}>
          <Text style={styles.textButtonFornecimento}>Pagar conta</Text>
        </TouchableOpacity>
        <FontAwesomeIcon icon={ faDownload } size={18} style={styles.downloadIcon}/>
      </View>
    </View>
  )
}

export default function FaturaSimplificada({ navigation }) {
    const [found, setFound] = useState(false)
    const [pagamento, setPagamento] = useState(false)
    const [fornecimento, setFornecimento] = useState('')
    const [isSelected, setSelection] = useState(false);
    const [contasFornecimento, setContasFornecimento] = useState([])
    const [fatura, setFatura] = useState({});

    const width = Dimensions.get('window').width;

    useEffect(() => {
      setContasFornecimento(mocks.codigoFornecimento);
    }, [])

    return (
      <ScrollView contentContainerStyle={{}}>
        <View style={styles.center}>
          <Text style={styles.loginTitle}>Solicite a 2a via de fatura</Text>
          <Text style={styles.loginInformation}>
            No campo abaixo, insira o seu código de fornecimento para ter acesso à segunda via das contas emitidas nos últimos 180 dias.
          </Text>
          
          <Text style={styles.loginOuterLabel}>
            Fornecimento
          </Text>

          <View style={styles.loginPassword} >
            {!found ? (
              <TouchableOpacity style={styles.buttonFornecimento} onPress={() => setFound(true)}>
                <Text style={styles.textButtonFornecimento}>Ver</Text>
              </TouchableOpacity>
            ) : null}

            <TextInput 
              mode="outlined"
              theme={{ colors: { primary: '#00a5e4' }}}
              placeholder="Digite" 
              value={fornecimento} 
              keyboardType='numeric'
              onChangeText={value => { setFornecimento(value) }} 
              maxLength={15}
              right={found ? <TextInput.Icon name={'close-circle-outline'} onPress={() => setFound(false)}/> : null}
            />

          </View>

            {found ? (
              <>
                <Text style={styles.loginBold}>Fulano de ***</Text>
                <Text style={styles.loginInformation}>
                  {'AV. PRESIDENTE C*********\nPRAIA GRANDE - SP'}
                </Text>

                <View style={styles.faturasContainer}>
                  <Text style={styles.faturasValor}>{'R$ ' + String(contasFornecimento.reduce((acc, b) => {return acc + b.valor}, 0)).replace('.', ',')}</Text>
                  <Text style={styles.faturasTextBold}>TOTAL DE DÉBITOS EM ABERTO</Text>
                  <Text style={styles.faturasText}>
                    {'Aqui você tem acesso somente à faturas emitidas\n nos ultimos 90 dias. Para acesso completo às\n faturas, faça login '} 
                    <Text style={{ textDecorationLine: 'underline' }} onPress={() => navigation.navigate('LoginPage')}>
                      CLICANDO AQUI
                    </Text>
                  </Text>
                  <View style={styles.cardContainer}>
                    <GestureHandlerRootView>
                      <Carousel
                        loop={false}
                        width={width}
                        height={width / 1.4}
                        autoPlay={false}
                        data={contasFornecimento.slice(0, 3)}
                        scrollAnimationDuration={1000}
                        renderItem={({ item }) => (
                          <CardFatura 
                            item={item} 
                            setPagamento={setPagamento} 
                            setFatura={setFatura}
                          />
                        )}
                      />
                    </GestureHandlerRootView>
                  </View>
                </View>
                {pagamento ? <Pagamento fatura={fatura}/> : null }
              </>
            ) : (
              <>
                <View style={styles.linkContainer}>
                  <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://sabesp.s3.amazonaws.com/guiaFatura.pdf')}>
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