import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

function ListItem({text}) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  )
}

export default ListItem;