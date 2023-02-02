import React, {Component} from 'react';
import './App.css';

class App extends Component {
 constructor() {
  super();
  this.state = {

  }
 }

 render() {
  return (
    <div>
      <Form />
      <Movies />
      <SingleMovie />
    </div>
  )
 }
  
}

export default App;
