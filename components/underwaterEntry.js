import React from 'react';
import {Surface} from 'react-360-web';

import {
    View,
    asset,
    Image,
    StyleSheet,
    Text,
} from 'react-360';

// To rotate a panel 90 degrees to your left:


export default class UnderwaterEntry extends React.Component {
    render() {
        return (
        
            <View style={styles.oppositeView}>
            <Text>HEYYYYYYYYY</Text>
               {/* <Image 
                  style={{width: 100, height: 100, transform: [{ translate: [-300, 300, 0] }] }} 
                  source={asset('seagull.png')} 
                /> */}
            </View>

        );
    }
};

const styles = StyleSheet.create({
  oppositeView: {
      //transform: [{ translate: [500, -500, 0] }, {rotateY: -260}],
      width: 10000,
      height: 3000,
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
  }
});
