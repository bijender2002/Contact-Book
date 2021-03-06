import React from 'react';
import './App.scss';
import ContactTable from './Components/ContactTable';
import Navbar from './Components/Navbar';
import { Provider } from 'react-redux';
// import store from './Components/Store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddContact from './Components/AddContact';
// import BookContainer from './Container/BookContainer';
// import store from './Components/ReduxTutorial/IceStore';
// import store from './Components/ReduxTutorial/AsynThunk';
// import store from './Redux/Book/Store';
// import HookBookCon from './Container/HookBookCon';
import LaptopCon from './Project/LaptopCon';
import store from './Project/Redux/Store'
function App(props) {
  return (
    // <Provider store={store}>
    //   <Router>
    //     <div className="App">
    //       <Navbar />
    //       <Switch>
    //         <Route exact path="/" component={ContactTable} />
    //         <Route exact path="/contacts/add" component={AddContact} />
    //       </Switch>
    //     </div>
    //   </Router>
    // </Provider>
    <Provider store={store}>
      <div>
        {/* <BookContainer /> */}
        {/* <HookBookCon/> */}
        <LaptopCon/>
      </div>
    </Provider>

  );
}

export default App;
