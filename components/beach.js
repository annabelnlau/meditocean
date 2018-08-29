import React from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    asset,
    NativeModules,
    VrButton,
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
            volume: 1, // play at 3/10 original volume
        });
        console.log(AudioModule, "AUDIO MODULE")
    }
    render() {
        return (
            <View>
                <VrButton onClick={this.handleClick}>
                    <Text>
                        Click
                    </Text>
                </VrButton>
                {this.state.buttonClicked ? <Underwater /> : <View />}
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
    greetingBox: {
        padding: 20,
        backgroundColor: '#000000',
        borderColor: '#639dda',
        borderWidth: 2,
    },
    greeting: {
        fontSize: 30,
    },
});