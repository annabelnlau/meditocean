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
      source: asset('underwater_sound_trimmed.mp3'),
      volume: 0.3, // play at 3/10 original volume
    });

    Environment.setBackgroundImage(asset('underwater.jpg'));
  }
  render() {
    return (
      <Text>
      Hi from Underwater
      </Text>
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
