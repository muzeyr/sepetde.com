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
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;
