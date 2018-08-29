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

export default class Beach extends React.Component {
    state = {
        buttonClicked: false,
    }

    handleClick = () => {
        this.setState({ buttonClicked: true });
    };

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
                <VrButton onClick={this.handleClick}>
                <View>
                <Image style={{width: 150, height: 150, transform: [{ translate: [10, -300, 0] }] }} source={asset('transparent_box.png')} />
              </View>
                </VrButton>
                {this.state.buttonClicked ? <Underwater /> : <View />}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: 2000,
        height: 2000,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greetingBox: {
        padding: 100,
        width: 500,
        height: 500,

        // backgroundColor: '#000000',
        // borderColor: '#639dda',
        // borderWidth: 2,
    },
    greeting: {
        fontSize: 30,
    },
});