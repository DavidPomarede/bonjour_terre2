import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Greet from './components/Greet'
//import Welcome from './components/Welcome'
//import Hello from './components/Hello'
//import Message from './components/Message'
// import Counter from './components/Counter'
//import FunctionClick from './components/FunctionClick'
// import EventBind from './components/EventBind'
// import UserGreeting from './components/UserGreeting'
// import UserGreeting from './components/UserGreeting'
// import NameList from './components/NameList'
// import PersonList from './components/PersonList'
// import Form from './components/Form'
import Stylesheets from './components/Stylesheets'

class App extends Component {
  render() {
    return (
    <div className="App">


        <Stylesheets primary={true} />

        {/* <UserGreeting /> */}

       {/* <Counter />*/}

      {/* <UserGreeting /> */}
      {/* <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman">
      
      </Greet>

      <Welcome name="Bruce II" heroName="Batman II" />
      <Message /> */}

    </div>
    );
  }
}

export default App;
