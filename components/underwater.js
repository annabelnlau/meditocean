import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  NativeModules,
  Environment
} from 'react-360';

import Relax from './relax';

export default class Underwater extends React.Component {

  componentDidMount() {
    this.setState({beachElementsVisible: false})
    const { AudioModule } = NativeModules;
    AudioModule.playEnvironmental({
      source: asset('water_sounds.m4a'),
      volume: 1,
    });

    Environment.setBackgroundImage(asset('underwater.jpg'));
  }
  render() {
    return (
      <Relax />
    );
  }
};

