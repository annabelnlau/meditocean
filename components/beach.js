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
import UnderwaterEntry from './underwaterEntry';

export default class Beach extends React.Component {
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

    componentDidMount() {
        const { AudioModule } = NativeModules;
        AudioModule.playEnvironmental({
            source: asset('beach_waves.mp3'),
            volume: 2,
        });
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
                    {/* <Seagull /> */}
                    {/* <UnderwaterEntry /> */}
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
                    {/* <Seagull /> */}
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