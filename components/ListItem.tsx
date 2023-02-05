import {View} from 'react-native';
import React from 'react';
import {Card, Avatar, Text} from 'react-native-elements';

interface Props {
  index: number;
  avatarUrl: string;
  userLogin: string;
}

export function ListItem(props: Props) {
  return (
    <View key={props.index}>
      <Card>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View>
            <Avatar source={{uri: props.avatarUrl}} />
          </View>
          <View>
            <Text
              style={{
                marginLeft: 20,
                marginVertical: 1,
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              {props.userLogin}
            </Text>
          </View>
        </View>
      </Card>
    </View>
  );
}
