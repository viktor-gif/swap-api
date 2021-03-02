import React from "react";
import { connect } from "react-redux";
import People from "./People";
import { compose } from "redux";
import { getPeople } from "../../redux/people-reducer";
import s from "./People.module.css";

class PeopleContainer extends React.Component {
  componentDidMount() {
    this.props.getPeople();
  }

  render() {
    return (
      <div>
        <h1>People-page</h1>
        <div className={s.searchingBlock}>
          <input type="text" placeholder="Enter searching name" />
        </div>
        <People people={this.props.people} />
        {console.log(this.props.people)}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    people: state.peoplePage.people,
  };
};

export default compose(connect(mapStateToProps, { getPeople }))(
  PeopleContainer
);
