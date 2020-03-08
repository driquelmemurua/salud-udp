import React from 'react';
import { FlatList, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Default } from '../layouts';
import { ListItem } from '../components';
import { allActions } from '../actions';
import { SCHOOLS } from '../constants';

function Escuela({navigation, updateSchool}) {
  return (
    <Default
      navigation={navigation.goBack}
      title = '¿Cual es tu escuela?'
    >
      <FlatList
        style={{width: '80%'}}
        data={SCHOOLS}
        renderItem={({ item }) => 
          <TouchableHighlight underlayColor='white' onPress={() => {
              updateSchool(item.name);
              navigation.navigate('Menu');
            }}>
            <ListItem text={item.name}/>
          </TouchableHighlight>
        }
      />
    </Default>
  );
}

const mapDispatchToProps = dispatch => {
  const { updateSchool } = allActions.schoolActions;
  return bindActionCreators({
    updateSchool,
  }, dispatch)
};

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Escuela);