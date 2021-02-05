import React, { Component } from 'react';
import Face from './face/Face'
import MycroftMessageBusSkillComponent from './mycroft_message_bus_elements/MycroftMessageBus';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Face />
        <MycroftMessageBusSkillComponent />
      </div>
    );
  }
}

export default App;
