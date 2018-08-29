import React from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    asset,
    NativeModules,
    VrButton,
    Image,
} from 'react-360';

// Components
import Underwater from './underwater';
import Seagull from './seagull';
import UnderwaterSurface from './underwaterSurface';
import Breathe from './breathe';

export default class Beach extends React.Component {
    componentDidMount() {
        const { AudioModule } = NativeModules;
        AudioModule.playEnvironmental({
            source: asset('beach_waves.mp3'),
            volume: 2,
        });
    }
    render() {
        return (
            <View>
                <Breathe />
                <Seagull />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: 1000,
        height: 600,
        //backgroundColor: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
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


{/* <View>
<VrButton onClick={this.handleClick}>
<View>
<Image style={{width: 150, height: 150, transform: [{ translate: [10, -300, 0] }] }} source={asset('transparent_box.png')} />
</View>
</VrButton>
{this.state.buttonClicked ? <Underwater /> : <View />}
</View> */}