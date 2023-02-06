import Icon from 'react-native-vector-icons/Ionicons';
import {Input} from 'react-native-elements';
import {View} from 'react-native';
import Strings from '../Strings';
import React from 'react';

//Single component for input
//This component can switch icon and text destination with type props
//user = github User -- other = Repository

interface Props {
  type: string;
  onPress: (type: string, data?: string) => void;
}

export function GitHubInput(props: Props) {
  return (
    <View>
      <Input
        placeholder={
          props.type === 'user'
            ? Strings.home_github_placeholder
            : Strings.home_github_repository
        }
        leftIcon={
          props.type === 'user' ? (
            <Icon name="logo-github" size={30} color="purple" />
          ) : (
            <Icon name="git-branch" size={30} color="purple" />
          )
        }
        onChangeText={value => {
          props.onPress(props.type, value);
        }}
      />
    </View>
  );
}
