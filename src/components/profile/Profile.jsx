import React from "react";
import s from "./Profile.module.css";

class Profile extends React.Component {
  componentDidMount() {
    if (
      this.props.profileData &&
      this.props.profileData.films.length === this.props.films.length
    ) {
      this.props.profileData.films.forEach((item) => {
        this.props.getFilm(item);
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.profileData !== this.props.profileData) {
      if (this.props.profileData) {
        let films = this.props.profileData.films;

        films.forEach((item) => {
          this.props.getFilm(item);
        });
      }
    }
  }
  componentWillUnmount() {
    this.props.clearFilms();
  }

  render() {
    const profileData = this.props.profileData;
    const planets = this.props.planets;
    const films = this.props.films;
    if (!profileData) {
      return <div>Loading...</div>;
    }
    if (!planets) {
      return <div>Loading...</div>;
    }

    const indexPlanet = profileData.homeworld.slice(29, -1);

    const filmsNames = films.map((item) => {
      return <span>"{item.title}", </span>;
    });

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
          <b>HomeWorld</b>:{" "}
          {planets[indexPlanet] ? planets[indexPlanet].name : "Loading..."}
        </div>
        <div className={s.personProperty}>
          <b>Vehicles</b>: {profileData.vehicles}
        </div>
        <div className={s.personProperty}>
          <b>Films</b>: {films.length > 0 ? filmsNames : "Loading..."}
        </div>
      </div>
    );
  }
}

export default Profile;
