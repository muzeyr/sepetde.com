import React from 'react';
import HomePage from './pages/homapage/homepage.component';
import {Route} from 'react-router-dom';

const HatsPage = ()=>(
  <div>
    <h1>hats page</h1>
  </div>
);
function App() {
  return (
    <div className="App">
      <HomePage />
      <Route exact path="/" component={HomePage} />
    </div>
  );
}

export default App;
