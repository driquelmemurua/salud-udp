import React, { useState } from 'react';
import { Default } from '../layouts';

import { TouchableHighlight, Text, Dimensions} from 'react-native';
import openMap from 'react-native-open-maps';

import  MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import { styles } from '../styles';
import { FontAwesome } from '@expo/vector-icons';
import { CONTACTOS, I_CONTACTOS, EMERGENCIAS, I_EMERGENCIAS } from '../constants';


export default function Direccion({ route, navigation }){
  
  const { name, coordinates, address } = route.params;
  
  function mapAddress(address) {
    openMap({ query: address});
  }

  return (
      <Default
        navigation={navigation.goBack}
        title='DIRECCIONES'
        subtitle={name}>

        <TouchableHighlight onPress={() => mapAddress(address)} underlayColor='#FFFFFF' >
          <View style={{...styles.phoneNumber,flexDirection:'row',maxWidth:'80%'}}>
            <View style={{width:'85%'}}>
              <Text style={styles.text}>
                {address}
              </Text>
            </View> 
            <View style={{width:'15%', alignItems:'center', justifyContent:'center'}}>
              <FontAwesome name="external-link" size={24} color="white" />
            </View>  
          </View> 
        </TouchableHighlight>

      <View style={styles.mapContainer}>
        <MapView 
        style={styles.mapStyle} 
        region={coordinates}>
        <Marker
            key={0}
            coordinate= {{
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
            }}
            title={name}
            pinColor={'red'}
         />
            
          </MapView>


      </View>
          
      </Default>
  
    );
  }

