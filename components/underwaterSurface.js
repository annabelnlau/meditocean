import React from 'react';

import {
  View,
  StyleSheet,
  VrButton,
} from 'react-360';

import Underwater from './underwater';

export default class UnderwaterSurface extends React.Component {
  state = {
    clicked: false,
  }

  handleClick = () => {
    this.setState({ clicked: true });
  };

  render() {
    return (
      <VrButton onClick={this.handleClick}>
        <View style={styles.oppositeView}>
          {this.state.clicked ? <Underwater /> : <View />}
        </View>
      </VrButton>
    );
  }
};

const styles = StyleSheet.create({
  oppositeView: {
    width: 15000,
    height: 3000,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
