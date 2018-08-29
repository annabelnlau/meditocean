import React from 'react';

import {
  StyleSheet,
  View,
  asset,
  NativeModules,
} from 'react-360';

// Components
import Beach from './relax';
import UnderwaterSurface from './underwaterSurface';

export default class Main extends React.Component {
  componentDidMount() {
    const { AudioModule } = NativeModules;
    AudioModule.playEnvironmental({
      source: asset('beach_waves.mp3'),
      volume: 2,
    });
  }
  render() {
    return (
        <Beach />
    );
  }
};