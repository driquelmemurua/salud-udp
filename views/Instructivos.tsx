import React, {useState} from 'react';
import { View, FlatList, TouchableWithoutFeedback } from 'react-native'
import { Default } from '../layouts';

import { connect } from 'react-redux';
import { AutoComplete, Tag } from '../components';
import { styles } from '../styles';

import { FileItem } from '../components';

const INSTRUCTIVOS = [
  {
    id: '0',
    name: 'Material 1',
    type: 'VIDEO' ,
    schools: ['Kinesiología']
  },
  {
    id: '1',
    name: 'Material 2',
    type: 'DOCUMENTO' ,
    schools:['Medicina','Psicología'] 
  },
  {
    id: '2',
    name: 'Material 3',
    type: 'NORMATIVA' ,
    schools: ['Obstetricia y Neonatología']
  },
  {
    id: '3',
    name: 'Material 4',
    type: 'DOCUMENTO' ,
    schools: ['Kinesiología']
  }
];


function Instructivos({navigation, selectedSchool}) {

  const [instructivos, setInstructivos]= useState(INSTRUCTIVOS);
  
  const filterList = (text) => { 
    return setInstructivos(text ? instructivos.filter(instructivo => (instructivo.name.toLowerCase()).includes(text.toLowerCase()) ): instructivos)
  }

  return (

    <Default
      title='INSTRUCTIVOS'
      subtitle={selectedSchool}
      navigation={navigation.goBack}>
       
        <AutoComplete onChangeText={(text)=>filterList(text)} filters='true'/>
        
        <FlatList
        style={{width: '80%'}}
        data={INSTRUCTIVOS}
        renderItem={({ item }) => 
          <TouchableWithoutFeedback  onPress={() => {
              
            }}>
            <FileItem title={item.name} type={item.type}/>
          </TouchableWithoutFeedback>
        }
      />

    </Default>
//cambiar INSTRUCTIVOS por TAGS marcados
  );
}

function TagGroup({data, removeTag}) {

  const tags=data.map((item, index)=>  
    <Tag 
      text={item.name} 
      onPress={()=>removeTag(index)} />
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
