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

  // console.log(props.people);

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
// props.people.indexOf(p)
const PeopleItems = (props) => {
  // console.log(props.planets[props.people[2].homeworld.slice(29, -1)].name);

  if (!props.planets) {
    return <div>Loading</div>;
  }

  let peopleItems = props.people.map((ppl) => {
    let indexPeople = ppl.url.slice(28, -1);
    let indexPlanet = +ppl.homeworld.slice(29, -1);
    console.log(indexPeople);
    console.log(indexPlanet);
    // debugger;
    return (
      <div key={ppl.name} className={s.person}>
        <NavLink to={"/profile/" + indexPeople}>
          {" "}
          <div>{ppl.name}</div>
        </NavLink>
        <div>{ppl.gender}</div>
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
// props.planets[p.homeworld.slice(29, -1)].name
//.homeworld.slice(29, -1)
