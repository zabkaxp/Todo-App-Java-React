import React, { Component } from "react";
import Authentication from "./Authentication";

class Login extends Component {
  state = {
    login: "",
    password: "",
    failureMessage: false
  };

  submmitLogin = () => {
    if (this.state.login === "marta" && this.state.password === "password") {
      Authentication.setLoginSession(this.state.login);
      this.props.history.push(`/`);

      window.location.reload();
    } else {
      this.setState({
        failureMessage: true
      });
    }
  };
  passwordChange = e => {
    this.setState({
      password: e.target.value,
      failureMessage: false
    });
  };
  loginChange = e => {
    this.setState({
      login: e.target.value,
      failureMessage: false
    });
  };
  render() {
    return (
      <div>
        <h2>Login to see your Todo list</h2>
        {this.state.failureMessage && (
          <div className="invalidMsg">
            Invalid login or password, please try again.{" "}
          </div>
        )}
        <form>
          <div>
            <label htmlFor="login">Username</label>
            <input
              value={this.state.login}
              onChange={this.loginChange}
              type="text"
              placeholder="Enter Username"
              name="login"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={this.state.password}
              onChange={this.passwordChange}
              type="password"
              placeholder="Enter Password"
              name="password"
              required
            />
          </div>
          <div>
            <button className="button" onClick={this.submmitLogin}>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
