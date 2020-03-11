export function filterByProp(prop, value){
  return (item) => {
    if(!item.hasOwnProperty(prop))
      return true;
    if(Array.isArray(item[prop]))
      return item[prop].reduce((acc, _value) => acc || _value === value, false)
    else
      return item[prop] === value;
  }
}

export function filterBySchool(list, school){
  return list.filter(filterByProp('schools', school));
}

export function composeFilters(...filters){
  return (item) => filters.reduce((acc, p) => acc && p(item), true)
}

export const returnTrue = () => true;