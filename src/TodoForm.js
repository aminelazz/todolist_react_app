import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.css'
import TodoItem from './TodoItem';
import React from 'react';

class TodoForm extends React.Component{  

  constructor(props){
    super(props); 
    this.state ={
      todoTitle:"",
      todoDueDate:"",
      todoCompleted:false
    } 


    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInputChange(event){
    const target = event.target;
    const value = target.name === 'todoCompleted' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]:value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const todo = {
      title: this.state.todoTitle,
      completed: (new Date(this.state.todoCompleted)).getTime(),
      duedate: this.state.todoDueDate
    }
    const url_post=`http://localhost:3300/todos/`
    fetch(url_post, {
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
    .then(res => console.log(res));

    console.log(this.state);  
  }

  render(){
   const formValue = this.state;
    return (
      <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Todo Title"  
              id="todoTitle"  name="todoTitle"
              type="text" className="validate" 
              value={formValue.todoList}
              onChange={this.handleInputChange}/>      
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Todo DueDate"  
              id="todoDueDate" name="todoDueDate"
              type="date" className="validate"
              value={formValue.todoDueDate} 
              onChange={this.handleInputChange}/>      
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
            <label>
        <input type="checkbox" className="filled-in" 
        id="todoCompleted" name="todoCompleted"
        checked={formValue.todoCompleted} 
        onChange={this.handleInputChange}/>
        <span>checked</span>
      </label>      
            </div>
          </div>

          <div className="row">
          <button className="btn waves-effect waves-light" 
          type="submit" name="action">Add
  </button>

          </div>
      </form>
    );

  }
}


export default TodoForm;
