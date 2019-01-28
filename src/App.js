import React, { Component } from 'react';
import TodoList from './components/todoList';
import TodoForm from './components/todoForm'
import TodoService from './services/todoService'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    todoList: []
  }

  componentDidMount () {
    TodoService.getTodoList()
    .then(todoList => {
      this.setState({todoList})
    })
  }

  handleTodoRemove = (id) => {
    const newTodoList = this.state.todoList.filter(todo => todo._id !== id);
    this.setState({todoList: newTodoList})
    // other way to do this is call getTodoList and fetch the todoList again
    // TodoService.getTodoList()
    // .then(todoList => {
    //   this.setState({todoList})
    // })
  }

  handleTodoAdd = (todo) => {
    this.setState({todoList: [...this.state.todoList, todo]})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <br /><br /><br />
        <TodoForm onTodoSubmitted={this.handleTodoAdd}/>
        <TodoList onTodoRemoved={this.handleTodoRemove} todoList={this.state.todoList}/>
      </div>
    );
  }
}

export default App;
