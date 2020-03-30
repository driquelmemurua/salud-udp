import React, { useState } from 'react';
import { FlatList, AsyncStorage } from 'react-native'
import { Default } from '../layouts';

import { connect } from 'react-redux';
import { AutoCompleteWithFilters, FileItem } from '../components';
import { useFilterByText, useFilterByTags } from '../hooks';
import { composeFilters } from '../helpers';

function Instructivos({navigation, selectedSchool}) {
  const [hasName, onChangeText] = useFilterByText('name');
  const [schools, schoolActions, hasSchool] = useFilterByTags('schools', {[selectedSchool]: true});
  const [types, typeActions, hasType] = useFilterByTags('type');
  const filters = composeFilters(hasName, hasSchool, hasType);
  const [loading, setLoading] = useState(true);
  const [instructives, setInstructives] = useState([]);
  const instructivos = instructives.filter(filters);

  if(instructives.length === 0 && loading){
    AsyncStorage.getItem('instructivos', (err, res) => {
      if(res){
        setInstructives(JSON.parse(res));
        setLoading(false);
      }
    })
    return <Default>{}</Default>
  }

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
