import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const People = (props) => {
  return (
    <nav className={s.navbar}>
      <div className={s.item}>
        <NavLink to="/profile/" activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/people" activeClassName={s.active}>
          People
        </NavLink>
      </div>
    </nav>
  );
};

export default People;
