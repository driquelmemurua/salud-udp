import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles';
import { Ionicons } from '@expo/vector-icons';

function Default({children, title = null, subtitle = null, logo = false, navigation = null}) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', width: '80%', justifyContent: 'center'}}>
        {navigation ?
          <Ionicons name="md-arrow-back" size={24} color="white" /> : null
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