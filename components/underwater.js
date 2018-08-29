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

export default class Underwater extends React.Component {
  componentDidMount() {
    const { AudioModule } = NativeModules;
    AudioModule.playEnvironmental({
      source: asset('water_sounds.m4a'),
      volume: 1,
    });

    Environment.setBackgroundImage(asset('underwater.jpg'));
  }
  render() {
    return (
      <View />
    );
  }
};

// const styles = StyleSheet.create({
//   panel: {
//     // Fill the entire surface
//     width: 1000,
//     height: 600,
//     backgroundColor: 'rgba(255, 255, 255, 0.4)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   greetingBox: {
//     padding: 20,
//     backgroundColor: '#000000',
//     borderColor: '#639dda',
//     borderWidth: 2,
//   },
//   greeting: {
//     fontSize: 30,
//   },
// });

// AppRegistry.registerComponent('IslandEscape', () => IslandEscape);
