import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { compose } from "redux";
import {
  getProfile,
  getFilm,
  getVehicles,
  clearFilms,
} from "../../redux/profile-reducer";
import { getPlanets } from "../../redux/people-reducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let promise = new Promise(() => {
      this.props.getProfile(this.props.match.params.id);
    });
    promise.then(this.props.getPlanets()).then(this.props.getVehicles());
  }

  render() {
    return (
      <div>
        <h1>Person-page</h1>
        <Profile
          profileData={this.props.profileData}
          planets={this.props.planets}
          films={this.props.films}
          vehicles={this.props.vehicles}
          getFilm={this.props.getFilm}
          clearFilms={this.props.clearFilms}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profileData: state.profilePage.profileData,
    planets: state.peoplePage.planets,
    films: state.profilePage.films,
    vehicles: state.profilePage.vehicles,
  };
};

export default compose(
  connect(mapStateToProps, {
    getProfile,
    getPlanets,
    getFilm,
    getVehicles,
    clearFilms,
  }),
  withRouter
)(ProfileContainer);
