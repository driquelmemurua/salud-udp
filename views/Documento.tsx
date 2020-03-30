import React from 'react';
import { View } from 'react-native';
import PDFReader from 'rn-pdf-reader-js'
import * as FileSystem from 'expo-file-system';
import { useFileLoading } from '../hooks';
import pdfs from '../assets/pdfs';

function Documento({ route }) {
  const { file } = route.params;
  const [loading] = useFileLoading(file, pdfs);

  if( loading )
    return <View></View>
  else 
    return (
      <PDFReader
        source={{
          uri: FileSystem.documentDirectory + file
        }}
      />  
    )
}


export default Documento;