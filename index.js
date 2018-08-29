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
import UnderwaterSurface from './components/underwaterSurface';
import Seagull from './components/seagull';

export default class RatherBeHere extends React.Component {
  render() {
    return (
      <Beach />
    );
  }
};

AppRegistry.registerComponent('RatherBeHere', () => RatherBeHere);
AppRegistry.registerComponent('UnderwaterSurface', () => UnderwaterSurface);