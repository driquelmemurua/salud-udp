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
  schools?: Array<string>
}

export const EMERGENCIAS: Array<I_EMERGENCIAS> = [
  {
    id: '0',
    number : '+56975196948',
  },
  {
    id: '1',
    number : '+56912345678',
  },
  {
    id: '2',
    number : '+56912345678',
  },
]