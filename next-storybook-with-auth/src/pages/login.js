import React, { Component } from "react";
import { compose } from "redux";
import withAuth from "../components/_hoc/withAuth";

class Login extends Component {
  render() {
    return <div>Halaman login</div>;
  }
}

export default compose(withAuth(["PUBLIC"]))(Login);
