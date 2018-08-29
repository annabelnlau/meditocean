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

export default class Breathe extends React.Component {
    state = {
        buttonClicked: false,
        seconds: 61,
    }

    handleClick = () => {
        this.setState({ buttonClicked: true });
        this.decrementClock()
        this.interval = setInterval(this.decrementClock, 1000);
    };

    decrementClock = () => {
        this.setState({ seconds: this.state.seconds - 1 });
        if (this.state.seconds <= 0) {
            clearInterval(this.interval);
            this.setState({ buttonClicked: false });
        }
    }

    resetTimer = () => {
        this.setState({ buttonClicked: false, seconds: 5 })
    }

    render() {
        return (
            !this.state.buttonClicked ?
                <View style={styles.panel}>
                    <View style={styles.greetingBox}>
                        <VrButton onClick={this.handleClick}>
                            <Text style={styles.greeting}>
                                Breathe
                            </Text>
                        </VrButton>
                    </View>
                </View>
                :
                <View style={styles.panel}>
                    <View>
                        <VrButton>
                            <Text style={styles.greeting}>
                                {this.state.seconds}
                            </Text>
                        </VrButton>
                    </View>
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
});