import React, {useState} from 'react';
import { Default } from '../layouts';

import { connect } from 'react-redux';

import { AutoComplete } from '../components';


const INSTRUCTIVOS = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    nombre: 'Material 1',
    tipo: 'VIDEO' ,
    escuela: ['Kinesiología']
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    nombre: 'Material 2',
    tipo: 'DOCUMENTO' ,
    escuela:['Medicina','Psicología'] 
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b3',
    nombre: 'Material 3',
    tipo: 'NORMATIVA' ,
    escuela: ['Obstetricia y Neonatología']
  },
];


function Instructivos({navigation, selectedSchool}) {

  const [direcciones, setDirecciones]= useState(INSTRUCTIVOS);
  
  const filterList = (text) => { 
    return setDirecciones(text ? INSTRUCTIVOS.filter(instructivo => (instructivo.nombre.toLowerCase()).includes(text.toLowerCase()) ): INSTRUCTIVOS)
  }

  return (

    <Default
      title='INSTRUCTIVOS'
      subtitle={selectedSchool}
      navigation={navigation.goBack}>
       
        <AutoComplete onChangeText={(text)=>filterList(text)} filters='true'/>

    </Default>

  );
}

function mapStateToProps(state) {
  return { selectedSchool: state.schools.selectedSchool };
} 

export default connect(mapStateToProps)(Instructivos);
