import Icon from 'react-native-vector-icons/Ionicons';
import {Input} from 'react-native-elements';
import {View} from 'react-native';
import Strings from '../Strings';
interface Props {
  type: string;
  onPress?: (
    type: string,
    gitHubUser?: string,
    gitHubRepository?: string,
  ) => void;
}

export function GitHubInput(props: Props) {
  console.log(props);
  return (
    <View>
      <Input
        placeholder={Strings.home_userCard_title}
        leftIcon={<Icon name="logo-github" size={30} color="purple" />}
      />
    </View>
  );
}
