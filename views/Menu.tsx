import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { Default } from '../layouts';
import { styles } from '../styles';
import { CONTENT_VIEWS } from '../constants';
import { connect } from 'react-redux';

function Menu({navigation, selectedSchool}) {
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

export default connect(mapStateToProps)(Menu);