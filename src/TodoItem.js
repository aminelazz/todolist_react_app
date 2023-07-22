import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.css'

function TodoItem(props) {
  const todo = props.todo
  return (
  <tr className={todo.completed?"blue":"green"}>
    <td>{todo.id}</td>
    <td>{todo.title}</td>
    <td>{todo.completed?"done":"not done"}</td>
    <td>{todo.duedate}</td>
    <td>
      <button onClick={_ => props.onDelete(todo)} 
      className='waves-effect waves-light btn-small red'>delete</button>
    </td>
  </tr>
  );
}


export default TodoItem;
