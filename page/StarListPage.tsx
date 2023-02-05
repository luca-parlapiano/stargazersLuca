import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Card, Avatar} from 'react-native-elements';
import { ListItem } from '../components/ListItem';

export function StarListScreen() {
  const [list, setList] = useState([]);

  const route = useRoute();

  React.useEffect(() => {
    setList(route.params.data);
    //console.log(route.params.data);
  }, []);
  {
    console.log(list);
  }

  return (
    <View style={{justifyContent: 'center'}}>
      <ScrollView>
        {list.map((item, index) => {
          return (
            <ListItem
              index={index}
              avatarUrl={item.avatar_url}
              userLogin={item.login}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
