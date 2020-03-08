import React,{ useState} from 'react';

import { View, TextInput, TouchableOpacity, Modal,Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles';


function AutoComplete({onChangeText, filters=null}) {

    const [filterPress,setFilterPress]=useState(false)

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
                <View style={styles.containerFilter}>
                    
                </View>
                
                :null
            }
              

            

        </View>


    );
}

export default AutoComplete;