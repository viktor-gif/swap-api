import React from "react";
import s from "./People.module.css";
import { NavLink } from "react-router-dom";

const People = (props) => {
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
