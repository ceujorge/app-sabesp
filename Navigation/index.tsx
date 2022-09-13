import React from "react";
import { View, Button } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

import Login from '../src/components/Login';
import Fatura from '../src/components/Fatura';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation() {
    return (
        <NavigationContainer linking={LinkingConfiguration}>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }: any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Fatura" onPress={() => navigation.navigate('Fatura')} />
        </View>
    );
}

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Fatura" component={Fatura} options={{ title: 'Agência Virtual' }} />
        </Stack.Navigator>
    );
}