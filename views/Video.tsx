import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles';
import { Default } from '../layouts';
import { Video as VideoPlayer } from 'expo-av';
import { VIDEOS } from '../assets/videos';

export default function Video({ navigation, route }){
  const { file, name } = route.params;

  return (
    <Default
      title={'Instructivos'}
      subtitle={'Videos'}
      navigation={navigation.goBack}
    >
      <Text style={{...styles.title}}>{name}</Text>
      <VideoPlayer
        source={VIDEOS[file]}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode={VideoPlayer.RESIZE_MODE_CONTAIN}
        useNativeControls
        style={{ width: 300, height: 300 }}
      />
    </Default>
  )
}