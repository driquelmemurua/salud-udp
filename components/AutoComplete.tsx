import React,{ useState} from 'react';

import { View, TextInput, TouchableOpacity, Text, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { styles } from '../styles';

import { Button, Tag } from '../components';
import { SCHOOLS } from '../constants';

const TYPES = [
  {
    id: 0,
    name: 'Vídeo',
  },
  {
    id: 1,
    name: 'Documento'
  },
  {
    id: 2,
    name: 'Normativa',
  }
]
const FILTER = [
  {
    id: 0,
    name: 'Quitar filtros',
  },
  {
    id: 1,
    name: 'Aplicar filtros'
  }
]


function AutoComplete({onChangeText, filters=null, selectedSchool}) {

    const [filterPress,setFilterPress]=useState(false)
    const [tags, setTags] = useState({[selectedSchool]: true});

    const changeTag = (name)=>{ setTags({...tags, [name]: !tags[name]}) }

    return (
        <View style={{width:'100%', alignItems:'center'}}>

            <View style={{flexDirection:'row', width:'80%'}}>
                <TextInput
                    selectionColor={'#93d9cd'}
                    style={filters? styles.autoCompleteInputFilter:styles.autoCompleteInput}
                    onChangeText={onChangeText}
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
                    onPress={() => setFilterPress(false)} 
                    viewStyle={{marginLeft:5, marginRight:5, marginTop:8, marginBottom:8}}/> 
                  </View>

                </ScrollView>
                
                :null
            }

            <TagGroup data={Object.entries(tags).filter(item => item[1]).map(item => item[0])} changeTag={changeTag} /> 
              
        </View>
    );
}


function TagGroup({data, changeTag}) {

  const tags=data.map((tag)=>  
    <Tag 
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

  const buttons=data.map((item)=>  
    <Button 
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