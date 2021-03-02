import React, { Component } from 'react';
import { Provider } from "react-redux";
import { Store } from './store/Store';

import './App.css';
import UserForm from './components/UserForm';

class App extends Component {

  
  
  render() {
    return (
      <Provider store={Store}>
        <div className="col-lg-8 mx-auto text-center mt-5">
          <h1>Resume builder</h1>
          <p className="lead">Please provide accurate and clear description wherever necessary.</p>
          <hr />
        </div>  
        <UserForm/>
      </Provider>
    );
  }
}

export default App;
