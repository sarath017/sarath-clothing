import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage';

// Router

// history = Push
// match = url
// location = pathname(full URL)

// Router

const HatPage = () => (
  <div>
    <h1>Hat Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
