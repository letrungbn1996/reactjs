import React, { Component } from 'react';
import './App.css';
import './components/TodoItem';
import TodoItem from './components/TodoItem';
import './components/TodoItem.css';

import TrafficLight from './components/TrafficLight'



class App extends Component {


  constructor() {
    super();
    this.state = {
      newItem : '',
      todoItems: [
        { tittle: 'Test Case 1', isCompleted: true, isSelected: false },
        { tittle: 'Test Case 2', isCompleted: true, isSelected: false },
        { tittle: 'Test Case 3', isCompleted: true, isSelected: false }
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onItemClicked(item) {
    console.log('Item click');
    return (event) => {
      //const { toDoLists } = this.state;
      //const isCompleted = item.isCompleted;
      // const index = toDoLists.indexOf(item);
      console.log(item)
      this.setState({
        todoItems: this.state.todoItems.map(i => i !== item ? {...i} : {...i, isCompleted: !item.isCompleted})

      });

    };

  }
  onKeyUp(event){
    if(event.keyCode === 13){
    let text = event.target.value;
    if(!text){
      return;
    }

    
      this.setState({
        newItem : '',
        todoItems: [
          {tittle : text, isCompleted : false},
          ...this.state.todoItems
        ]
      });
    }
  }
  onChange(event){
    this.setState({
      newItem : event.target.value

    })
  }

  render() {
    const { newItem} = this.state;
    return (
      <div className="App">
        <h2>Test Case</h2>

        <div className="Header">
          <input type="text" 
                  placeholder = "Add new item" 
                  value = {newItem}
                  onChange = {this.onChange}
                  onKeyUp= {this.onKeyUp}/>
          
        </div>
        {
          this.state.todoItems.length > 0 && this.state.todoItems.map((item, index) => <TodoItem key={index} item={item} onClick={this.onItemClicked(item)} />)
        }
        {
          this.state.todoItems.length === 0 && 'Nothing in here'
        }
        

        <TrafficLight />

      </div>
    );
  }
}

export default App;
