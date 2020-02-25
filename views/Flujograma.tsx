import React, { useState } from 'react';
import { View } from 'react-native';
import PDFReader from 'rn-pdf-reader-js'
import * as FileSystem from 'expo-file-system';

function Flujograma({ route, navigation }) {
 
  const [loading, setLoading] = useState(true);
  
  const { uri, file } = route.params;
  FileSystem.downloadAsync(
    uri,
    FileSystem.documentDirectory + file
  )
  .then(({}) => {
    setLoading(false);
  });

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