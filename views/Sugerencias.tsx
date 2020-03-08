import React from 'react';
import { WebView } from 'react-native-webview';

import { styles } from '../styles';

function Sugerencias({navigation}) {
 
  return (
  
      <WebView 
        source= {{uri: 'https://docs.google.com/forms/d/e/1FAIpQLSc_CoJrpcmeq_z4AJzUdwYZFymo0uWgB0ZW8dyKez8DjAr0tA/viewform'}}
        style= {styles.loginWebView}
      />
  );
}

export default Sugerencias;