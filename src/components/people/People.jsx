import React, { useState } from "react";
import s from "./People.module.css";
import { NavLink } from "react-router-dom";
import magnifier from "../../img/magnifier.png";

const People = (props) => {
  let [activeInput, setActiveInput] = useState(false);

  const onFocusInput = () => {
    setActiveInput(true);
  };
  const onBlurInput = () => {
    setActiveInput(false);
  };

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

  if (!props.people) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h1>People-page</h1>
      <div className={s.searchingBlock}>
        <div>
          <div className={s.inputBlock}>
            <input
              className={s.unActiveInput + " " + (activeInput && s.activeInput)}
              type="text"
              placeholder="Enter searching name"
              value={props.newText}
              onChange={onValueChange}
              ref={inputSearch}
              onKeyDown={searchPeopleKeyDown}
              onFocus={onFocusInput}
              onBlur={onBlurInput}
            />
            {!activeInput && <img src={magnifier} alt="mf" />}
          </div>
        </div>
        <button onClick={searchPeople}>search</button>
      </div>
      <PeopleItems people={props.people} planets={props.planets} />
    </div>
  );
};
const PeopleItems = (props) => {
  if (!props.planets) {
    return <div>Loading</div>;
  }
  if (!props.people) {
    return <div>Loading</div>;
  }
  let peopleItems = props.people.map((p) => {
    let indexPeople = p.url.slice(28, -1);
    let indexPlanet = +p.homeworld.slice(29, -1) - 1;
    return (
      <div key={p.name} className={s.person}>
        <NavLink to={"/profile/" + indexPeople}>
          {" "}
          <div>{p.name}</div>
        </NavLink>
        <div>{p.gender}</div>
        <div>
          {props.planets[indexPlanet]
            ? props.planets[indexPlanet].name
            : "Loading..."}
        </div>
      </div>
    );
  });

  return <div>{peopleItems}</div>;
};

export default People;
