import React from 'react';
import { FlatList, Text } from 'react-native';
import { Default } from '../layouts';
import { styles } from '../styles';

const views = [
  {
    id: 0,
    name: 'Contactos'
  },
  {
    id: 1,
    name: 'Direcciones'
  },
  {
    id: 2,
    name: 'Instructivos'
  },
  {
    id: 3,
    name: 'Sugerencias'
  },
  {
    id: 4,
    name: 'Cambiar Escuela'
  }
];

function Menu({}) {
  return (
    <Default
      logo
      subtitle='Escuela 1'
    >
      <FlatList
        data={views}
        renderItem={({ item }) => 
          <Text style={styles.menuItem}>
            {item.name}
          </Text>
        }
      />
    </Default>
  );
}

export default Menu;