import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {GitHubInput} from '../components/GitHubInput';
import {Card, Button, Icon, Divider} from 'react-native-elements';
import Strings from '../Strings';
import ApiUrl from '../Api';
import {useNavigation} from '@react-navigation/native';

export function HomeScreen() {
  const [loading, setLoading] = useState<boolean>(false);

  const [gitHubUser, setGitHubUser] = useState<string>();
  const [gitHubRepository, setGitHubRepository] = useState<string>();
  const [error, setError] = useState<string>('');

  const navigation = useNavigation();

  React.useEffect(() => {
    setLoading(false);
  }, []);

  const checkUser = () => {
    setLoading(true);
    console.log('Controllo gitHubUser ' + gitHubUser);
    console.log('Controllo gitHubRepository ' + gitHubRepository);
    if (gitHubUser) {
      if (gitHubRepository) {
        setError('');
        console.log('checkOK');
        getStars();
      } else {
        setError(Strings.error_repository);
        setLoading(false);
      }
    } else {
      setError(Strings.error_user);
      setLoading(false);
    }
  };

  const getStars = () => {
    //const url: string = ApiUrl.URL_ENDPOINT + gitHubUser + '/' + gitHubRepository + ApiUrl.STARGAZER;

    const url: string = ApiUrl.URL_ENDPOINT + 'mattiaferigutti' + '/' + 'Backdrop-Android' + ApiUrl.STARGAZER;

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        if (res.message === 'Not Found') {
          setError(Strings.home_github_Non_Found);
        } else {
          setLoading(false);
          navigation.navigate('ListaStelle', {data: res});
        }
      })
      .catch(err => {
        console.log('Connection Error' + err.message);
      });
  }

  const saveData = (type: string, data?: string) => {
    type === 'user' ? setGitHubUser(data) : setGitHubRepository(data);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Card containerStyle={{borderRadius: 20}}>
        <Text>{Strings.home_userCard_title}</Text>
        <GitHubInput type="user" onPress={saveData} />
        <GitHubInput type="repo" onPress={saveData} />
        <View style={{alignItems: 'center', paddingBottom: 20}}>
          <Text style={{color: 'red'}}>{error}</Text>
        </View>
        <Button
          loading={loading}
          buttonStyle={{
            backgroundColor: 'purple',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 20,
          }}
          icon={<Icon name="arrow-right" size={20} color="white" />}
          title={Strings.home_github_invia}
          onPress={() => {
            checkUser();
          }}
        />
        <Divider
          style={{marginTop: 10, marginBottom: 10, backgroundColor: 'black'}}
        />
      </Card>
    </View>
  );
}
