interface I_COORDINATES {
  latitude: number,
  longitude: number,
  latitudeDelta: number,
  longitudeDelta: number
}

export interface I_DIRECCIONES {
  id: string,
  name: string,
  coordinates: I_COORDINATES,
  address: string,
  schools?: Array<string> | undefined
}

export const DIRECCIONES: Array<I_DIRECCIONES> = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Clínica Odontológica UDP',
    coordinates: { 
      latitude: -33.449539,
      longitude: -70.661003,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    },
    address:'Ejército 219, Santiago, Chile',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Hospital de la Dirección de Previsión de Carabineros de Chile (DIPRECA)',
    coordinates: { 
      latitude: -33.416691, 
      longitude: -70.528219,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    },
    address:'Vital Apoquindo 1200, Las Condes, Región Metropolitana',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Corporación Municipal de Educación, Salud y Recreación de La Florida, CESFAM Los Castaños',
    coordinates: { 
      latitude: -33.517261, 
      longitude: -70.592905,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    },
    address:'Yokohama 6865, La Florida, Santiago, Región Metropolitana',
  },
];