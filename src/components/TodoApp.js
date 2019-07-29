import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Welcome from "./Welcome";
import Login from "./Login";
import Logout from "./Logout";
import ErrorPage from "./ErrorPage.js";
import EditTodo from "./EditTodo";
import TodosList from "./TodosList.js";

const TodoApp = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/todos" component={TodosList} />
          <Route path="/todos:id" component={EditTodo} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={Welcome} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default TodoApp;
