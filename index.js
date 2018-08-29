import React from 'react';

import {
  AppRegistry,
} from 'react-360';

// Components
import UnderwaterSurface from './components/underwaterSurface';
import Main from './components/main';
import AboveWaterSurface from './components/aboveWaterSurface';

export default class RatherBeHere extends React.Component {
  render() {
    return (
      <Main />
    );
  }
};

AppRegistry.registerComponent('RatherBeHere', () => RatherBeHere);
AppRegistry.registerComponent('UnderwaterSurface', () => UnderwaterSurface);
AppRegistry.registerComponent('AboveWaterSurface', () => AboveWaterSurface);