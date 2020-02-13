import React from 'react';
import { Text, FlatList, View } from 'react-native';
import { Default } from '../layouts';
import { styles } from '../styles';

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
    number : '+56912345678'
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

function Contactos() {
  return (
    <Default
      title='CONTACTOS'
      subtitle='Escuela 1'
      navigation
    >
      <FlatList
        style={{width: '80%'}}
        data={contactos}
        renderItem={({ item }) => <PhoneContact name={item.name} number={item.number}/>}
      />
    </Default>
  );
}

function PhoneContact({ name = null, number }){
  
  return (
    <View style={styles.contactList}>
      <Text style={styles.text}>
        {name}
      </Text>
      <PhoneNumber number={number}/>
    </View>
  )
}

function PhoneNumber({ number }){
  
  return (
    <View>
      <Text style={styles.text}>
        {number}
      </Text>
    </View>
  )
}

export default Contactos;
