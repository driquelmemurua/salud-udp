import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { styles } from '../styles';

function FileItem({title, type, onPress}) {
  console.log(title)
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.fileItemContainer}>
        {type=='Vídeo'?
          <Ionicons name="md-play-circle" size={24} color={"white"} />
        :type=='Documento'||type=='Normativa'?
          <View style={{paddingTop:2}}>
            <FontAwesome name="file" size={20} color="white" />
          </View>
        :null}

        <Text style={styles.fileText}>
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default FileItem;