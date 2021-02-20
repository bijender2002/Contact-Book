import React from 'react';
import './App.scss';
import ContactTable from './Components/ContactTable';
import Navbar from './Components/Navbar';
import { Provider } from 'react-redux';
import store from './Components/Store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddContact from './Components/AddContact';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={ContactTable} />
            <Route exact path="/contacts/add" component={AddContact} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
