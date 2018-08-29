import React from 'react';

import {
  View,
  StyleSheet,
  VrButton,
} from 'react-360';

import Main from './main';

export default class AboveWaterSurface extends React.Component {
  state = {
    buttonClicked: false,
  }

  handleThisClick = () => {
    this.setState({ buttonClicked: true });
  };

  render() {
    return (
      <VrButton onClick={this.handleThisClick}>
        <View style={styles.oppositeView}>
          {this.state.buttonClicked ? <Main /> : <View />}
        </View>
      </VrButton>
    );
  }
};

const styles = StyleSheet.create({
  oppositeView: {
    width: 15000,
    height: 3000,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
