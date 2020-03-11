import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';

import { Default } from '../layouts';
import { styles } from '../styles';
import { filterByProp, composeFilters } from '../helpers';
import { AutoComplete } from '../components';
import { DIRECCIONES, I_DIRECCIONES } from '../constants';
import { useFilterByText, } from '../hooks';

function Direcciones({navigation, selectedSchool}) {
  const [hasName, onChangeText] = useFilterByText('name');
  const filters = composeFilters(filterByProp('schools', selectedSchool), hasName);
  const direcciones = DIRECCIONES.filter(filters);

  return (
    <Default
      navigation={navigation.goBack}
      title='DIRECCIONES'
      subtitle={selectedSchool}>
      
      <AutoComplete onChangeText={onChangeText}/>
     
      <SafeAreaView style={styles.containerFlatList}>
        <FlatList
          data={direcciones}
          renderItem={({ item }: { item: I_DIRECCIONES}) => 
            <TouchableOpacity onPress={() => navigation.navigate('Dirección', {name: item.name, coordinates: item.coordinates, address: item.address})}>
              <View style={styles.listItem}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          }
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </Default>
  );
}

function mapStateToProps(state) {
  return { selectedSchool: state.schools.selectedSchool };
} 

export default connect(mapStateToProps)(Direcciones);

