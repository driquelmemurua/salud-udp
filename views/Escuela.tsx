import React from 'react';
import { FlatList } from 'react-native';
import { Default } from '../layouts';
import { ListItem } from '../components';

const escuelas = [
  {
    id: 0,
    name: 'Escuela 1'
  },
  {
    id: 1,
    name: 'Escuela 2'
  },
  {
    id: 2,
    name: 'Escuela 3'
  }
];

function Escuela({navigation}) {
  return (
    <Default
      navigation={navigation.goBack}
      title = '¿Cual es tu escuela?'
    >
      <FlatList
        style={{width: '80%'}}
        data={escuelas}
        renderItem={({ item }) => 
          <ListItem text={item.name}/>
        }
      />
    </Default>
  );
}

export default Escuela;