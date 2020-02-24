import React from 'react';
import { Text } from 'react-native';
import { Default } from '../layouts';

function Flujograma({ route, navigation }) {
 
  const { name } = route.params;

  return (
  <Default
    title={name}
    navigation={navigation.goBack}>

  </Default>
);
}

export default Flujograma;