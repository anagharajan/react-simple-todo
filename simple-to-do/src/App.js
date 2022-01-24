
import React, { Component } from 'react';
import './App.css';
import TodoList from './components/ListTodo';
import TodoAdd from './components/TodoAdd';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      singletodo: '',
      todoList: [],
      EditId: 0,
    };

  }

  handleSubmit =(e) =>  {
    e.preventDefault();

    if (this.state.EditId) {
      const todoedit = this.state.todoList.find(
        (todo) => todo.id === this.state.EditId
      );
      console.log("vall", this.state.singletodo )
      const itemtoedit = this.state.todoList.map((item) => 
        item.id === todoedit.id 
        ? (item = {id:item.id, value: this.state.singletodo})
        : {id:item.id, value: item.value}
      );
      console.log(itemtoedit)
      this.setState({ 
        todoList: [ ...itemtoedit ],
        singletodo: '',
        EditId: 0,
      });

      return;
    }

    if (this.state.singletodo !== "") {
      const newitem = {id: `${this.state.singletodo}-${Date.now()}`, value:this.state.singletodo}

      this.setState({ todoList: [ ...this.state.todoList, newitem ], singletodo: '' });
  }
  };

  handleChange = (e) => {
    this.setState({ singletodo: e.target.value});
    // console.log("on change", this.state.singletodo)
  };

  handleDelete = (id) => {
    const delItemtodo = this.state.todoList.filter(
      (todo) => todo.id !== id
    );
    this.setState({ todoList: [ ...delItemtodo ]});
  };

  handleUpdate = (id) => {
    const updateItemtodo = this.state.todoList.find(
      (todo) => todo.id === id
    );
    this.setState({ singletodo: updateItemtodo.value, EditId: id});
  };

  render () {
    return (
      <div className='App'>
        <div className='container'>
          TODO APP
          <TodoAdd 
            handleSubmit={this.handleSubmit} 
            singletodo={this.state.singletodo} 
            handleChange={this.handleChange} 
            EditId={this.state.EditId}
            />

          <TodoList 
            todoList={this.state.todoList}
            handleUpdate={this.handleUpdate}
            handleDelete={this.handleDelete}
          />

        </div>
      </div>
    );
  };
};

export default App;
