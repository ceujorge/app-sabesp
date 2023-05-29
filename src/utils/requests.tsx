import React from "react";
import axios from "axios";

const env = 'http://pwa-api-nsquasabesp.com.br'

export default function requests() {
  return (<></>);
}

requests.getFaturaFornecimento = (fornecimento:string) => {
  axios.get(env + '/fatura/fornecimento/' + fornecimento)
    .then(res => {
      console.log(res);
    })
}