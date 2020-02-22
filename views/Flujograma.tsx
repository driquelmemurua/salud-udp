import React from 'react';
import { Text } from 'react-native';
import { Default } from '../layouts';

function Flujograma({ route, navigation }) {
 
  const { name } = route.params;

  return (
  <Default
    title='Categoría de accidente seleccionado'
    navigation={navigation.goBack}
    >
    <Text>
      {name}
    </Text>
  </Default>
);
}

export default Flujograma;