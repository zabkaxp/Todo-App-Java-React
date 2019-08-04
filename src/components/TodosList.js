import React, { Component } from "react";
import Authentication from "./Authentication";
import TodoDataService from "../TodoDataService";
import moment from "moment";

class TodosList extends Component {
  state = {
    todos: [],
    message: ""
  };

  componentDidMount() {
    this.refreshTodos();
  }

  deleteTodoClicked(id) {
    let username = Authentication.getUsername();

    TodoDataService.deleteTodo(username, id).then(response => {
      this.setState({
        message: `The task of id ${id} was successfully deleted`
      });
      this.refreshTodos();
    });
  }
  editTodoClicked(id) {
    this.props.history.push(`/todos/${id}`);
  }

  refreshTodos() {
    let username = Authentication.getUsername();

    TodoDataService.retrieveAllTodos(username).then(response => {
      console.log(response.data);
      this.setState({ todos: response.data });
    });
  }
  render() {
    return (
      <div>
        {this.state.message && (
          <div className="invalidMsg">{this.state.message}</div>
        )}
        <ul>
          <li>Description</li>
          <li>Target date</li>
          <li>Completed?</li>
          <li>Action </li>
          <li>Action </li>
        </ul>
        {this.state.todos.map(task => (
          <ul key={task.id} className="item-ul">
            <li>{task.description}</li>
            <li>{moment(task.targetDate).format("YYYY-MM-DD")}</li>
            <li>{task.done.toString()}</li>
            <li>
              <button
                className="btn-ylw"
                onClick={() => this.editTodoClicked(task.id)}
              >
                Edit
              </button>
            </li>
            <li>
              <button
                className="btn-red"
                onClick={() => this.deleteTodoClicked(task.id)}
              >
                Delete
              </button>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default TodosList;
