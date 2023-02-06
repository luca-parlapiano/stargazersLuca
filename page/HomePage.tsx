import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {GitHubInput} from '../components/GitHubInput';
import {Card, Button, Icon, Divider} from 'react-native-elements';
import Strings from '../Strings';
import ApiUrl from '../Api';
import {useNavigation} from '@react-navigation/native';

//HOME SCREEN THE START PAGE OF APP

export function HomeScreen() {
  const [loading, setLoading] = useState<boolean>(false);
  const [gitHubUser, setGitHubUser] = useState<string>();
  const [gitHubRepository, setGitHubRepository] = useState<string>();
  const [error, setError] = useState<string>('');

  const navigation = useNavigation();

  React.useEffect(() => { //This reset state when page loaded
    setLoading(false);
    setGitHubUser('');
    setGitHubRepository('');
  }, []);

  const checkUser = () => {  //This function is goint to call before Rest call, check if user and reposotory are empty or undefined
    setLoading(true);
    if (gitHubUser) {
      if (gitHubRepository) {
        setError(''); //Reset Error
        getStars(); //Are goint to call github api
      } else {
        setError(Strings.error_repository); //Error STOP
        setLoading(false);
      }
    } else {
      setError(Strings.error_user); //Error STOP
      setLoading(false);
    }
  };

  const getStars = () => {

    //REST github Api
    const url: string = ApiUrl.URL_ENDPOINT + gitHubUser + '/' + gitHubRepository + ApiUrl.STARGAZER;

    //FETCH data from api
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
          setLoading(false);
        } else {
          setLoading(false); //OK we have data then we can start new page and send data to page for show list
          navigation.navigate('ListaStelle', {data: res});
        }
      })
      .catch(err => {
        console.log('Connection Error' + err.message);
      });
  };

  //This function is passed inside item for write the state in main page
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
        <Divider
          style={{marginTop: 10, marginBottom: 10, backgroundColor: 'black'}}
        />
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
            checkUser(); //Start CHECK
          }}
        />
      </Card>
    </View>
  );
}
