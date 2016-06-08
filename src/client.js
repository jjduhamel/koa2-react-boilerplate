import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router';

class Homepage extends Component {
  render() {
    return <div>Homepage</div>;
  }
}

class AboutPage extends Component {
  render() {
    return <div>About</div>;
  }
}

export class Client extends Component {
  render() {
    return (
      <div>
        { this.props.children || 'Hello React!' }
      </div>
    );
  }
}

export const Routes = (
  <Route component={ Client }>
    <Route path='/' component={ Homepage } />
    <Route path='/about' component={ AboutPage } />
  </Route>
);
