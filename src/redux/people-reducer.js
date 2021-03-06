import { peopleAPI } from "../api/Api";

const SET_PEOPLE = "SET_PEOPLE";
const SEARCH_PEOPLE = "SEARCH_PEOPLE";
const SET_NEW_TEXT = "SET_NEW_TEXT";
const SET_PLANETS = "SET_PLANETS";

let initialState = {
  people: null,
  newText: "",
  planets: null,
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
    case SET_PLANETS:
      return {
        ...state,
        planets: action.planets,
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
export const setPlanets = (planets) => ({ type: SET_PLANETS, planets });

//Tunk-creators
export const getPeople = () => {
  return (dispatch) => {
    peopleAPI.getPeople().then((response) => {
      let people = response.data.results;
      dispatch(setPeople(people));
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
export const getPlanets = () => {
  return (dispatch) => {
    peopleAPI.getPlanets().then((response) => {
      dispatch(setPlanets(response.data.results));
    });
  };
};

export default peopleReducer;
