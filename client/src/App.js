import React from 'react';
import { Provider } from "react-redux";
import './App.css';
import Landing from './components/Landing';
import store from './redux/store';
import { Route, BrowserRouter as Router }  from 'react-router-dom';
import AddTask from './components/AddTask';
import Navbar from './components/Navbar';
import View from './components/View';



function App() {
  return (
   < Provider store={store}>
   <Router>
    <div className="App">
    <Navbar/>
    <Route exact path="/" component={Landing} />
    <Route path='/view/:id' component={View}/>
    <Route path='/create' component={AddTask}/>
    </div>
   </Router>
   
    </Provider>
  
  );
}

export default App;
