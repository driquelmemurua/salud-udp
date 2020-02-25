import React from 'react';
import { Default } from '../layouts';
import * as FileSystem from 'expo-file-system';


import {WebView} from 'react-native-webview';


function Flujograma({ route, navigation }) {
 
  const { name } = route.params;
  
  return (
    <WebView
      source={{uri: 'https://drive.google.com/viewerng/viewer?embedded=true&url=http://gahp.net/wp-content/uploads/2017/09/sample.pdf'}}
      style={{marginTop: 20}}
      />
);
}

export default Flujograma;