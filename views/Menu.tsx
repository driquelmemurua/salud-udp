import React, { useState, useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Default } from '../layouts';
import { styles } from '../styles';
import { CONTENT_VIEWS } from '../constants';
import { allActions } from '../actions';

function Menu({navigation, selectedSchool, updateSchool}) {

  const [school, setSchool] = useState(selectedSchool);

  useEffect(() => {
    if(!school){
      _retrieveSchool()
      .then((value) => {
        if(value){
          updateSchool(value);
          setSchool(value);
        } else {
          navigation.navigate('Cambiar Escuela');
        }
      })
    }
  },[school])

  const _retrieveSchool = async () => {
    try {
      console.log('RETRIEVE SCHOOL');
      const value = await AsyncStorage.getItem('selectedSchool');
      console.log(value)
      return value;
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Default
      logo
      subtitle={selectedSchool}
    >
      <FlatList
        data={CONTENT_VIEWS}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => navigation.navigate(item.name)}>
            <Text style={styles.menuItem}>
              {item.name}
            </Text>
          </TouchableOpacity>
        }
      />
    </Default>
  );
}

function mapStateToProps(state) {
  return { selectedSchool: state.schools.selectedSchool };
} 

const mapDispatchToProps = dispatch => {
  const { updateSchool } = allActions.schoolActions;
  return bindActionCreators({
    updateSchool,
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);