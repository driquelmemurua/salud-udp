import React,{ useState, useEffect } from 'react';

import { View, TextInput, TouchableOpacity, Text, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import { styles } from '../styles';
import { Button, Tag } from '../components';
import { SCHOOLS, TYPES } from '../constants';

function AutoComplete({applyFilters, filters=null, selectedSchool}) {

    const [filterPress,setFilterPress]=useState(false)
    const [filterText, setFilterText]=useState('');
    const [tags, setTags] = useState({[selectedSchool]: true});
    const filterTypes = TYPES.filter(type => tags[type.name]).length > 0;
    const filterSchools = SCHOOLS.filter(school => tags[school.name]).length > 0;

    useEffect(() => {
      applyFilters(filterText, tags, filterTypes, filterSchools);
    },[filterText, tags])

    useEffect(()=>{
      if(!filterPress)
        applyFilters(filterText, tags, filterTypes, filterSchools);
    },[filterPress, tags])

    const changeTag = (name)=>{setTags({...tags, [name]: !tags[name]})}

    return (
        <View style={{width:'100%', alignItems:'center'}}>

            <View style={{flexDirection:'row', width:'80%'}}>
                <TextInput
                    selectionColor={'#93d9cd'}
                    style={filters? styles.autoCompleteInputFilter:styles.autoCompleteInput}
                    onChangeText={(text) => setFilterText(text)}
                />
                {filters? 
                <View style={{width:'100%'}}>
                    <View style={filterPress? styles.autoCompleteIconFilterSelected : styles.autoCompleteIconFilter}> 
                        <TouchableOpacity onPress={ ()=> setFilterPress(!filterPress) } hitSlop={{top:1000,bottom:1000,left:1000, right:1000 }}>
                            <Ionicons name="ios-menu" size={24} color={filterPress?"#19B5B5":"white"} />
                        </TouchableOpacity> 
                    </View>
                </View>
                
                : 
                
                <View style={styles.autoCompleteIcon}>
                    <Ionicons name="ios-search" size={24} color="white" />
                </View> 
                }
            </View>

            {filterPress? 
                <ScrollView style={styles.containerFilter}>

                  <Text style={{...styles.text, fontWeight:'bold', fontSize:16, alignSelf:'center'}}>FILTROS</Text>

                  <FilterButtonGroup title='ESCUELAS' data={SCHOOLS} tags={tags} changeTag={changeTag}/>
                  <FilterButtonGroup title='TIPO' data={TYPES} tags={tags} changeTag={changeTag}/>
                  
                  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <Button 
                    text={'Quitar filtros'} 
                    type='PRIMARY'
                    onPress={()=>setTags({})} 
                    viewStyle={{marginLeft:5, marginRight:5, marginTop:8, marginBottom:8}}/> 
                  <Button 
                    text={'Aplicar filtros'} 
                    type='PRIMARY'
                    onPress={() => {
                      setFilterPress(false)}
                    } 
                    viewStyle={{marginLeft:5, marginRight:5, marginTop:8, marginBottom:8}}/> 
                  </View>

                </ScrollView>
                
                :null
            }

            {filters?
            <TagGroup data={Object.entries(tags).filter(item => item[1]).map(item => item[0])} changeTag={changeTag} /> 
            :null}
             
        </View>
    );
}


function TagGroup({data, changeTag}) {

  const tags=data.map((tag,index)=>  
    <Tag
      key={index}
      text={tag} 
      onPress={()=>changeTag(tag)} />
  );

  return(
    <View style={styles.tagGroup}>
      {tags}
    </View>                
  );
}


function FilterButtonGroup({title=null,data, tags, changeTag}) {

  const buttons=data.map((item,index)=>  
    <Button
      key={index}
      text={item.name}
      onPress={()=>{changeTag(item.name)}}
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

function mapStateToProps(state) {
  return { selectedSchool: state.schools.selectedSchool };
} 

export default connect(mapStateToProps)(AutoComplete);
