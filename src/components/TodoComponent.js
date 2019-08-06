import React, { Component } from "react";
import moment from "moment";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TodoDataService from "../TodoDataService";
import Authentication from "./Authentication";

class TodoComponent extends Component {
  state = {
    id: this.props.match.params.id,
    description: "",
    targetDate: moment(new Date()).format("YYYY-MM-DD")
  };

  onSubmit = values => {
    let username = Authentication.getUsername();

    if (this.getSnapshotBeforeUpdate.id === -1) {
      TodoDataService.createTodo(username, {
        id: this.state.id,
        description: values.description,
        targetDate: values.targetDate
      }).then(() => this.props.history.push("/todos"));
    } else {
      TodoDataService.updateTodo(username, this.state.id, {
        id: this.state.id,
        description: values.description,
        targetDate: values.targetDate
      }).then(() => this.props.history.push("/todos"));
    }
  };

  componentDidMount() {
    let username = Authentication.getUsername();
    TodoDataService.retrieveTodo(username, this.state.id).then(response =>
      this.setState({
        description: response.data.description,
        targetDate: moment(response.data.targetDate).format("YYYY-MM-DD")
      })
    );
  }

  render() {
    let { description, targetDate } = this.state;
    return (
      <div>
        <h1>Todo</h1>
        <div className="container">
          <Formik
            initialValues={{ description, targetDate }}
            onSubmit={this.onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            //validate={this.validate}
            enableReinitialize={true}
          >
            {props => (
              <Form>
                <ErrorMessage name="description" component="div" />
                <ErrorMessage name="targetDate" component="div" />
                <fieldset>
                  <label>Description</label>
                  <Field type="text" name="description" />
                </fieldset>
                <fieldset>
                  <label>Target Date</label>
                  <Field type="date" name="targetDate" />
                </fieldset>
                <button type="submit">Save</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default TodoComponent;
