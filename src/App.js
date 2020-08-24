import React, { Component } from "react";
import styling from "./App.module.css";
import ToDoList from "./components/ToDoList/ToDoList";
import Filter from "./components/Filter/Filter";
import NewTask from "./components/NewTask/NewTask";

class App extends Component {
  state = {
    tasks: [
      // { taskName: "buy eggs", done: false },
      // { taskName: "buy bread", done: false },
      // { taskName: "eat dinner", done: false },
      // { taskName: "get a job", done: false },
    ],
    newTask: {
      taskName: "",
    },
    hide: false,
  };

  inputChangeHandler = (task) => {
    this.setState({ newTask: { taskName: task.target.value } });
  };

  addTaskHandler = () => {
    const newTask = this.state.newTask.taskName;
    if (!newTask == "") {
      this.setState({
        tasks: [...this.state.tasks, { taskName: newTask, done: false }],
        newTask: { taskName: "" }
      });
    }
  };

  addTaskOnEnterHandler = (e) => {
    if (e.key === "Enter") {
      this.addTaskHandler();
    }
  };

  checkTaskHandler = (taskName) => {
    const updateState = [...this.state.tasks];
    updateState.forEach((task) => {
      if (task.taskName === taskName) {
        if (task.done === false) {
          task.done = true;
        } else {
          task.done = false;
        }
      }
    });
    this.setState({ tasks: updateState });
  };

  hideDoneTasksHandler = () => {
    this.setState(prevState => {
      return { hide: !prevState.hide }
    })
  }

  clearListHandler = () => {
    this.setState({tasks:[]})
  }

  render() {
    const isTaskExist = this.state.tasks.length;

    window.addEventListener("keyup", this.addTaskOnEnterHandler);

    return (
      <div className={styling.App}>
        <Filter ifDone={this.hideDoneTasksHandler} clearList={this.clearListHandler}/>
        <hr />
        {isTaskExist ? (
          <ToDoList tasks={this.state.tasks} check={this.checkTaskHandler} ifHide={this.state.hide}/>
        ) : (
          <p style={{fontSize:'2rem'}}>Nothing to do...</p>
        )}
        <hr />
        <NewTask
          inputChange={this.inputChangeHandler}
          addTask={this.addTaskHandler}
          inputValue={this.state.newTask.taskName}
        />
      </div>
    );
  }
}

export default App;
