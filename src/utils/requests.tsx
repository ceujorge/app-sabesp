import React from "react";
import axios from "axios";

const env = 'https://pwa-api-nsintsabesp.com.br'

export default function requests() {
  return (<></>);
}

requests.getFaturaFornecimento = (fornecimento:string) => {
  axios.get(env + '/fatura/fornecimento/' + fornecimento)
    .then(res => {
      console.log(res);
    })
}