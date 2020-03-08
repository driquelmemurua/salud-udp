import React from 'react';
import { View, Text, TouchableHighlight} from 'react-native';
import { styles } from '../styles';

function Tag({text, onPress}) {

  return (
    <View >
      <TouchableHighlight onPress={onPress}  >
        <Text style={styles.text}>
          {text}
        </Text>
      </TouchableHighlight>
    </View>

  );
}

export default Tag;