import { combineReducers } from 'redux';
import { SchoolsReducer } from './SchoolsReducer';

const rootReducer = combineReducers({
  schools: SchoolsReducer
})

export default rootReducer