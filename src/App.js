import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import store from "./redux/redux-store";
import PeopleContainer from "./components/people/PeopleContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import Header from "./components/header/Header";
import AllPeopleContainer from "./components/allPeople/AllPeopleContainer";

const App = (props) => {
  return (
    <div className="App">
      <HashRouter>
        <Provider store={store}>
          <Header />
          <Route path={"/profile/:id"} render={() => <ProfileContainer />} />
          <Route path="/people" render={() => <PeopleContainer />} />
          <Route path="/all-people" render={() => <AllPeopleContainer />} />
        </Provider>
      </HashRouter>
    </div>
  );
};

export default App;
