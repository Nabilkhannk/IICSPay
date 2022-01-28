import React from 'react';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import About from './components/Pages/About';
import Service from './components/Pages/Service';
import Error from './components/Pages/Error';
import ContactUs from './components/Pages/ContactUs';

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={ContactUs}></Route>
      <Route path="/service" component={Service}></Route>
      <Route component={Error}></Route>
    </Switch>
    </>
  );
}

export default App;
