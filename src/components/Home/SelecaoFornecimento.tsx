import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, Modal } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons/faCircleQuestion";
import axios from "axios";

import styles from "./styles";

const capitalize = (string) => {
  let str = string;

  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
  }
  str = words.join(' ');

  return str
}

const CardFornecimento: React.FC<{ 
    fornecimento: any, 
    setFornecimento: any, 
    setEndereco: any,
    setTela: any,
  }> = ({fornecimento, setFornecimento, setEndereco, setTela}) => {
    const [endereco, setEnd] = useState('');
    const [situacao, setSit] = useState('');

    useEffect(() => {
      axios.get('https://pwa-api-nsint.sabesp.com.br/viario/fornecimento/' + fornecimento.codigo + '/endereco')
        .then(resp => {
          setEnd(resp.data);
        })

      axios.get('https://pwa-api-nsint.sabesp.com.br/fornecimento/' + fornecimento.codigo)
        .then(resp => {
          setSit(capitalize(resp.data.status));
        })
    }, [])

    const setDados = () => {
      setFornecimento(fornecimento);
      setEndereco(endereco);
      setTela(0);
    }

    return (
      <TouchableOpacity style={styles.borderedContainer} onPress={() => setDados()}>
        <Text style={styles.textAzul}>Endereço</Text>
          <Text style={styles.textBold}>{endereco ? `${endereco.toponimo} ${endereco.nomeLogradouro}, ${endereco.numeroImovel}, ${endereco.bairro}, ${endereco.nomeMunicipio} - ${endereco.estado}, ${endereco.cep}` : 'Nenhum endereço encontrado'}</Text>
        <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginTop: 5, marginBottom: 5 }}/>

        <View style={styles.row}>
          <View style={{ width: '60%' }}>
            <Text style={styles.textAzul}>Fornecimento</Text>
            <Text style={styles.textBold}>{fornecimento.codigo}</Text>
          </View>
          <View style={{ width: '40%' }}>
            <Text style={styles.textAzul}>Situação</Text>
            <Text style={styles.text}>{situacao}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

export default function SelecaoFornecimento({ fornecimentos, setFornecimento, setEndereco, setTela }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={[styles.textBold, {fontSize: 18}]}>Fornecimentos em seu nome.</Text>
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <FontAwesomeIcon icon={ faCircleQuestion } size={20} style={styles.caret}/>
        </TouchableOpacity>
      </View>
      <Text style={[styles.text, {color: '#a0a0a0'}]}>Selecione o fornecimento para exibir sua fatura.</Text>


      {fornecimentos.map(fornecimento => (
        <CardFornecimento 
          fornecimento={fornecimento} 
          setFornecimento={setFornecimento} 
          setEndereco={setEndereco}
          setTela={setTela}
        />
      ))}

      <Text style={styles.contadorText}>{`Exibindo ${String(fornecimentos.length).padStart(2, '0')} de ${String(fornecimentos.length).padStart(2, '0')}`}</Text>

      <Modal animationType="slide" visible={showModal} transparent={true}>
      <ScrollView style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Endereço</Text>

            <Text style={[styles.text, {marginBottom: 10}]}>Se você não encontrou algum endereço ou fornecimento na lista, é porque não é o titular dele. Caso você entenda que deveria ser, acesse o serviço de <Text style={styles.hyperlink}>Troca de titularidade.</Text></Text>
            <Text style={styles.text}>Caso você já seja o titular ou o problema persistir, entre em contato com o nosso <Text style={styles.hyperlink}>chat</Text> ou pelo telefone <Text style={styles.textBold}>0800 055 0195.</Text></Text>

            <TouchableOpacity style={styles.modalButton} onPress={() => setShowModal(false)}>
              <Text style={styles.modalButtonText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Modal>

    </View>
  ) 
}