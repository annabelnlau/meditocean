import React from 'react';

import {
  View,
  StyleSheet,
  VrButton,
} from 'react-360';

import Underwater from './underwater';

export default class UnderwaterSurface extends React.Component {
  state = {
    buttonClicked: false,
  }

  handleClick = () => {
    this.setState({ buttonClicked: true });
  };

  render() {
    return (
      <VrButton onClick={this.handleClick}>
        <View style={styles.oppositeView}>
          {this.state.buttonClicked ? <Underwater /> : <View />}
        </View>
      </VrButton>

    );
  }
};

const styles = StyleSheet.create({
  oppositeView: {
    //transform: [{ translate: [500, -500, 0] }, {rotateY: -260}],
    width: 10000,
    height: 3000,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
