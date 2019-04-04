import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Coba from "../components/Coba";

import { sample } from "../stores/actions";

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
