import React, { Component } from 'react';
import Face from './face/face'
import MycroftMessageBusSkillComponent from './mycroft_message_bus_elements/mycroft_message_bus';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

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
