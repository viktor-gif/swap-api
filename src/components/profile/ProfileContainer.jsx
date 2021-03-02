import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { compose } from "redux";
import { getProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h1>Person-page</h1>
        <Profile profileData={this.props.profileData} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profileData: state.profilePage.profileData,
  };
};

export default compose(
  connect(mapStateToProps, { getProfile }),
  withRouter
)(ProfileContainer);
