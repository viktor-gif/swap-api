import React from "react";
import { connect } from "react-redux";
import People from "./People";
import { compose } from "redux";
import {
  getPeople,
  updateValue,
  getSearchingPeople,
  getPlanets,
} from "../../redux/people-reducer";

class PeopleContainer extends React.Component {
  componentWillMount() {}
  componentDidMount() {
    this.props.getPeople();
    this.props.getPlanets();
  }

  render() {
    return (
      <div>
        <People
          people={this.props.people}
          newText={this.props.newText}
          updateValue={this.props.updateValue}
          getSearchingPeople={this.props.getSearchingPeople}
          planets={this.props.planets}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    people: state.peoplePage.people,
    newText: state.peoplePage.newText,
    planets: state.peoplePage.planets,
  };
};

export default compose(
  connect(mapStateToProps, {
    getPeople,
    updateValue,
    getSearchingPeople,
    getPlanets,
  })
)(PeopleContainer);
