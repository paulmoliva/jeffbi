import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SimpleNav from '../common/SimpleNav';
import routeConfig from '../../common/routeConfig';

/*
  This is the root component of your app. Here you define the overall layout
  and the container of the react router. The default one is a two columns layout.
  You should adjust it according to the requirement of your app.
*/
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: 'No content.',
  };

  render() {
    return (
      <div className="home-app">
        <div className="home-default-page">
          <div id="header">
            <div id="header-top">
              <div className="logo" />
              <h1>FEMALE BATHROOM INSPECTORS</h1>
            </div>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
