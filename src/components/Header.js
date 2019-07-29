import React, { Component } from "react";

import { Link } from "react-router-dom";
import "../App.css";
import Authentication from "./Authentication";

class Header extends Component {
  render() {
    const loggedIn = Authentication.isUserLoggedin();
    console.log(loggedIn);
    return (
      <div className="header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>{loggedIn && <Link to="/todos">Todos</Link>}</li>
        </ul>
        <ul>
          <li>
            {!loggedIn && <Link to="/login">Login</Link>}

            {loggedIn && (
              <Link to="/logout" onClick={Authentication.logout}>
                Logout
              </Link>
            )}
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
