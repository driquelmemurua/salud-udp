import React, { useState, useEffect} from 'react';
import { Default } from '../layouts';
import { styles } from '../styles';

import Autocomplete from 'react-native-autocomplete-input';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, Directions } from 'react-native-gesture-handler';

import { SafeAreaView} from 'react-native';
import Constants from 'expo-constants';
import { connect } from 'react-redux';

const HOSPITALES = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    nombre: 'Hospital 1',
    dirección: { 
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    nombre: 'Hospital 2',
    dirección: { 
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    nombre: 'Hospital 3',
    dirección: { 
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
  },
];

function Direcciones({navigation, selectedSchool}) {
  
  const [direcciones, setDirecciones]= useState(HOSPITALES);
  
  const filterList = (text) => { 
    return setDirecciones(text ? HOSPITALES.filter(hospital => (hospital.nombre.toLowerCase()).includes(text.toLowerCase()) ): HOSPITALES)
  }

  return (
    <Default
      navigation={navigation.goBack}
      title='DIRECCIONES'
      subtitle={selectedSchool}>
      <View style={{flexDirection:'row', width:'80%'}}>
        <TextInput
        selectionColor={'#93d9cd'}
        style={styles.autoComplete}
        onChangeText={text => filterList(text)}
        />
        <View style={{marginTop:10, marginLeft:15, marginRight:15}}>
          <Ionicons name="ios-search" size={24} color="white" />
        </View>
      </View>
     
      <SafeAreaView style={styles.containerFlatList}>
        <FlatList
          data={direcciones}
          renderItem={({ item }) => 
            <TouchableOpacity onPress={() => navigation.navigate('Dirección', {name: item.nombre, dirección: item.dirección})}>
              <View style={styles.listItem}>
                <Text style={styles.text}>{item.nombre}</Text>
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

