import React, { useState } from 'react';
import { FlatList, Text, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Default } from '../layouts';
import { styles } from '../styles';
import { I_ACCIDENTS_VIEWS } from '../constants';
import { filterBySchool } from '../helpers';

function Accidentes({navigation, selectedSchool}) {
  const [loading, setLoading] = useState(true);
  const [accidents, setAccidents] = useState([]);

  if(accidents.length === 0 && loading){
    AsyncStorage.getItem('accidentes', (err, res) => {
      if(res){
        setAccidents(filterBySchool(JSON.parse(res), selectedSchool));
        setLoading(false);
      }
    })
    return <Default>{}</Default>
  }

  return (
    <Default
      logo
      subtitle={selectedSchool}
      title='Categoría de accidente'>
      <FlatList
        data={accidents}
        renderItem={({ item }: { item: I_ACCIDENTS_VIEWS }) => 
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Flujograma', {file: item.file})} >
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



