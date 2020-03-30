import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';

import { Default } from '../layouts';
import { styles } from '../styles';
import { filterByProp, composeFilters } from '../helpers';
import { AutoComplete } from '../components';
import { I_DIRECCIONES } from '../constants';
import { useFilterByText, } from '../hooks';

function Direcciones({navigation, selectedSchool}) {
  const [hasName, onChangeText] = useFilterByText('name');
  const filters = composeFilters(filterByProp('schools', selectedSchool), hasName);
  const [loading, setLoading] = useState(true);
  const [addresses, setAddresses] = useState([]);
  const direcciones = addresses.filter(filters);

  if(addresses.length === 0 && loading){
    AsyncStorage.getItem('direcciones', (err, res) => {
      if(res){
        setAddresses(JSON.parse(res));
        setLoading(false);
      }
    })
    return <Default>{}</Default>
  }

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

