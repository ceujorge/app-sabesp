import React, { useState } from "react";
import { View, Text, Modal, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { TextInput, Checkbox, RadioButton } from "react-native-paper";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck'
import { Picker } from '@react-native-picker/picker';

import Header from "../Header";
import Breadcrumb from "../Breadcrumb"

import styles from "./styles";

const breadcrumb = [
  {label: 'Home', link: 'Home'}, 
  {label: 'Alteração de endereço', link: '', active: true}
]

export default function AlterarEndereco({ navigation }) {
  const [step, setStep] = useState(1);
  const [fornecimento, setFornecimento] = useState('1018261920001');
  const [checkFaturas, setCheckFaturas] = useState('');
  const [checkCorrespondencias, setCheckCorrespondencias] = useState('');
  const [enderecoFaturas, setEnderecoFaturas] = useState({});
  const [enderecoCorrespondencia, setEnderecoCorrespondencia] = useState({});
  const [checked, setChecked] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <SafeAreaView>
      <Header/>
      <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
        <Breadcrumb config={ breadcrumb } navigation={ navigation }/>
        <View style={styles.steps}>
          <FontAwesomeIcon icon={ faCircle } size={14} style={styles.activeStep}/>
          <Text style={styles.activeStep}>Identificação</Text>
          <FontAwesomeIcon icon={ faMinus } size={14} style={step >= 2 ? styles.activeStep : styles.inactiveStep}/>
          <FontAwesomeIcon icon={ faCircle } size={14} style={step >= 2 ? styles.activeStep : styles.inactiveStep}/>
          <Text style={step >= 2 ? styles.activeStep : styles.inactiveStep}>Detalhamento</Text>
          <FontAwesomeIcon icon={ faMinus } size={14} style={step == 3 ? styles.activeStep : styles.inactiveStep}/>
          <FontAwesomeIcon icon={ faCircle } size={14} style={step == 3 ? styles.activeStep : styles.inactiveStep}/>
          <Text style={step >= 4 ? styles.activeStep : styles.inactiveStep}>Confirmação</Text>
        </View>

        <Text style={styles.title}>Alterar Endereço da Fatura</Text>

        {step == 1 ? (<View style={styles.container}>
          <TextInput 
            label='Fornecimento' 
            theme={{ colors: { primary: '#00a5e4' }}}
            value={fornecimento}
            onChangeText={value => setFornecimento(value)}
          />

          <Text style={styles.title}>Selecione o que deseja fazer:</Text>

          <View style={styles.checkBoxContainer}>
            <Checkbox.Android
              status={checkFaturas ? 'checked' : 'unchecked'}
              onPress={() => setCheckFaturas(!checkFaturas)}
            />
            <Text style={[styles.textLeftBold, {marginTop: 10}]}>Alterar endereço de entrega das faturas</Text>
          </View>

          <Text style={styles.textLeft}>Este é o endereço atualmente cadastrado para entrega das faturas:</Text>
          <View style={styles.blueDiv}>
            <Text style={styles.textLeftBold}>CEP: <Text style={styles.textLeft}>09820-760</Text></Text>
            <Text style={styles.textLeftBold}>Endereço: <Text style={styles.textLeft}>Rua Albina Silva, 31</Text></Text>
            <Text style={styles.textLeftBold}>Bairro: <Text style={styles.textLeft}>PQ TERRA NOVA II</Text></Text>
            <Text style={styles.textLeftBold}>Município: <Text style={styles.textLeft}>SÃO BERNARDO DO CAMPO - SP</Text></Text>
          </View>

          <View style={styles.checkBoxContainer}>
            <Checkbox.Android
              status={checkCorrespondencias ? 'checked' : 'unchecked'}
              onPress={() => setCheckCorrespondencias(!checkCorrespondencias)}
            />
            <Text style={[styles.textLeftBold, {marginTop: 10}]}>Alterar endereço para correspondências</Text>
          </View>

          <View style={styles.blueDiv}>
            <Text style={styles.textLeft}>Nenhum endereço cadastrado.</Text>
          </View>

          <Text style={styles.title}>Esta solicitação não altera o endereço do fornecimento e não é válida para faturas já emitidas.</Text>

          <TouchableOpacity 
            style={checkFaturas || checkCorrespondencias ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
            onPress={() => setStep(2)} 
            disabled={!(checkFaturas || checkCorrespondencias)}>
            <Text style={styles.textButtonSubmit}>Continuar</Text>
          </TouchableOpacity>
        </View>) : null}

        {step == 2 ? (<View style={styles.container}>

          {checkFaturas ? (<>
            <View style={styles.checkBoxContainer}>
              <Checkbox.Android
                status={'checked'}
                disabled={true}
              />
              <Text style={[styles.textLeftBold, {marginTop: 10}]}>Alterar endereço de entrega das faturas</Text>
            </View>
            <View style={styles.blueDiv}>
              <Image style={{ height: 52, width: 250, margin: 10 }} source={require('../../../assets/brand/logo_correios.png')} />
              <TextInput 
                label='CEP' 
                theme={{ colors: { primary: '#00a5e4' }}}
                value={enderecoFaturas.cep}
                style={{ margin: 10 }}
                keyboardType='numeric'
                onChangeText={value => setEnderecoFaturas({...enderecoFaturas, 'cep': value})}
              />

              <View style={{width: '100%', margin: 12,}}>
                <Text style={[styles.textLeft, {color: '#606060'}]}>Tipo</Text>
                <Picker 
                  style={{backgroundColor: '#e7e7e7', width: '93%'}}
                  onValueChange={value => { setEnderecoFaturas({...enderecoFaturas, 'tipo': value}) }}
                  selectedValue={enderecoFaturas.tipo}>
                    <Picker.Item label="Selecione" value="" />
                    <Picker.Item label="aeroporto" value="aeroporto" />
                    <Picker.Item label="alameda" value="alameda" />
                    <Picker.Item label="área" value="área" />
                    <Picker.Item label="avenida" value="avenida" />
                    <Picker.Item label="campo" value="campo" />
                    <Picker.Item label="chácara" value="chácara" />
                    <Picker.Item label="colônia" value="colônia" />
                    <Picker.Item label="condomínio" value="condomínio" />
                    <Picker.Item label="conjunto" value="conjunto" />
                    <Picker.Item label="distrito" value="distrito" />
                    <Picker.Item label="esplanada" value="esplanada" />
                    <Picker.Item label="estação" value="estação" />
                    <Picker.Item label="estrada" value="estrada" />
                    <Picker.Item label="favela" value="favela" />
                    <Picker.Item label="fazenda" value="fazenda" />
                    <Picker.Item label="feira" value="feira" />
                    <Picker.Item label="jardim" value="jardim" />
                    <Picker.Item label="ladeira" value="ladeira" />
                    <Picker.Item label="lago" value="lago" />
                    <Picker.Item label="lagoa" value="lagoa" />
                    <Picker.Item label="largo" value="largo" />
                    <Picker.Item label="loteamento" value="loteamento" />
                    <Picker.Item label="morro" value="morro" />
                    <Picker.Item label="núcleo" value="núcleo" />
                    <Picker.Item label="parque" value="parque" />
                    <Picker.Item label="passarela" value="passarela" />
                    <Picker.Item label="pátio" value="pátio" />
                    <Picker.Item label="praça" value="praça" />
                    <Picker.Item label="quadra" value="quadra" />
                    <Picker.Item label="recanto" value="recanto" />
                    <Picker.Item label="residencial" value="residencial" />
                    <Picker.Item label="rodovia" value="rodovia" />
                    <Picker.Item label="rua" value="rua" />
                    <Picker.Item label="setor" value="setor" />
                    <Picker.Item label="sítio" value="sítio" />
                    <Picker.Item label="travessa" value="travessa" />
                    <Picker.Item label="trecho" value="trecho" />
                    <Picker.Item label="trevo" value="trevo" />
                    <Picker.Item label="vale" value="vale" />
                    <Picker.Item label="vereda" value="vereda" />
                    <Picker.Item label="via" value="via" />
                    <Picker.Item label="viaduto" value="viaduto" />
                    <Picker.Item label="viela" value="viela" />
                    <Picker.Item label="vila" value="vila" />
                </Picker>
              </View>

              <View style={styles.row}>
                <View style={{width: '60%', margin: 12,}}>
                  <Text style={[styles.textLeft, {color: '#606060'}]}>Número</Text>
                  <Picker 
                    style={{backgroundColor: '#e7e7e7'}}
                    onValueChange={value => { setEnderecoFaturas({...enderecoFaturas, 'tipoNumero': value}) }}
                    selectedValue={enderecoFaturas.tipoNumero}>
                      <Picker.Item label="Selecione" value="" />
                      <Picker.Item label="Gleba" value="Gleba" />
                      <Picker.Item label="Lote" value="Lote" />
                      <Picker.Item label="Número" value="Número" />
                      <Picker.Item label="Quadra" value="Quadra" />
                      <Picker.Item label="Quilômetro" value="Quilômetro" />
                      <Picker.Item label="Sem número" value="Sem número" />
                  </Picker>
                </View>

                <TextInput 
                  label='Numero' 
                  theme={{ colors: { primary: '#00a5e4' }}}
                  value={enderecoFaturas.numero}
                  style={{ margin: 10, width: '27%', alignSelf: 'flex-end' }}
                  onChangeText={value => setEnderecoFaturas({...enderecoFaturas, 'numero': value})}
                />
              </View>

              <TextInput 
                label='Endereço' 
                theme={{ colors: { primary: '#00a5e4' }}}
                value={enderecoFaturas.endereco}
                style={{ margin: 10 }}
                onChangeText={value => setEnderecoFaturas({...enderecoFaturas, 'endereco': value})}
              />
              <TextInput 
                label='Complemento' 
                theme={{ colors: { primary: '#00a5e4' }}}
                value={enderecoFaturas.complemento}
                style={{ margin: 10 }}
                onChangeText={value => setEnderecoFaturas({...enderecoFaturas, 'complemento': value})}
              />
              <TextInput 
                label='Bairro' 
                theme={{ colors: { primary: '#00a5e4' }}}
                value={enderecoFaturas.bairro}
                style={{ margin: 10 }}
                onChangeText={value => setEnderecoFaturas({...enderecoFaturas, 'bairro': value})}
              />
              <TextInput 
                label='Municipio' 
                theme={{ colors: { primary: '#00a5e4' }}}
                value={enderecoFaturas.municipio}
                style={{ margin: 10 }}
                onChangeText={value => setEnderecoFaturas({...enderecoFaturas, 'municipio': value})}
              />

            </View> 
          </>) : null}

          {checkCorrespondencias ? (<>
            <View style={styles.checkBoxContainer}>
              <Checkbox.Android
                status={'checked'}
                disabled={true}
              />
              <Text style={[styles.textLeftBold, {marginTop: 10}]}>Alterar endereço para correspondências</Text>
            </View>
            <View style={styles.blueDiv}>
              <Image style={{ height: 52, width: 250, margin: 10 }} source={require('../../../assets/brand/logo_correios.png')} />
              <TextInput 
                label='CEP' 
                theme={{ colors: { primary: '#00a5e4' }}}
                value={enderecoCorrespondencia.cep}
                style={{ margin: 10 }}
                keyboardType='numeric'
                onChangeText={value => setEnderecoCorrespondencia({...enderecoCorrespondencia, 'cep': value})}
              />

              <View style={{width: '100%', margin: 12,}}>
                <Text style={[styles.textLeft, {color: '#606060'}]}>Tipo</Text>
                <Picker 
                  style={{backgroundColor: '#e7e7e7', width: '93%'}}
                  onValueChange={value => { setEnderecoCorrespondencia({...enderecoCorrespondencia, 'tipo': value}) }}
                  selectedValue={enderecoCorrespondencia.tipo}>
                    <Picker.Item label="Selecione" value="" />
                    <Picker.Item label="aeroporto" value="aeroporto" />
                    <Picker.Item label="alameda" value="alameda" />
                    <Picker.Item label="área" value="área" />
                    <Picker.Item label="avenida" value="avenida" />
                    <Picker.Item label="campo" value="campo" />
                    <Picker.Item label="chácara" value="chácara" />
                    <Picker.Item label="colônia" value="colônia" />
                    <Picker.Item label="condomínio" value="condomínio" />
                    <Picker.Item label="conjunto" value="conjunto" />
                    <Picker.Item label="distrito" value="distrito" />
                    <Picker.Item label="esplanada" value="esplanada" />
                    <Picker.Item label="estação" value="estação" />
                    <Picker.Item label="estrada" value="estrada" />
                    <Picker.Item label="favela" value="favela" />
                    <Picker.Item label="fazenda" value="fazenda" />
                    <Picker.Item label="feira" value="feira" />
                    <Picker.Item label="jardim" value="jardim" />
                    <Picker.Item label="ladeira" value="ladeira" />
                    <Picker.Item label="lago" value="lago" />
                    <Picker.Item label="lagoa" value="lagoa" />
                    <Picker.Item label="largo" value="largo" />
                    <Picker.Item label="loteamento" value="loteamento" />
                    <Picker.Item label="morro" value="morro" />
                    <Picker.Item label="núcleo" value="núcleo" />
                    <Picker.Item label="parque" value="parque" />
                    <Picker.Item label="passarela" value="passarela" />
                    <Picker.Item label="pátio" value="pátio" />
                    <Picker.Item label="praça" value="praça" />
                    <Picker.Item label="quadra" value="quadra" />
                    <Picker.Item label="recanto" value="recanto" />
                    <Picker.Item label="residencial" value="residencial" />
                    <Picker.Item label="rodovia" value="rodovia" />
                    <Picker.Item label="rua" value="rua" />
                    <Picker.Item label="setor" value="setor" />
                    <Picker.Item label="sítio" value="sítio" />
                    <Picker.Item label="travessa" value="travessa" />
                    <Picker.Item label="trecho" value="trecho" />
                    <Picker.Item label="trevo" value="trevo" />
                    <Picker.Item label="vale" value="vale" />
                    <Picker.Item label="vereda" value="vereda" />
                    <Picker.Item label="via" value="via" />
                    <Picker.Item label="viaduto" value="viaduto" />
                    <Picker.Item label="viela" value="viela" />
                    <Picker.Item label="vila" value="vila" />
                </Picker>
              </View>

              <View style={styles.row}>
                <View style={{width: '60%', margin: 12,}}>
                  <Text style={[styles.textLeft, {color: '#606060'}]}>Número</Text>
                  <Picker 
                    style={{backgroundColor: '#e7e7e7'}}
                    onValueChange={value => { setEnderecoCorrespondencia({...enderecoCorrespondencia, 'tipoNumero': value}) }}
                    selectedValue={enderecoCorrespondencia.tipoNumero}>
                      <Picker.Item label="Selecione" value="" />
                      <Picker.Item label="Gleba" value="Gleba" />
                      <Picker.Item label="Lote" value="Lote" />
                      <Picker.Item label="Número" value="Número" />
                      <Picker.Item label="Quadra" value="Quadra" />
                      <Picker.Item label="Quilômetro" value="Quilômetro" />
                      <Picker.Item label="Sem número" value="Sem número" />
                  </Picker>
                </View>

                <TextInput 
                  label='Numero' 
                  theme={{ colors: { primary: '#00a5e4' }}}
                  value={enderecoCorrespondencia.numero}
                  style={{ margin: 10, width: '27%', alignSelf: 'flex-end' }}
                  onChangeText={value => setEnderecoCorrespondencia({...enderecoCorrespondencia, 'numero': value})}
                />
              </View>

              <TextInput 
                label='Endereço' 
                theme={{ colors: { primary: '#00a5e4' }}}
                value={enderecoCorrespondencia.endereco}
                style={{ margin: 10 }}
                onChangeText={value => setEnderecoCorrespondencia({...enderecoCorrespondencia, 'endereco': value})}
              />
              <TextInput 
                label='Complemento' 
                theme={{ colors: { primary: '#00a5e4' }}}
                value={enderecoCorrespondencia.complemento}
                style={{ margin: 10 }}
                onChangeText={value => setEnderecoCorrespondencia({...enderecoCorrespondencia, 'complemento': value})}
              />
              <TextInput 
                label='Bairro' 
                theme={{ colors: { primary: '#00a5e4' }}}
                value={enderecoCorrespondencia.bairro}
                style={{ margin: 10 }}
                onChangeText={value => setEnderecoCorrespondencia({...enderecoCorrespondencia, 'bairro': value})}
              />
              <TextInput 
                label='Municipio' 
                theme={{ colors: { primary: '#00a5e4' }}}
                value={enderecoCorrespondencia.municipio}
                style={{ margin: 10 }}
                onChangeText={value => setEnderecoCorrespondencia({...enderecoCorrespondencia, 'municipio': value})}
              />

            </View> 
          </>) : null}
          
          <TouchableOpacity 
            style={styles.buttonSubmit} 
            onPress={() => setStep(3)}>
            <Text style={styles.textButtonSubmit}>Continuar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.buttonOutline} onPress={() => setStep(1)}>
            <Text style={styles.textButtonOutline}>Voltar</Text>
          </TouchableOpacity>
        </View>) : null}

        {step == 3 ? (<View style={styles.container}>
          <Text style={styles.title}>Confirme os dados da solicitação</Text>
          <Text style={styles.title}>Alterar endereço de entrega das faturas</Text>

          <Text style={styles.textLeft}>Este é o endereço atualmente cadastrado para entrega das faturas:</Text>

          <View style={styles.blueDiv}>
            <Text style={styles.textLeftBold}>CEP: <Text style={styles.textLeft}>09820-760</Text></Text>
            <Text style={styles.textLeftBold}>Endereço: <Text style={styles.textLeft}>Rua Albina Silva, 31</Text></Text>
            <Text style={styles.textLeftBold}>Bairro: <Text style={styles.textLeft}>PQ TERRA NOVA II</Text></Text>
            <Text style={styles.textLeftBold}>Município: <Text style={styles.textLeft}>SÃO BERNARDO DO CAMPO - SP</Text></Text>
          </View>

          <Text style={styles.textLeft}>Alterar para:</Text>

          <View style={styles.blueDiv}>
            <Text style={styles.textLeftBold}>CEP: <Text style={styles.textLeft}>{enderecoFaturas.cep}</Text></Text>
            <Text style={styles.textLeftBold}>Endereço: <Text style={styles.textLeft}>{enderecoFaturas.endereco + ' ' + enderecoFaturas.numero}</Text></Text>
            <Text style={styles.textLeftBold}>Bairro: <Text style={styles.textLeft}>{enderecoFaturas.bairro}</Text></Text>
            <Text style={styles.textLeftBold}>Município: <Text style={styles.textLeft}>{enderecoFaturas.municipio}</Text></Text>
          </View>

          <Text style={styles.textLeftBold}>Preço: <Text style={styles.textLeft}>Gratuíto</Text></Text>
          <View style={styles.checkBoxContainer}>
            <Checkbox.Android
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => setChecked(!checked)}
            />
            <Text style={[styles.textLeftBold, {marginTop: 10}]}>Sim, confirmo o pedido</Text>
          </View>

          <TouchableOpacity 
            style={checked ? styles.buttonSubmit : styles.buttonSubmitDisabled} 
            onPress={() => setModal(true)} 
            disabled={!checked}>
            <Text style={styles.textButtonSubmit}>Continuar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.buttonOutline} onPress={() => setStep(2)}>
            <Text style={styles.textButtonOutline}>Voltar</Text>
          </TouchableOpacity>
        </View>) : null}


        <Modal animationType="slide" visible={modal} transparent={true}>
            <ScrollView>
              <View style={styles.modalView}>
                <View style={styles.centerView}>
                  <FontAwesomeIcon icon={ faCircleCheck } size={100} style={{ color: '#00a000', marginTop: 30}}/>
                  <Text style={styles.title}>Sua solicitação foi concluída!</Text>
                  <Text style={styles.textLeft}>Descrição: <Text style={styles.textLeftBold}>Alterar Endereços</Text></Text>
                  <Text style={styles.textLeft}>Número da solicitação: <Text style={styles.textLeftBold}>12345678910</Text></Text>
                  <Text style={styles.textLeft}>Data e hora do pedido: <Text style={styles.textLeftBold}>09/03/2023 15:32.</Text></Text>

                  <TouchableOpacity 
                    style={styles.buttonSubmit} 
                    onPress={() => {
                      setStep(1);
                      setModal(false);
                      navigation.navigate('Home')
                    }}>
                    <Text style={styles.textButtonSubmit}>Página inicial</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </Modal>

      </ScrollView>
    </SafeAreaView>
  );
}