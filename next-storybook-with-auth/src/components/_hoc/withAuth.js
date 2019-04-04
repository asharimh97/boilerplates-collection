import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";

const withAuthentication = (permission = []) => AuthComponent =>
  class Auth extends Component {
    static async getInitialProps() {}

    constructor(props) {
      super(props);
      this.state = {
        isPublic: permission.indexOf("PUBLIC") !== -1,
        isLoggedIn: false
      };
    }

    componentDidMount() {
      const { user } = this.props;
      if (user.token) this.setState({ isLoggedIn: true });
    }

    render() {
      const { isPublic, isLoggedIn } = this.state;
      if (!isPublic && !isLoggedIn) {
        return (
          <>
            <p> you must login first </p>
          </>
        );
      } else {
        return (
          <>
            <p>{isPublic ? "public" : "private"} component</p>
            <AuthComponent {...this.props} />
          </>
        );
      }
    }

    propTypes = {
      user: PropTypes.object
    };
  };

const withAuth = (component, permission) =>
  compose(
    connect(state => ({
      user: state.user
    })),
    withAuthentication(component, permission)
  );

export default withAuth;
