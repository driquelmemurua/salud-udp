import React, {useState} from 'react';
import { View, FlatList, TouchableWithoutFeedback } from 'react-native'
import { Default } from '../layouts';

import { connect } from 'react-redux';
import { AutoComplete, Tag } from '../components';
import { styles } from '../styles';
import { TYPES, SCHOOLS } from '../constants';
import { FileItem } from '../components';

const INSTRUCTIVOS = [
  {
    id: '0',
    name: 'Material 1',
    type: 'Vídeo' ,
    schools: ['Kinesiología']
  },
  {
    id: '1',
    name: 'Material 2',
    type: 'Documento' ,
    schools:['Medicina','Psicología'] 
  },
  {
    id: '2',
    name: 'Material 3',
    type: 'Normativa' ,
    schools: ['Obstetricia y Neonatología']
  },
  {
    id: '3',
    name: 'Material 4',
    type: 'Documento' ,
    schools: ['Kinesiología']
  }
];


function Instructivos({navigation, selectedSchool}) {

  const [instructivos, setInstructivos]= useState(INSTRUCTIVOS);
  
  const filterList = (text, tags, filterTags, filterSchools) => { 
    const filteredByText = text ? 
      instructivos.filter(instructivo => (instructivo.name.toLowerCase()).includes(text.toLowerCase()) ): 
      INSTRUCTIVOS;
    const filteredByTypes = filterTags ? filteredByText.filter(item => tags[item.type]) : filteredByText;
    const filteredBySchools = filterSchools ? filteredByTypes.filter(item => item.schools.filter(school => tags[school]).length > 0) : filteredByTypes;
    setInstructivos(
      filteredBySchools
    )
  }

  return (

    <Default
      title='INSTRUCTIVOS'
      subtitle={selectedSchool}
      navigation={navigation.goBack}>
       
        <AutoComplete applyFilters={(text, tags, filterTags, filterSchool)=>filterList(text, tags, filterTags, filterSchool)} filters='true'/>
        
        <FlatList
        style={{width: '80%'}}
        data={instructivos}
        renderItem={({ item }) => 
          <TouchableWithoutFeedback  onPress={() => {
              
            }}>
            <FileItem title={item.name} type={item.type}/>
          </TouchableWithoutFeedback>
        }
      />

    </Default>
  );
}

function mapStateToProps(state) {
  return { selectedSchool: state.schools.selectedSchool };
} 

export default connect(mapStateToProps)(Instructivos);
