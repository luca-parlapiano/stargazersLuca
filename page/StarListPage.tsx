import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

export function StarListScreen() {
 
  const route = useRoute();

  React.useEffect(() => {
    console.log(route.params);
    
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Lista utenti Con le stelle</Text>
    </View>
  );
}
