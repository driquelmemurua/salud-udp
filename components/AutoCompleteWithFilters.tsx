import React,{ useState } from 'react';
import { View, TouchableOpacity, Text, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from '../styles';
import Button from './Button';
import Tag from './Tag';
import AutoComplete from './AutoComplete';
import { SCHOOLS, TYPES } from '../constants';

export default function AutoCompleteWithFilters({onChangeText, tags, actions}){
  const [showFilters, setShowFilters] = useState(false);

  const { types, schools } = tags;
  const { typeActions, schoolActions } = actions;

  const typeTags = Object.entries(types)
    .filter(([,value]) => value)
    .map(([tag,])=>  
      <Tag
        key={tag}
        text={tag}
        onPress={()=>typeActions.removeTag(tag)}
      />
    );
  const schoolTags = Object.entries(schools)
    .filter(([,value]) => value)
    .map(([tag,])=>  
      <Tag
        key={tag}
        text={tag}
        onPress={()=>schoolActions.removeTag(tag)}
      />
    );
  
  const allTags = [...typeTags, ...schoolTags];

  return (
    <View style={{width: '80%'}}>
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
        <AutoComplete onChangeText={onChangeText} />
        <TouchableOpacity onPress={()=> setShowFilters(!showFilters)} hitSlop={{top:10,bottom:10,left:10, right:10}}>
          <View
            style={
              showFilters ? 
                {...styles.filtersButton, backgroundColor: 'white'} : 
                styles.filtersButton
            }
          > 
            <Ionicons name="ios-menu" size={24} color={showFilters?"#19B5B5":"white"} />
          </View>
        </TouchableOpacity> 
        
      </View>
      {
        showFilters ? (
          <FiltersBox 
            onRemoveFiltersPress={()=>{
              typeActions.clearTags();
              schoolActions.clearTags();
            }}
            onApplyFiltersPress={()=>{setShowFilters(false)}}
            schoolTags = {{ schools, switchSchoolTag: schoolActions.switchTag }}
            typeTags = {{ types, switchTypeTag: typeActions.switchTag }}
          />
        ) : null
      }
      <View style={styles.tagGroup}>
        {allTags}
      </View>
    </View>
  )
}

function FiltersBox({
  onRemoveFiltersPress,
  onApplyFiltersPress,
  schoolTags,
  typeTags
}) {

  const { schools, switchSchoolTag } = schoolTags;
  const { types, switchTypeTag } = typeTags;

  return (
    <View style={styles.filtersBox}>
      <ScrollView>
        <Text 
          style={{
            ...styles.text, 
            fontWeight:'bold', 
            fontSize:16, 
            alignSelf:'center', 
            marginBottom: 10
          }}
        >
          FILTROS
        </Text>
        <FilterButtonGroup
          title='Escuelas'
          data={SCHOOLS}
          tags={schools}
          switchTag={switchSchoolTag}
        />
        <FilterButtonGroup
          title='Tipo'
          data={TYPES}
          tags={types}
          switchTag={switchTypeTag}
        />
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <Button 
            text={'Quitar filtros'} 
            type='PRIMARY'
            onPress={onRemoveFiltersPress} 
          /> 
          <Button 
            text={'Aplicar filtros'} 
            type='PRIMARY'
            onPress={onApplyFiltersPress} 
          /> 
        </View>
      </ScrollView>
    </View>
  );
}

function FilterButtonGroup({title=null, data, tags, switchTag}) {

  const buttons = data.map((item,index)=>  
    <Button
      key={index}
      text={item.name}
      onPress={()=>{switchTag(item.name)}}
      type={tags[item.name]?'PRESSED_TAG':'TAG'}
      viewStyle={{marginLeft:5, marginRight:5, marginTop:8, marginBottom:8}}
    />
  );

  return(
    <View>
      {title?
        <Text style={{...styles.text, fontWeight:'bold', marginStart:5}}>{title}</Text>
        : null}
      
      <View style={styles.buttonGroup}>
        {buttons}
      </View>
  
    </View>                
  );
}