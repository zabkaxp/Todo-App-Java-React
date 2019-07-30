import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Welcome from "./Welcome";
import Login from "./Login";
import Logout from "./Logout";
import ErrorPage from "./ErrorPage.js";
import AddTodo from "./AddTodo";
import TodosList from "./TodosList.js";
import AuthenticatedRoute from "./AuthenticatedRoute";

const TodoApp = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <AuthenticatedRoute path="/todos" component={TodosList} />
          <AuthenticatedRoute path="/todos:id" component={AddTodo} />
          <AuthenticatedRoute path="/logout" component={Logout} />
          <Route path="/" component={Welcome} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default TodoApp;
