import React from 'react';
import { View, Text, TouchableWithoutFeedback} from 'react-native';
import { styles } from '../styles';

function Tag({text, onPress}) {

  return (
    <View style={styles.tagContainer}>
      <TouchableWithoutFeedback onPress={onPress}  >
        <Text style={styles.text}>
          {text+' X'}
        </Text>
      </TouchableWithoutFeedback>
    </View>

  );
}

export default Tag;