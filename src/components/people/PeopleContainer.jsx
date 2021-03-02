import React from "react";
import { connect } from "react-redux";
import People from "./People";
import { compose } from "redux";
import {
  getPeople,
  updateValue,
  getSearchingPeople,
} from "../../redux/people-reducer";

class PeopleContainer extends React.Component {
  componentDidMount() {
    this.props.getPeople();
  }

  render() {
    return (
      <div>
        <People
          people={this.props.people}
          newText={this.props.newText}
          updateValue={this.props.updateValue}
          getSearchingPeople={this.props.getSearchingPeople}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    people: state.peoplePage.people,
    newText: state.peoplePage.newText,
  };
};

export default compose(
  connect(mapStateToProps, { getPeople, updateValue, getSearchingPeople })
)(PeopleContainer);
