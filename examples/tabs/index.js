import React, { Component } from 'react';

import { Navigation, Router, Scene } from '../../lib';

import Home from './home';
import Page from './page';

import TabComponent from './tabBar/tabBar';

const navigation = (
  <Navigation tabComponent={TabComponent}>
    <Scene root key="home" component={Home} />
    <Scene root key="page" component={Page} headerContainerStyle={{ backgroundColor: 'pink' }} />
  </Navigation>
);

class Root extends Component {
  render() {
    return (
      <Router onNavigate={this._navEvent} navigation={navigation} />
    );
  }
}

export default Root;
