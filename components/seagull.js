import React from 'react';

import {
    View,
    asset,
    Image,
    StyleSheet
} from 'react-360';

export default class Seagull extends React.Component {
    render() {
        return (
        
            <View style={styles.panel}>
               <Image 
                  style={{width: 100, height: 100, transform: [{ translate: [-300, 300, 0] }] }} 
                  source={asset('seagull.png')} 
                />
            </View>

        );
    }
};

const styles = StyleSheet.create({
  panel: {
      // Fill the entire surface
      width: 1000,
      height: 600,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      justifyContent: 'center',
      alignItems: 'center',
  },
  // greetingBox: {
  //     //   padding: 100,
  //     // backgroundColor: '#000000',
  //     borderColor: '#639dda',
  //     borderWidth: 2,
  //     //   fontSize: 1000,
  // },
  greeting: {
      fontSize: 180,
      color: 'rgb(5, 93, 119)',
       justifyContent: 'center',
      alignItems: 'center',
  },
  viewStandard: {
      // width: 10000,
      // height: 10000,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: 'rgba(255, 280, 255, 0.4)',
  }
});
