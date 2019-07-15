import React , {Component} from 'react';
import './App.css';
import './components/TodoItem';
import TodoItem from './components/TodoItem';
import './components/TodoItem.css';

import TrafficLight from './components/TrafficLight'



class App extends Component{

  
  constructor(){
    super();
    this.TodoLists = [
      {tittle : 'Test Case 1' , isComplete : true, isSelected: false}, 
      {tittle : 'Test Case 2', isSelected: false}, 
      {tittle : 'Test Case 3', isSelected: false}
    ]; 
  }

  render(){
  return (
    <div className="App">
        <h2>Test Case</h2>
        {
          this.TodoLists.length > 0 && this.TodoLists.map((item, index) => <TodoItem key = {index} item = {item} />)
        }
         {
          this.TodoLists.length === 0 && 'Nothing in here' 
         }

         <TrafficLight />
      
    </div>
  );
}
}

export default App;
