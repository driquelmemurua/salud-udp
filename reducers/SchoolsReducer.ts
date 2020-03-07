const INITIAL_STATE = {
  selectedSchool: '',
};

export const SchoolsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_SCHOOL':
      return {...state, selectedSchool: action.payload};
    default:
      return state
  }
};
