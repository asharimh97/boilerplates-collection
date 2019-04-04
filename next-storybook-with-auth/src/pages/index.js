import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";

import Coba from "../components/Coba";

import { sample } from "../stores/actions";
import withAuth from "../components/_hoc/withAuth";

class index extends Component {
  render() {
    return (
      <div>
        Hello from caterer
        <Coba p={2} />
        <button onClick={() => this.props.sampleAction()}>Klik aku gan</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sampleState: state.sample
});

const mapDispatchToProps = dispatch => ({
  sampleAction: bindActionCreators(sample, dispatch)
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withAuth()
)(index);
