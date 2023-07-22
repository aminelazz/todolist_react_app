import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.css'
import TodoItem from './TodoItem';
import React from 'react';

class TodoList extends React.Component{  

  constructor(props){
    super(props);
    this.state={
      todos:[]
    }

    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo(todo){
    const url_delete=`http://localhost:3300/todos/${todo.id}`
    fetch(url_delete, {method:'DELETE'})
    .then(_ => this.loadTodos())
  }

  loadTodos(){
    fetch('http://localhost:3300/todos')
    .then(response => response.json())
    .then(data => this.setState({todos:data}))
  }

  componentDidMount(){
    fetch('http://localhost:3300/todos')
    .then(response => response.json())
    .then(data => this.setState({todos:data}))
  }

  render(){
    console.log(this.state.todos);
    const todos = this.state.todos;
  return (
  <div >
    <h1>TodoList</h1>
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>title</td>
          <td>completed</td>
          <td>dueDate</td>
        </tr>
      
      </thead>
      <tbody>
        {todos.map(todo => <TodoItem key={todo.id} todo={todo} onDelete = {this.deleteTodo}/>)}
      </tbody>
    </table>
    
    </div>
  );
  }
}


export default TodoList;
