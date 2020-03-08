import React, { useState } from 'react';
import { SafeAreaView, TextInput, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

import { Default } from '../layouts';
import { styles } from '../styles';
import { filterBySchool } from '../helpers';
import { AutoComplete } from '../components';
import { DIRECCIONES, I_DIRECCIONES } from '../constants';

function Direcciones({navigation, selectedSchool}) {
  
  const [direcciones, setDirecciones]= useState(filterBySchool(DIRECCIONES, selectedSchool));

  const filterList = (text) => { 
    return setDirecciones(text ? DIRECCIONES.filter(hospital => (hospital.name.toLowerCase()).includes(text.toLowerCase()) ): DIRECCIONES)
  }

  return (
    <Default
      navigation={navigation.goBack}
      title='DIRECCIONES'
      subtitle={selectedSchool}>
      
      <AutoComplete onChangeText={(text)=>filterList(text)}/>
     
      <SafeAreaView style={styles.containerFlatList}>
        <FlatList
          data={direcciones}
          renderItem={({ item }: { item: I_DIRECCIONES}) => 
            <TouchableOpacity onPress={() => navigation.navigate('Dirección', {name: item.name, dirección: item.coordinates})}>
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

