import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import Collapsible from 'react-native-collapsible';
import * as Animatable from 'react-native-animatable';
import { LineChart } from "react-native-chart-kit";

import styles from "./styles";
import mocks from "../../mocks/mocks";
import Pagamento from "../Pagamento";

const graphValues = [
  //estado, valor, label de metros cubicos e ponto no gráfico
  ['Paga', 'R$ 45,23','11m³', 11], 
  ['Aberta', 'R$ 60,53', '20m³', 20],
  ['Aberta', '-', 'm³', 7],
]

export default function HistoricoPagamento({ navigation }) {
  const [historico, setHistorico] = useState([])
  const [collapsed, setCollapsed] = useState(true);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  const renderDot = ({x, y, index, indexData}) => {
    return (
      <View style={[styles.centerDot, { top: y - 61, left: x - 25 }]}>
        <Text style={{ fontWeight: 'bold' }}>{graphValues[index][0]}</Text>
        <Text style={{ fontWeight: 'bold' }}>{graphValues[index][1]}</Text>
        <Text style={{ fontSize: 12 }}>{graphValues[index][2]}</Text>
      </View>
    )
  }

  useEffect(() => {
    setHistorico(mocks.codigoFornecimento);
  }, [])

  return (
    <>
      <LineChart
        data={{
          labels: ["coluna 1", "coluna 2", "coluna 3"],
          datasets: [
            {
              data: graphValues.map(valor => valor[3]), // dataset
              color: (opacity = 1) => `rgba(30, 54, 80, ${opacity})`,
            },
            {
              data: [50], // max
              withDots: false, 
            },
          ]
        }}
        width={Dimensions.get("window").width * 1.2}
        withVerticalLines={false}
        withHorizontalLines={false}
        withHorizontalLabels={false}
        withShadow={false}
        height={100}
        chartConfig={{
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          color: (opacity = 1) => `rgba(30, 54, 80, ${opacity})`,
        }}
        fromZero={true}
        getDotColor={(dataPoint, dataPointIndex) => {
          if (dataPointIndex === 2) {
            return 'rgba(211, 211, 211, 1)';
          }
            return 'rgba(30, 54, 80, 1)';
        }}
        renderDotContent={renderDot}
        style={{ marginLeft: -7 }}
        bezier
      />
      <View style={styles.detailsView}>
        <View style={styles.borderedContainer}>
          <View style={styles.row}>
            <Text style={styles.whiteTextBold}>Apresentação</Text>
            <Text style={styles.whiteTextBold}>Data</Text>
            <Text style={styles.whiteTextBold}>Leitura</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.whiteText}>Leitura atual    </Text>
            <Text style={styles.whiteText}>05/08/2022</Text>
            <Text style={styles.whiteText}>370</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.whiteText}>Leitura anterior</Text>
            <Text style={styles.whiteText}>05/07/2022</Text>
            <Text style={styles.whiteText}>362</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.whiteText}>Próxima Leitura</Text>
            <Text style={styles.whiteText}>05/09/2022</Text>
            <Text style={styles.whiteText}>       </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.whiteTextBold}>Consumo m³</Text>
            <Text style={styles.whiteText}>8</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.whiteTextBold}>Período de consumo</Text>
            <Text style={styles.whiteText}>30 Dias</Text>
          </View>
        </View>

        <View style={styles.borderedContainer}>
          <View style={styles.centerRow}>
            <Text style={styles.whiteTextBold}>DISCRIMINAÇÃO DO FATURAMENTO</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.whiteText}>Água</Text>
            <Text style={styles.whiteText}>R$ 29,00</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.whiteText}>Esgoto</Text>
            <Text style={styles.whiteText}>R$ 29,00</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.whiteText}>Multa</Text>
            <Text style={styles.whiteText}>R$ 1,33</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.whiteText}>Atualização Monetária</Text>
            <Text style={styles.whiteText}>R$ 0,35</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.whiteText}>Juros de Mora</Text>
            <Text style={styles.whiteText}>R$ 0,55</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.whiteText}>Taxa de Regulação - TRCF</Text>
            <Text style={styles.whiteText}>R$ 0,38</Text>
          </View>
        </View>

        <View style={styles.solidContainer}>
          <View style={styles.centerRow}>
            <Text>Vencimento: 05/10/2022</Text>
          </View>
          <View style={styles.centerRow}>
            <Text style={{ fontWeight: 'bold' }}>Total a pagar R$ 60,53</Text>
          </View>
        </View>

        <View style={styles.borderedContainer}>
          <View style={styles.row}>
            <Text style={styles.whiteTextNoSpace}>{'Calculo da fatura residencial\npor economia'}</Text>
            <Text style={styles.whiteTextNoSpace}>+</Text>
          </View>
        </View>
      </View>

      <View style={{ marginRight: 10, marginLeft: 10 }}>
        {historico.length ? <Pagamento fatura={historico[0]} dropdown={true}/> : null}
      </View>
    </>
  )
}
