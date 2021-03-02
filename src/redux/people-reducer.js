import { peopleAPI } from "../api/Api";

const SET_PEOPLE = "SET_PEOPLE";
const SEARCH_PEOPLE = "SEARCH_PEOPLE";
const SET_NEW_TEXT = "SET_NEW_TEXT";

let initialState = {
  people: [],
  // searchingPeople: [],
  newText: "",
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PEOPLE:
      return {
        ...state,
        people: action.people,
      };
    case SEARCH_PEOPLE:
      return {
        ...state,
        people: action.people,
      };

    case SET_NEW_TEXT:
      return {
        ...state,
        newText: action.newText,
      };
    default:
      return state;
  }
};
//action-creaters
export const setPeople = (people) => ({ type: SET_PEOPLE, people });
export const setSearchingPeople = (people) => ({
  type: SEARCH_PEOPLE,
  people,
});
export const updateValue = (newText) => ({ type: SET_NEW_TEXT, newText });

//Tunk-creators
export const getPeople = () => {
  return (dispatch) => {
    peopleAPI.getPeople().then((response) => {
      dispatch(setPeople(response.data.results));
    });
  };
};
export const getSearchingPeople = (text) => {
  return (dispatch) => {
    peopleAPI.searchPeople(text).then((response) => {
      dispatch(setSearchingPeople(response.data.results));
    });
  };
};

export default peopleReducer;
