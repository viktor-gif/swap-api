import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { compose } from "redux";
import { getProfile } from "../../redux/profile-reducer";
import { getPlanets } from "../../redux/people-reducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getPlanets();
    this.props.getProfile(this.props.match.params.id);
  }
  // componentDidUpdate(prevProps) {
  //   if (
  //     prevProps.planets !== this.props.planets &&
  //     prevProps.profileData !== this.props.profileData
  //   ) {
  //     this.props.getPlanets();
  //     this.props.getProfile(this.props.match.params.id);
  //   }
  // }

  render() {
    return (
      <div>
        <h1>Person-page</h1>
        <Profile
          profileData={this.props.profileData}
          planets={this.props.planets}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profileData: state.profilePage.profileData,
    planets: state.peoplePage.planets,
  };
};

export default compose(
  connect(mapStateToProps, { getProfile, getPlanets }),
  withRouter
)(ProfileContainer);
