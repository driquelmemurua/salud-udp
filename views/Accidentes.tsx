import React from 'react';
import { FlatList, Text, TouchableWithoutFeedback} from 'react-native';

import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';

import { Default } from '../layouts';
import { styles } from '../styles';

const accidentes = [
  {
    id: 0,
    name: 'Categoría accidente 1'
  },
  {
    id: 1,
    name: 'Categoría accidente 2'
  },
  {
    id: 2,
    name: 'Categoría accidente 3'
  }

];

function Categorias({}) {

    const onPress = () => {
        alert('NAVEGAR');
    }
    
    return (
    <Default
      logo
      title='Categoría de accidente'>

      <FlatList
        data={accidentes}
        renderItem={({ item }) => 

        <TouchableWithoutFeedback onPress={onPress} >
            <Text style={styles.accidentesItem}>
                {item.name}
            </Text>
        </TouchableWithoutFeedback>
          
        }
      />
    </Default>
  );
}

function Flujograma({}) {
 
    return (
    <Default
      title='Categoría de accidente seleccionado'
      navigation>
    </Default>
  );
}

export default Categorias;


