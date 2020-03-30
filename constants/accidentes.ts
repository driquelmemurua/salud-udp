export interface I_ACCIDENTS_VIEWS {
  id: string,
  name: string,
  file: string,
  schools?: Array<string>
}

export const ACCIDENTS_VIEWS: Array<I_ACCIDENTS_VIEWS> = [
  {
    id: '0',
    name: 'Categoría accidente 1',
    file: 'first',

  },
  {
    id: '1',
    name: 'Categoría accidente 2',
    file: 'second',
  },
  {
    id: '2',
    name: 'Categoría accidente 3',
    file: 'third',
  }
];