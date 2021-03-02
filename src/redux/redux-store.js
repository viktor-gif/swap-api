import { createStore, combineReducers, applyMiddleware } from "redux";
import peopleReducer from "./people-reducer";
import thunkMiddleware from "redux-thunk";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
  peoplePage: peopleReducer,
  profilePage: profileReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
