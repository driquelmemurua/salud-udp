import { useState } from 'react';
import * as FileSystem from 'expo-file-system';

export default function useFileLoading(filename, files){
  const [loading, setLoading] = useState(true);

  const loadFile = async () => {
    try {
      const { exists } = await FileSystem.getInfoAsync(FileSystem.documentDirectory + filename);
      if(!exists)
        await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + filename, files[filename].base64, {encoding: FileSystem.EncodingType.Base64})
    } catch (error) {
      console.log(error)
    }
  }

  if(loading)
    loadFile()
    .then(() => setLoading(false));

  return [loading];
}