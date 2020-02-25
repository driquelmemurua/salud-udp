import React from 'react';
import { FlatList, Text, TouchableWithoutFeedback} from 'react-native';

import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';

import { Default } from '../layouts';
import { styles } from '../styles';
import { ACCIDENTS_VIEWS } from '../constants';

function Categorias({navigation}) {
   
    return (
    <Default
      logo
      title='Categoría de accidente'>

      <FlatList
        data={ACCIDENTS_VIEWS}
        renderItem={({ item }) => 
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Flujograma', {uri: item.uri, name: item.name})} >
            <Text style={styles.accidentesItem}>
                {item.name}
            </Text>
        </TouchableWithoutFeedback>  
        }
      />
    </Default>
  );
}

export default Categorias;


