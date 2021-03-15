import React from "react";
import { connect } from "react-redux";
import AllPeople from "./AllPeople";
import { compose } from "redux";
import { getPeople, clearPeople } from "../../redux/all-people-reducer";

class AllPeopleContainer extends React.Component {
  componentDidMount() {
    let url = "https://swapi.dev/api/people/";
    this.props.getPeople(url);
    this.props.getPeople(`${url}?page=2`);
    this.props.getPeople(`${url}?page=3`);
    this.props.getPeople(`${url}?page=4`);
    this.props.getPeople(`${url}?page=5`);
    this.props.getPeople(`${url}?page=6`);
    this.props.getPeople(`${url}?page=7`);
    this.props.getPeople(`${url}?page=8`);
    this.props.getPeople(`${url}?page=9`);
  }
  componentWillUnmount() {
    this.props.clearPeople();
  }

  render() {
    console.log(this.props.allPeople);
    return (
      <div>
        <AllPeople allPeople={this.props.allPeople} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    allPeople: state.allPeoplePage.allPeople,
  };
};

export default compose(connect(mapStateToProps, { getPeople, clearPeople }))(
  AllPeopleContainer
);
