import React from 'react';
import HomePage from './pages/homapage/homepage.component';
import { Switch,Route} from 'react-router-dom';

const HatsPage = ()=>(
  <div>
    <h1>hats page</h1>
  </div>
);
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
  
      </Switch>
    </div>
  );
}

export default App;
