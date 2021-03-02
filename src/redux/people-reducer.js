import { peopleAPI } from "../api/Api";

const SET_PEOPLE = "SET_PEOPLE";

let initialState = {
  people: [],
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PEOPLE:
      return {
        ...state,
        people: action.people,
      };
    default:
      return state;
  }
};
//action-creaters
export const setPeople = (people) => ({ type: SET_PEOPLE, people });

//Tunk-creators
export const getPeople = () => {
  return (dispatch) => {
    peopleAPI.getPeople().then((response) => {
      dispatch(setPeople(response.data.results));
    });
  };
};

export default peopleReducer;
