import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Review from '../Review/Review';
import Comments from '../Comments/Comments';
import Thanks from '../Thanks/Thanks';
import Admin from '../Admin/Admin';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Route exact path="/" component={Feeling} />
        <Route exact path="/understanding" component={Understanding} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/thanks" component={Thanks} />
        {/* <Route exact path="/admin" component={Admin} /> */}
      </div>
      </Router>
    );
  }
}

export default App;
