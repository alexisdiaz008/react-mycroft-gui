import React, { Component } from 'react';
import Face from './face'
import MycroftMessageBusSkillComponent from './mycroft_message_bus_elements/mycroft_message_bus';
import './app.css';

class App extends Component {	
  render() {
    return (
      <div className="App">
        <Face />
        <MycroftMessageBusSkillComponent />
      </div>
    );
  }
}

export default App;
