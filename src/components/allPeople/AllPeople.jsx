import React, { useState } from "react";
import s from "./AllPeople.module.css";
import { NavLink } from "react-router-dom";

const AllPeople = (props) => {
  const allPeopleItems = props.allPeople.map((p) => {
    let indexPeople = p.url.slice(28, -1);
    return (
      <div>
        <NavLink to={"/profile/" + indexPeople}>
          <li key={p.name}>{p.name}</li>
        </NavLink>
      </div>
    );
  });
  return (
    <div>
      <ol>{allPeopleItems}</ol>
    </div>
  );
};

export default AllPeople;
