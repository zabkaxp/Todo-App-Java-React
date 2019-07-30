import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class Authentication extends Component {
  setLoginSession = login => {
    sessionStorage.setItem("AuthenticatedUser", login);
  };

  logout() {
    sessionStorage.removeItem("AuthenticatedUser");
    window.location.reload();
  }

  isUserLoggedin = () => {
    let user = sessionStorage.getItem("AuthenticatedUser");
    if (user === null) {
      return false;
    } else {
      return true;
    }
  };
}

export default new Authentication();
