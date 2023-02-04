import React from 'react';

import {HomeScreen, UserDetailScreen, StarListScreen} from './page/Screen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  DettagliUtente: {idUtente: number} | undefined;
  ListaStelle: any;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  let navigationRef = React.useRef(null);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ListaStelle" component={StarListScreen} />
        <Stack.Screen name="DettagliUtente" component={UserDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
