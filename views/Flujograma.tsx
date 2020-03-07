import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { AsyncStorage } from 'react-native';
import PDFReader from 'rn-pdf-reader-js'
import * as FileSystem from 'expo-file-system';

function Flujograma({ route }) {
 
  const [loading, setLoading] = useState(true);
  
  const { uri, file } = route.params;

  
  AsyncStorage
    .getItem(file)
    .then(value => {
      const now = new Date().toISOString();
      //se guarda una fecha de expiración, mientras sea mayor al ahora funciona
      if (value !== null && now < value) {
        setLoading(false);
      } else {
        FileSystem.downloadAsync(
          uri,
          FileSystem.documentDirectory + file
        )
        .then(({}) => {
          const now = new Date();
          const expires = new Date(new Date().setHours(now.getHours()+24*5));
          AsyncStorage
            .setItem(file, expires.toISOString())
            .then(() => setLoading(false))
            .catch(error => setLoading(false));
        })
        .catch(error => setLoading(false));
      }
    })
    .catch(error => setLoading(false));

  if( loading )
  return <View></View>
  else 
    return (
      <PDFReader
        source={{
          uri: FileSystem.documentDirectory + file,
        }}
      />  
    )
}

export default Flujograma;