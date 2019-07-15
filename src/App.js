import React , {Component} from 'react';
import './App.css';
import './components/TodoItem';
import TodoItem from './components/TodoItem';


class App extends Component{

  constructor(){
    super();
    this.TodoLists = ['Test Case 1', 'Test Case 2', 'Test Case 3']; 
  }

  render(){
  return (
    <div className="App">
        <h2>Test Case</h2>
        {
          this.TodoLists.map((item, index) => <TodoItem key = {index} tittle = {item} />)
         }
      
    </div>
  );
}
}

export default App;
