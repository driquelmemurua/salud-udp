import { useReducer } from 'react';
import { returnTrue } from '../helpers';

function reducer(state, action){
  switch(action.type){
    case 'FILTER':
      return (item) => item[action.prop].toLowerCase().includes(action.payload);
    case 'EMPTY':
      return returnTrue;
    default:
      return state;
  }
}

export default function useFilterByText(prop){
  const [prep, dispatch] = useReducer(reducer, returnTrue);

  const onChangeText = (text: string) => {
    if(text)
      dispatch({type: 'FILTER', payload: text.toLowerCase(), prop})
    else
      dispatch({type: 'EMPTY'})
  }

  return [prep, onChangeText]
}