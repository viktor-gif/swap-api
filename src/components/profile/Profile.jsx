import React from "react";
import s from "./Profile.module.css";

class Profile extends React.Component {
  componentDidMount() {
    if (
      this.props.profileData &&
      this.props.profileData.films.length === this.props.films.length &&
      this.props.profileData.vehicles.length === this.props.vehicles.length
    ) {
      this.props.profileData.films.forEach((item) => {
        this.props.getFilm(item);
      });
      this.props.profileData.vehicles.forEach((item) => {
        this.props.getVehicle(item);
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.profileData !== this.props.profileData) {
      if (this.props.profileData) {
        let films = this.props.profileData.films;
        let vehicles = this.props.profileData.vehicles;

        films.forEach((item) => {
          this.props.getFilm(item);
        });
        vehicles.forEach((item) => {
          this.props.getVehicle(item);
        });
      }
    }
  }
  componentWillUnmount() {
    this.props.clearFilms();
    this.props.clearVehicles();
  }

  render() {
    console.log(this.props);
    const profileData = this.props.profileData;
    const planets = this.props.planets;
    const films = this.props.films;
    const vehicles = this.props.vehicles;
    console.log(vehicles);
    if (!profileData) {
      return <div>Loading...</div>;
    }
    if (!planets) {
      return <div>Loading...</div>;
    }

    const indexPlanet = profileData.homeworld.slice(29, -1);

    const filmsNames = films.map((item) => {
      return <li key={item.title}>{item.title}</li>;
    });
    const vehiclesNames = vehicles.map((item) => {
      return <li key={item.name}>{item.name}</li>;
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
          <b>Vehicles</b>:{" "}
          {vehicles.length > 0 ? <ul>{vehiclesNames}</ul> : "Loading..."}
        </div>
        <div className={s.personProperty}>
          <b>Films</b>:{" "}
          {films.length > 0 ? <ul>{filmsNames}</ul> : "Loading..."}
        </div>
      </div>
    );
  }
}

export default Profile;
