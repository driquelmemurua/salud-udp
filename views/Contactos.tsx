import React, { useState } from 'react';
import { Text, FlatList, View, TouchableHighlight, Linking, AsyncStorage } from 'react-native';

import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

import { Default } from '../layouts';
import { styles } from '../styles';
import { I_CONTACTOS, I_EMERGENCIAS } from '../constants';
import { filterBySchool } from '../helpers';

function Contactos({navigation, selectedSchool}) {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [emergencies, setEmergencies] = useState([]);
  
  if(contacts.length === 0 && emergencies.length === 0 && loading){
    AsyncStorage.getItem('contactos', (err, res) => {
      if(res){
        const { contactos, emergencias } = JSON.parse(res);
        setContacts(filterBySchool(contactos, selectedSchool));
        setEmergencies(filterBySchool(emergencias, selectedSchool));
        setLoading(false);
      }
    })
    return <Default>{}</Default>
  }

  return (
    <Default
      title='CONTACTOS'
      subtitle={selectedSchool}
      navigation={navigation.goBack}
    >
      <FlatList
        style={{width: '80%', flexGrow: 0, paddingBottom:50 }}
        data={contacts}
        renderItem={({ item }: { item: I_CONTACTOS }) => <PhoneContact name={item.name} number={item.number}/>}
      />
      <FlatList
        style={{width: '80%', flexGrow: 0}}
        data={emergencies}
        renderItem={({ item }: { item: I_EMERGENCIAS }) => <PhoneContact number={item.number}/>}
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
