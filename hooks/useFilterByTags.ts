import { useReducer } from 'react';
import { returnTrue } from '../helpers';

function tagsReducer(state, action){
  let tags = { ...state.tags }
  switch(action.type){
    case 'ADD':
      tags[action.payload] = true;
      return { tags, filter: filterByTags(tags, action.prop) };
    case 'REMOVE':
      tags[action.payload] = false;
      return { tags, filter: filterByTags(tags, action.prop) };
    case 'SWITCH':
      tags[action.payload] = !tags[action.payload];
      return { tags, filter: filterByTags(tags, action.prop) };
    case 'CLEAR':
      return { tags: {}, filter: returnTrue };
    default:
      return state;
  }
}

function thereAreTags(tags){
  return Object.values(tags).reduce((result, value) => result || value, false);
}

function filterByTags(tags, prop){
  if(thereAreTags(tags)){
    return item => {
      if(!item.hasOwnProperty(prop))
        return true;
      if(Array.isArray(item[prop]))
        return item[prop].reduce((result, subitem) => result || tags[subitem], false)
      else
        return tags[item[prop]]
    };
  }
  else
    return returnTrue;
}

export default function useFilterByTags(prop, initialTags = {}){
  const [state, dispatch] = useReducer(tagsReducer, {tags: initialTags, filter: filterByTags(initialTags, prop)});

  const { tags, filter } = state;
  const actions = {
    addTag: (tag) => {
      dispatch({type: 'ADD', payload: tag, prop})
    },
    removeTag: (tag) => {
      dispatch({type: 'REMOVE', payload: tag, prop})
    },
    switchTag: (tag) => {
      dispatch({type: 'SWITCH', payload: tag, prop})
    },
    clearTags: () => {
      dispatch({type: 'CLEAR'})
    }
  }

  return [tags, actions, filter];
}