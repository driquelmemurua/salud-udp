import React, { useState } from 'react';
import { FlatList, Text, TouchableWithoutFeedback} from 'react-native';
import { connect } from 'react-redux';
import { Default } from '../layouts';
import { styles } from '../styles';
import { ACCIDENTS_VIEWS } from '../constants';
import { filterBySchool } from '../helpers';

function Accidentes({navigation, selectedSchool}) {
   
  const [accidentsBySchool,] = useState(filterBySchool(ACCIDENTS_VIEWS, selectedSchool));

  return (
    <Default
      logo
      subtitle={selectedSchool}
      title='Categoría de accidente'>
      <FlatList
        data={accidentsBySchool}
        renderItem={({ item }) => 
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Flujograma', {uri: item.uri, file: item.file})} >
            <Text style={styles.accidentesItem}>
                {item.name}
            </Text>
        </TouchableWithoutFeedback>  
        }
      />
    </Default>
  );
}

function mapStateToProps(state) {
  return { selectedSchool: state.schools.selectedSchool };
} 

export default connect(mapStateToProps)(Accidentes);



