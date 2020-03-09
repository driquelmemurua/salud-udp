export const CONTENT_VIEWS = [
  {
    id: '0',
    name: 'Contactos'
  },
  {
    id: '1',
    name: 'Direcciones'
  },
  {
    id: '2',
    name: 'Instructivos'
  },
  {
    id: '3',
    name: 'Sugerencias'
  },
  {
    id: '4',
    name: 'Cambiar Escuela'
  }
];

export const DIRECCION_VIEWS = [
  {
    id: '0',
    name: 'Dirección'
  }
];

export interface I_CONTACTOS {
  id: string,
  name: string,
  number: string,
  schools: Array<string>
}

export const CONTACTOS: Array<I_CONTACTOS> = [
  {
    id: '3',
    name: 'Dra. María Ivonne Moreno',
    number : '+56912345678',
    schools: ['Medicina']
  },
  {
    id: '1',
    name: 'Persona 1',
    number : '+56912345678',
    schools: ['Medicina']
  },
  {
    id: '2',
    name: 'Persona 2',
    number : '+56912345678',
    schools: ['Medicina']
  },
  {
    id: '3',
    name: 'Pamela Torres Parra',
    number : '+56912345678',
    schools: ['Enfermería']
  },
  {
    id: '1',
    name: 'Persona 1',
    number : '+56912345678',
    schools: ['Enfermería']
  },
  {
    id: '2',
    name: 'Persona 2',
    number : '+56912345678',
    schools: ['Enfermería']
  },
  {
    id: '3',
    name: 'Antonio Stecher Guzmán',
    number : '+56912345678',
    schools: ['Psicología']
  },
  {
    id: '1',
    name: 'Persona 1',
    number : '+56912345678',
    schools: ['Psicología']
  },
  {
    id: '2',
    name: 'Persona 2',
    number : '+56912345678',
    schools: ['Psicología']
  },
  {
    id: '3',
    name: 'María José Junqueras',
    number : '+56912345678',
    schools: ['Kinesiología']
  },
  {
    id: '1',
    name: 'Persona 1',
    number : '+56912345678',
    schools: ['Kinesiología']
  },
  {
    id: '2',
    name: 'Persona 2',
    number : '+56912345678',
    schools: ['Kinesiología']
  },
  {
    id: '3',
    name: 'Marcela Puentes Rosales',
    number : '+56912345678',
    schools: ['Obstetricia y Neonatología']
  },
  {
    id: '1',
    name: 'Persona 1',
    number : '+56912345678',
    schools: ['Obstetricia y Neonatología']
  },
  {
    id: '2',
    name: 'Persona 2',
    number : '+56912345678',
    schools: ['Obstetricia y Neonatología']
  },
  {
    id: '3',
    name: 'Geraldine Vives Toledo',
    number : '+56912345678',
    schools: ['Odontología']
  },
  {
    id: '1',
    name: 'Persona 1',
    number : '+56912345678',
    schools: ['Odontología']
  },
  {
    id: '2',
    name: 'Persona 2',
    number : '+56912345678',
    schools: ['Odontología']
  },
  {
    id: '3',
    name: 'Pamela Cornejo Zamorano',
    number : '+56912345678',
    schools: ['Tecnología Médica']
  },
  {
    id: '1',
    name: 'Persona 1',
    number : '+56912345678',
    schools: ['Tecnología Médica']
  },
  {
    id: '2',
    name: 'Persona 2',
    number : '+56912345678',
    schools: ['Tecnología Médica']
  },
]

export interface I_EMERGENCIAS {
  id: string,
  number: string,
  schools: Array<string>
}

export const EMERGENCIAS: Array<I_EMERGENCIAS> = [
  {
    id: '0',
    number : '+56975196948',
    schools: ['*']
  },
  {
    id: '1',
    number : '+56912345678',
    schools: ['*']
  },
  {
    id: '2',
    number : '+56912345678',
    schools: ['*']
  },
]

export interface I_ACCIDENTS_VIEWS {
  id: string,
  name: string,
  uri: string,
  file: string,
  schools: Array<string>
}

export const ACCIDENTS_VIEWS: Array<I_ACCIDENTS_VIEWS> = [
  {
    id: '0',
    name: 'Categoría accidente 1',
    uri: 'https://laderasur.com/content/uploads/2018/02/pdf-test.pdf',
    file: 'pdf-test.pdf',
    schools: ['*']
  },
  {
    id: '1',
    name: 'Categoría accidente 2',
    uri: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    file: 'dummy.pdf',
    schools: ['*']
  },
  {
    id: '2',
    name: 'Categoría accidente 3',
    uri: 'https://s1.q4cdn.com/806093406/files/doc_downloads/test.pdf',
    file: 'test.pdf',
    schools: ['*']
  }
];

export const SCHOOLS = [
  {
    id: '0',
    name: 'Medicina',
  },
  {
    id: '1',
    name: 'Enfermería'
  },
  {
    id: '2',
    name: 'Psicología',
  },
  {
    id: '3',
    name: 'Kinesiología'
  },
  {
    id: '4',
    name: 'Obstetricia y Neonatología'
  },
  {
    id: '5',
    name: 'Odontología'
  },
  {
    id: '6',
    name: 'Tecnología Médica'
  }
]

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
  schools: Array<string>
}

export const DIRECCIONES: Array<I_DIRECCIONES> = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Costanera center 1',
    coordinates: { 
      latitude: -33.417422, 
      longitude: -70.606427,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    },
    address:'Av. Andrés Bello 2425, Providencia, Región Metropolitana',
    schools: ['*']
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Costanera center 2',
    coordinates: { 
      latitude: -33.417422, 
      longitude: -70.606427,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    },
    address:'Av. Andrés Bello 2425, Providencia, Región Metropolitana',
    schools: ['*']
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Costanera center 3',
    coordinates: { 
      latitude: -33.417422, 
      longitude: -70.606427,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    },
    address:'Av. Andrés Bello 2425, Providencia, Región Metropolitana',
    schools: ['*']
  },
];

export const TYPES = [
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