import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Authentication from "./Authentication";

class AuthenticatedRoute extends Component {
  render() {
    const loggedIn = () => Authentication.isUserLoggedin;
    if (loggedIn) {
      return (
        <div>
          {" "}
          <Route {...this.props} />
        </div>
      );
    } else {
      return (
        <div>
          <Redirect to="/login" />
        </div>
      );
    }
  }
}

export default AuthenticatedRoute;
