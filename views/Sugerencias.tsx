import React from 'react';
import { WebView } from 'react-native-webview';

import { styles } from '../styles';

import { GOOGLE_FORM_URI } from '../constants';

function Sugerencias({navigation}) {
 
  return (
  
      <WebView 
        source= {{uri: GOOGLE_FORM_URI}}
        style= {styles.loginWebView}
      />
  );
}

export default Sugerencias;