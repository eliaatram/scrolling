import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './Components/HomePage';

class RouterNavigationSample extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <HomePage {...props} />} />
        </Switch>
      </Router>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RouterNavigationSample />, rootElement);


