import React from "react";
import s from "./Profile.module.css";

const People = ({ profileData }) => {
  if (!profileData) {
    return <div>Loading...</div>;
  }
  return (
    <div className={s.person}>
      <div className={s.personProperty}>
        <b>Name</b>: {profileData.name}
      </div>
      <div className={s.personProperty}>
        <b>Height</b>: {profileData.height}
      </div>
      <div className={s.personProperty}>
        <b>Mass</b>: {profileData.mass}
      </div>
      <div className={s.personProperty}>
        <b>Hair color</b>: {profileData.hair_color}
      </div>
      <div className={s.personProperty}>
        <b>Skin color</b>: {profileData.skin_color}
      </div>
      <div className={s.personProperty}>
        <b>Eye color</b>: {profileData.eye_color}
      </div>
      <div className={s.personProperty}>
        <b>Birth year</b>: {profileData.birth_year}
      </div>
      <div className={s.personProperty}>
        <b>Gender</b>: {profileData.gender}
      </div>
      <div className={s.personProperty}>
        <b>HomeWorld</b>: {profileData.homeworld}
      </div>
      <div className={s.personProperty}>
        <b>Vehicles</b>: {profileData.vehicles}
      </div>
      <div className={s.personProperty}>
        <b>Films</b>: {profileData.films}
      </div>
    </div>
  );
};

export default People;
