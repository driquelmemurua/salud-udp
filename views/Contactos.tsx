import React, { useState } from 'react';
import { Text, FlatList, View } from 'react-native';
import {
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { Linking } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Default } from '../layouts';
import { styles } from '../styles';
import { CONTACTOS, EMERGENCIAS } from '../constants';
import { filterBySchool } from '../helpers';

function Contactos({navigation, selectedSchool}) {
  const [filteredContacts,] = useState(filterBySchool(CONTACTOS, selectedSchool));
  const [filteredEmergencies,] = useState(filterBySchool(EMERGENCIAS, selectedSchool));

  return (
    <Default
      title='CONTACTOS'
      subtitle={selectedSchool}
      navigation={navigation.goBack}
    >
      <FlatList
        style={{width: '80%', flexGrow: 0, paddingBottom:50 }}
        data={filteredContacts}
        renderItem={({ item }) => <PhoneContact name={item.name} number={item.number}/>}
      />
      <FlatList
        style={{width: '80%', flexGrow: 0}}
        data={filteredEmergencies}
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
        <Text style={{...styles.text,textAlignVertical:'center', flexWrap: 'wrap', flex: 1}}>
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
