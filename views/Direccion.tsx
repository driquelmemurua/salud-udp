import React, { useState } from 'react';
import { MapView } from 'Expo'
import { Default } from '../layouts';

export default function Direccion({ route, navigation }){
  
  const { name, dirección } = route.params;
  
  const [region, setRegion] = useState(dirección);

  return (
      <Default
        navigation={navigation.goBack}
        title='DIRECCIONES'
        subtitle={name}>
          
      </Default>
  
    );
  }