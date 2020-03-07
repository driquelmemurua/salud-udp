import React from 'react';
import { Default } from '../layouts';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

import { styles } from '../styles';

function Sugerencias({navigation}) {
 
  const [valueone, onChangeTextone] = React.useState('OMG ITS HAPPENING 4 REAL');


  return (
  
      <WebView 
        source= {{uri: 'https://docs.google.com/forms/d/e/1FAIpQLSc_CoJrpcmeq_z4AJzUdwYZFymo0uWgB0ZW8dyKez8DjAr0tA/viewform'}}
        style= {styles.loginWebView}
      />
  );
}

export default Sugerencias;