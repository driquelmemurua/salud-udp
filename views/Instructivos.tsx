import React, {useState} from 'react';
import { View } from 'react-native'
import { Default } from '../layouts';

import { connect } from 'react-redux';
import { AutoComplete, Tag } from '../components';
import { styles } from '../styles';

const INSTRUCTIVOS = [
  {
    id: '0',
    nombre: 'Material 1',
    tipo: 'VIDEO' ,
    escuela: ['Kinesiología']
  },
  {
    id: '1',
    nombre: 'Material 2',
    tipo: 'DOCUMENTO' ,
    escuela:['Medicina','Psicología'] 
  },
  {
    id: '2',
    nombre: 'Material 3',
    tipo: 'NORMATIVA' ,
    escuela: ['Obstetricia y Neonatología']
  },
  {
    id: '3',
    nombre: 'Material 4',
    tipo: 'DOCUMENTO' ,
    escuela: ['Kinesiología']
  },
];


function Instructivos({navigation, selectedSchool}) {

  const [direcciones, setDirecciones]= useState(INSTRUCTIVOS);
  
  const filterList = (text) => { 
    return setDirecciones(text ? INSTRUCTIVOS.filter(instructivo => (instructivo.nombre.toLowerCase()).includes(text.toLowerCase()) ): INSTRUCTIVOS)
  }

  return (

    <Default
      title='INSTRUCTIVOS'
      subtitle={selectedSchool}
      navigation={navigation.goBack}>
       
        <AutoComplete onChangeText={(text)=>filterList(text)} filters='true'/>
        
        <TagGroup title='tagName' data={INSTRUCTIVOS}/> 
        

    </Default>
//cambiar INSTRUCTIVOS por TAGS marcados
  );
}

function TagGroup({title=null,data}) {

  const tags=data.map((item)=>  
    <Tag 
      text={item.nombre} 
      onPress={null} />
  );

  return(
    <View style={styles.tagGroup}>
      {tags}
    </View>                
  );
}

function mapStateToProps(state) {
  return { selectedSchool: state.schools.selectedSchool };
} 

export default connect(mapStateToProps)(Instructivos);
