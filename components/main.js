import React from 'react';

import {
  asset,
  NativeModules,
  Environment,
} from 'react-360';

// Components
import Relax from './relax';

export default class Main extends React.Component {
  componentDidMount() {
    const { AudioModule } = NativeModules;
    AudioModule.playEnvironmental({
      source: asset('beach_waves.mp3'),
      volume: 2,
    });
    Environment.setBackgroundImage(asset('beach_view.jpg'));
  }

  render() {
    return (
        <Relax />
    );
  }
};