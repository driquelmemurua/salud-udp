import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { styles } from '../styles';
import { Ionicons } from '@expo/vector-icons';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

function Default({children, title = null, subtitle = null, logo = false, navigation = null}) {

  const [isGoingBack, setIsGoingBack] = useState(false);
  
  useEffect(() => {
    if(isGoingBack){
      navigation()
    }
  },[isGoingBack])

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', width: '80%', justifyContent: 'center'}}>
        {navigation ?
          <TouchableWithoutFeedback onPress={() => setIsGoingBack(true)}>
            <View hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
              <Ionicons name="md-arrow-back" size={24} color="white" />
            </View>
          </TouchableWithoutFeedback> : null
        }
        <View style={styles.heading}>
          {logo ?
            <Image
              style={styles.logo}
              source={require('../assets/logo.png')}
            /> : null
          }
          { title ?
            <Text style={styles.title}>
              {title}
            </Text> : null
          }
          { subtitle ?
            <Text style={styles.subtitle}>
              {subtitle}
            </Text> : null
          }
        </View>
      </View>

        {children}

    </View>
  );
}

export default Default;