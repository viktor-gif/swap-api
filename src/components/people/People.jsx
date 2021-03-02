import React from "react";
import s from "./People.module.css";
import { NavLink } from "react-router-dom";

const People = (props) => {
  let inputSearch = React.createRef();

  let onValueChange = (e) => {
    props.updateValue(e.target.value);
  };

  let searchPeople = () => {
    let text = inputSearch.current.value;
    props.getSearchingPeople(text);
  };

  let searchPeopleKeyDown = (e) => {
    if (e.keyCode === 13) {
      searchPeople();
    }
  };

  return (
    <div>
      <h1>People-page</h1>
      <div className={s.searchingBlock}>
        <input
          type="text"
          placeholder="Enter searching name"
          value={props.newText}
          onChange={onValueChange}
          ref={inputSearch}
          onKeyDown={searchPeopleKeyDown}
        />
        <button onClick={searchPeople}>search</button>
      </div>
      <PeopleItems people={props.people} />
    </div>
  );
};

const PeopleItems = (props) => {
  let peopleItems = props.people.map((p) => {
    return (
      <div key={p.name} className={s.person}>
        <NavLink to={"/profile/" + (+props.people.indexOf(p) + 1)}>
          <div>{p.name}</div>
        </NavLink>
        <div>{p.gender}</div>
        <div>{p.homeworld}</div>
      </div>
    );
  });

  return <div>{peopleItems}</div>;
};

export default People;
