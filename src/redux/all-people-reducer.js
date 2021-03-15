import { allPeopleAPI } from "../api/Api";

const CLEAR_PEOPLE = "CLEAR_PEOPLE";
const SET_ALL_PEOPLE = "SET_ALL_PEOPLE";

let initialState = {
  // people: null,
  allPeople: [],
};

const allPeopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_PEOPLE:
      return {
        ...state,
        allPeople: state.allPeople.concat(action.allPeople),
      };
    case CLEAR_PEOPLE:
      return {
        ...state,
        allPeople: [],
      };
    default:
      return state;
  }
};
//action-creaters
export const clearPeople = () => ({ type: CLEAR_PEOPLE });
export const setAllPeople = (allPeople) => ({
  type: SET_ALL_PEOPLE,
  allPeople,
});
//Tunk-creators
export const getPeople = (next) => {
  return (dispatch) => {
    allPeopleAPI.getAllPeople(next).then((response) => {
      dispatch(setAllPeople(response.data.results));
    });
  };
};

export default allPeopleReducer;
