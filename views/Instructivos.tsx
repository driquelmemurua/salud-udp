import React from 'react';
import { FlatList } from 'react-native'
import { Default } from '../layouts';

import { connect } from 'react-redux';
import { AutoCompleteWithFilters, FileItem } from '../components';
import { useFilterByText, useFilterByTags } from '../hooks';
import { composeFilters } from '../helpers';

const INSTRUCTIVOS = [
  {
    id: '0',
    name: 'Centro de Simulación Clínica UDP',
    type: 'Vídeo',
    file: 'testVideo',
    schools: 'Kinesiología'
  },
  {
    id: '1',
    name: 'Documento 1',
    type: 'Documento' ,
    file: 'first',
    schools: ['Medicina','Psicología'] 
  },
  {
    id: '2',
    name: 'Documento 2',
    type: 'Documento',
    file: 'second',
    schools: ['Obstetricia y Neonatología']
  },
  {
    id: '3',
    name: 'Documento 3',
    file: 'third',
    type: 'Documento'
  }
];

function Instructivos({navigation, selectedSchool}) {
  const [hasName, onChangeText] = useFilterByText('name');
  const [schools, schoolActions, hasSchool] = useFilterByTags('schools', {[selectedSchool]: true});
  const [types, typeActions, hasType] = useFilterByTags('type');
  const filters = composeFilters(hasName, hasSchool, hasType);

  const instructivos = INSTRUCTIVOS.filter(filters);

  console.log(instructivos)
  const tags = {
    types,
    schools
  }
  const actions = {
    typeActions,
    schoolActions
  }

  return (
    <Default
      title='INSTRUCTIVOS'
      subtitle={selectedSchool}
      navigation={navigation.goBack}
    >
      <AutoCompleteWithFilters
        onChangeText={onChangeText}
        tags={tags}
        actions={actions}
      />
      <FlatList
        style={{width: '80%'}}
        data={instructivos}
        renderItem={({ item }) =>
          <FileItem title={item.name} type={item.type} onPress={() => {navigation.navigate(item.type, {file: item.file, name: item.name})}}/>
        }
      />
    </Default>
  );
}

function mapStateToProps(state) {
  return { selectedSchool: state.schools.selectedSchool };
} 

export default connect(mapStateToProps)(Instructivos);
