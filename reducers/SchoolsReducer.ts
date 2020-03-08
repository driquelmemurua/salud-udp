import { AsyncStorage } from 'react-native';

const _storeSchool = async (school) => {
  try {
    await AsyncStorage.setItem('selectedSchool', school);
    console.log(school);
  } catch (error) {
    // Error saving data
  }
};

const INITIAL_STATE = {
  selectedSchool: '',
};

export const SchoolsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_SCHOOL':
      _storeSchool(action.payload)
      return {...state, selectedSchool: action.payload};
    default:
      return state
  }
};
