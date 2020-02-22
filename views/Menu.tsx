import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { Default } from '../layouts';
import { styles } from '../styles';
import { CONTENT_VIEWS } from '../constants';

function Menu({navigation}) {
  return (
    <Default
      logo
      subtitle='Escuela 1'
    >
      <FlatList
        data={CONTENT_VIEWS}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => navigation.navigate(item.name)}>
            <Text style={styles.menuItem}>
              {item.name}
            </Text>
          </TouchableOpacity>
        }
      />
    </Default>
  );
}

export default Menu;