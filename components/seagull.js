import React from 'react';

import {
    View,
    asset,
    Image,
} from 'react-360';

export default class Seagull extends React.Component {
    render() {
        return (
        
            <View>
               <Image 
                  style={{width: 150, height: 150, transform: [{ translate: [-300, 300, 0] }] }} 
                  source={asset('seagull.png')} 
                />
            </View>

        );
    }
};