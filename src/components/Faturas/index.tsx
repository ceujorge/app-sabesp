import React, { useState } from "react";
import { View, useWindowDimensions, ScrollView, SafeAreaView } from "react-native";
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import styles from "./styles";
import Header from "../Header";
import FaturaSimplificada from "./FaturaSimplificada";
import Servicos from "../Servicos";
import Login from "../Login";

export default function Faturas({ navigation }) {
    const layout = useWindowDimensions();

    const renderScene = SceneMap({
        first: () => <FaturaSimplificada navigation={navigation}/>,
        second: () => <ScrollView><Login navigation={navigation}/><Servicos navigation={navigation}/></ScrollView>,
    });

    const renderTabBar = props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: '#00a5e4' }}
          style={{ backgroundColor: '#fff' }}
          labelStyle={{ color: '#303030', fontWeight: 'bold', textTransform: 'capitalize' }}
          activeColor='#00a5e4'
        />
    );

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Fatura\nSimplificada' },
        { key: 'second', title: 'Fatura\nCompleta' },
    ]);

    return (
        <SafeAreaView style={{flex: 1}}>    
            <Header />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
                style={styles.tabView}
                swipeEnabled={false}
            />
        </SafeAreaView>
    );
}