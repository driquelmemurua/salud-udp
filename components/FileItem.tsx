import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

function FileItem({title,type}) {

  return (
    <View style={styles.fileItemContainer}>
      {type=='VIDEO'?
        <Ionicons name="md-play-circle" size={24} color={"white"} />
      :type=='DOCUMENTO'||type=='NORMATIVA'?
        <View style={{paddingTop:2}}>
          <FontAwesome name="file" size={20} color="white" />
        </View>
      :null}

      <Text style={styles.fileText}>
        {title}
      </Text>

    </View>
  );
}

export default FileItem;