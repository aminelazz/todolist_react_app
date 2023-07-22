import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.css'
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  return (
    <div>
      <h1>TodoList App</h1>

      <div className="row">
      <div className="col s6">
        <TodoList></TodoList>
      </div>
      <div className="col s6">
        <TodoForm></TodoForm>
      </div>
    </div>
    </div>
  )
}


export default App;
