import React, { useState } from "react";
import { View, Text, Image, ScrollView, Button, TouchableOpacity } from "react-native";
import { TextInputMask } from 'react-native-masked-text';
import RNPickerSelect from 'react-native-picker-select';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

import Header from "../Header";

import styles from "./styles";


export default function Fatura() {

    const [activeSections, setActiveSections]: any = useState('');
    const [collapsed, setCollapsed]: any = useState(true);
    const [collapsedHistory, setCollapsedHistory]: any = useState(false);

    const state = {
        activeSections: [],
        collapsed: true,
    };

    const toggleExpanded = () => {
        setCollapsed(!collapsed);
    };

    const toggleExpandedHistory = () => {
        setCollapsedHistory(!collapsedHistory);
    };

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.scrollView}>
                <View style={styles.box}>

                    <Text style={styles.boxTitle}>Selecione o endereço</Text>

                    <Text style={styles.label}>Endereço</Text>
                    <RNPickerSelect onValueChange={(value) => console.log(value)} value={''} style={styles.comboBox}
                        items={[
                            { label: 'Selecione', value: '' },
                            { label: 'SAO PAULO - RUA ANTONIO JOAO DE MEDEIROS', value: 'teste' },
                        ]}
                    />

                    <View style={styles.itens}>
                        <View>
                            <Text>Fornecimento</Text>
                            <Text style={styles.bold}>0073027707</Text>
                        </View>
                        <View>
                            <Text>Próximo Vencimento</Text>
                            <Text style={styles.bold}>05/09/2021</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.box}>
                    <TouchableOpacity onPress={toggleExpanded}>
                        <View style={styles.header}>
                            <View>
                                <Image style={styles.tinyLogo} source={require('../../../assets/icons/fts.png')} />
                                <Text style={styles.headerText}>
                                    Faturas e pagamentos
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.headerTextRight}>+</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Collapsible collapsed={collapsed}>
                        <View style={styles.content}>
                            <Animatable.Text animation={collapsed ? undefined : 'zoomIn'} duration={300} useNativeDriver>
                                Teste
                            </Animatable.Text>
                        </View>
                    </Collapsible>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity onPress={toggleExpandedHistory}>
                        <View style={styles.header}>
                            <View>
                                <Image style={styles.tinyLogo} source={require('../../../assets/icons/hts.png')} />
                                <Text style={styles.headerText}>
                                    Histórico de consumo
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.headerTextRight}>-</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Collapsible collapsed={collapsedHistory}>
                        <View style={styles.content}>
                            <Animatable.Text animation={collapsedHistory ? undefined : 'zoomIn'} duration={300} useNativeDriver>
                                <View style={styles.maturityValues}>
                                    <View style={styles.maturityValue}>
                                        <Text style={styles.maturityValue}>
                                            <Text style={styles.maturityPayed}>Paga</Text>{"\n"}
                                            R$ 45,23{"\n"}
                                            11m³
                                        </Text>
                                    </View>
                                    <View style={styles.maturityValue}>
                                        <Text style={styles.maturityValue}>
                                            Aberta{"\n"}
                                            R$ 60,52{"\n"}
                                            20m³
                                        </Text>
                                    </View>
                                    <View style={styles.maturityValue}>
                                        <Text style={styles.maturityValue}>
                                            Aberta{"\n"}
                                            --{"\n"}
                                            m³
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.maturity}>
                                    <View style={styles.maturityItem}>
                                        <Text>
                                            Vencimento{"\n"}
                                            05/08/2022
                                        </Text>
                                    </View>
                                    <View style={styles.maturityItemActive}>
                                        <Text style={styles.whiteColor}>
                                            Vencimento{"\n"}
                                            05/09/2022
                                        </Text>
                                    </View>
                                    <View style={styles.maturityItem}>
                                        <Text>
                                            Vencimento{"\n"}
                                            05/10/2022
                                        </Text>
                                    </View>
                                </View>
                            </Animatable.Text>
                        </View>
                    </Collapsible>
                </View>
            </ScrollView>
        </View>
    );
}