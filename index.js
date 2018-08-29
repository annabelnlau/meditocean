import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  NativeModules,
  VrButton,
} from 'react-360';

// Components
import Beach from './components/beach';

export default class RatherBeHere extends React.Component {
  render() {
    return (
        <Beach />
    );
  }
};

AppRegistry.registerComponent('RatherBeHere', () => RatherBeHere);
