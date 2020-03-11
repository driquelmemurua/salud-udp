import React from 'react';

import { View, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from '../styles';

export default function AutoComplete({onChangeText}){
  return (
    <View style={styles.autoComplete}>
      <TextInput onChangeText={onChangeText} style={{flex: 2, color: 'white'}} />
      <Ionicons name="ios-search" size={24} color="white" />
    </View>
  );
  }