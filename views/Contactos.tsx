import React from 'react';
import { Text, FlatList, View } from 'react-native';
import {
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { Linking } from 'react-native'
import { Default } from '../layouts';
import { styles } from '../styles';
import { FontAwesome } from '@expo/vector-icons';

const contactos = [
  {
    id: 3,
    name: 'Secretario de escuela',
    number : '+56912345678'
  },
  {
    id: 1,
    name: 'Persona 1',
    number : '+56912345678'
  },
  {
    id: 2,
    name: 'Persona 2',
    number : '+56912345678'
  },
]

const emergencias = [
  {
    id: 0,
    number : '+56975196948'
  },
  {
    id: 1,
    number : '+56912345678'
  },
  {
    id: 2,
    number : '+56912345678'
  },
]

function Contactos({navigation, selectedSchool}) {
  return (
    <Default
      title='CONTACTOS'
      subtitle={selectedSchool}
      navigation={navigation.goBack}
    >
      <FlatList
        style={{width: '80%', flexGrow: 0, paddingBottom:50 }}
        data={contactos}
        renderItem={({ item }) => <PhoneContact name={item.name} number={item.number}/>}
      />
      <FlatList
        style={{width: '80%', flexGrow: 0}}
        data={emergencias}
        renderItem={({ item }) => <PhoneContact number={item.number}/>}
      />
    </Default>
  );
}

function PhoneContact({ name = null, number }){
  
  const onPress = () => {

    Linking.openURL(`tel:${number}`)
  }

  return (
    <View style={name ? styles.contactList : styles.emergencyContactList}>
      {
        name ? 
        <Text style={{...styles.text,textAlignVertical:'center'}}>
          {name}
        </Text> : null 
      }
      <TouchableHighlight onPress={onPress} underlayColor='#FFFFFF' >
        <View style={styles.phoneNumber}>
        
            <Text style={{...styles.text, paddingRight:5}}>
              {number}
            </Text>

            <FontAwesome name="phone" size={20} color="white" />

        </View> 
      </TouchableHighlight>
    </View>
  )
}

function mapStateToProps(state) {
  return { selectedSchool: state.schools.selectedSchool };
} 

export default connect(mapStateToProps)(Contactos);
