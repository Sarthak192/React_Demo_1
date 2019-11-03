import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons :[
      {name: "Sarthak", age: 22},
      {name: "Somil", age: 23},
      {name: "Sarita", age: 24}
    ],
    Hobby: "cricket",
    showPersons: false
  }

  switchNameHandler = (newName)=>{
    //Dont Use This :----- this.state.persons[0].name = "Abhay"
    this.setState({
      persons :[
        {name: newName, age: 22},
        {name: "Somil", age: 23},
        {name: "Sarita", age: 24}
      ]
    })
  }

  nameChangeHandler = (event)=>{
    this.setState({
      persons :[
        {name: 'Sarthak', age: 22},
        {name: event.target.value, age: 23},
        {name: "Sarita", age: 24}
      ]
    })
  }

  toggleHandler = ()=>{
    const condition = this.state.showPersons
    this.setState({showPersons: !condition})
  }

  style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  render(){
  return (
    <div className="App">
      <h1>Angular-Demo-1</h1>
      <h1>I am a React App</h1>
      <p>This is really working</p>
      <button style = {this.style} onClick={()=> this.switchNameHandler('Abhay')}>Switch Name</button>
      <button style = {this.style} onClick={this.toggleHandler}>Toggle</button>
      { this.state.showPersons ?
      <div>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}/>
        <Person   
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          clickMe = {this.switchNameHandler.bind(this, 'Abhay!!!')}
          changed = {this.nameChangeHandler}
          >My Hobby is playing cricket</Person>
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}/>
      </div> : null
      }
    </div>

    // React.createElement('div', {className: 'App'}, React.createElement('h1', null,'I am a React App'))
  );
}
}

export default App;


