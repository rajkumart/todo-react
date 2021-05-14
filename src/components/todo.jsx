import React, { Component } from "react";
import AddTask from "./add-task";
import Task from "./task";
import TaskStatus from "./task-status";
import nexId from "react-id-generator";

class Todo extends Component {
  state = { tasks: [] };
  createTask = (name) => {
    if (!name) return;
    const state = { ...this.state };
    state.tasks.push({
      id: nexId(),
      name,
      isComplete: false,
    });
    this.setState(state);
  };
  markComplete = (taskId, isChecked) => {
    const tasks = this.state.tasks.map((task) => {
      if (task.id === taskId) task.isComplete = !task.isComplete;
      return task;
    });
    this.setState({ tasks });
  };
  deleteTask = (taskId) => {
    const tasks = this.state.tasks.filter((task) => task.id !== taskId);
    this.setState({ tasks });
  };
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <h1 className="text-center">TODO List</h1>
        </div>
        <div className="tasks">
          <AddTask createTask={this.createTask} />
          <ul className="list-group">
            {this.state.tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onComplete={this.markComplete}
                onDelete={this.deleteTask}
              />
            ))}
          </ul>
        </div>
        <div className="footer">
          <TaskStatus tasks={this.state.tasks} />
        </div>
      </React.Fragment>
    );
  }
}

export default Todo;
