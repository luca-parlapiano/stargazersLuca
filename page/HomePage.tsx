import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {GitHubInput} from '../components/GitHubInput';
import {Card, Button, Icon} from 'react-native-elements';
import Strings from '../Strings';

export function HomeScreen() {
  const [loading, setLoading] = useState<Boolean>(false);
  const [gitHubUser, setGitHubUser] = useState<String>();
  const [gitHubRepository, setGitHubRepository] = useState<string>();

  const checkUser = (
    type: string,
    gitHubUser?: string,
    gitHubRepository?: string,
  ) => {
    console.log('Controllo type ' + type);
    console.log('Controllo gitHubUser ' + gitHubUser);
    console.log('Controllo gitHubRepository ' + gitHubRepository);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Card containerStyle={{borderRadius: 20}}>
        <Text>{Strings.home_userCard_title}</Text>
        <GitHubInput type="user" onPress={checkUser} />
        <GitHubInput type="repo" onPress={checkUser} />
        <Button
          buttonStyle={{
            backgroundColor: 'purple',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 20,
          }}
          icon={<Icon name="arrow-right" size={20} color="white" />}
          title={Strings.home_github_invia}
        />
      </Card>
    </View>
  );
}
