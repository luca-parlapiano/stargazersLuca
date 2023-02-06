import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {ListItem} from '../components/ListItem';

// THIS PAGE SHOWING USERS WITH AVATAR AND LOGIN

export function StarListScreen() {
  const [list, setList] = useState([]);

  const route = useRoute();

  React.useEffect(() => {
    setList(route.params?.data);
  }, []);

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
