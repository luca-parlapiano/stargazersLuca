import React from 'react';

//Screen
import {HomeScreen, StarListScreen} from './page/Screen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  DettagliUtente: {idUtente: number} | undefined;
  ListaStelle: any;
};

//START PAGE in this page there is only the navigation stack.

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  let navigationRef = React.useRef(null);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ListaStelle" component={StarListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
