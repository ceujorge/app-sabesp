import React, { useState } from "react";
import { useWindowDimensions} from "react-native";
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import styles from "./styles";
import Header from "../Header";
import FaturaCompleta from "./FaturaCompleta";
import FaturaSimplificada from "./FaturaSimplificada";

export default function Faturas({ navigation }) {
    const layout = useWindowDimensions();

    const renderScene = SceneMap({
        first: () => <FaturaSimplificada navigation={navigation}/>,
        second: () => <FaturaCompleta navigation={navigation}/>,
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
        <>    
            <Header />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
                style={styles.tabView}
            />
        </>
    );
}