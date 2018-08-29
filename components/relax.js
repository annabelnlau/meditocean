import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    VrButton,
} from 'react-360';

export default class Relax extends React.Component {
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

    render() {
        return (
            !this.state.buttonClicked ?
                <View style={styles.panel}>
                    <VrButton onClick={this.handleClick}>
                        <Text style={styles.greeting}>
                            Relax
                            </Text>
                    </VrButton>
                </View>
                :
                <View style={styles.panel}>
                    <VrButton>
                        <Text style={styles.greeting}>
                            {this.state.seconds}
                        </Text>
                    </VrButton>
                </View>
        );
    }
};

// React 360's version of styled components
const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: 1000,
        height: 600,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ translate: [0, 20, 0] }]
        // backgroundColor: 'red'
    },
    greeting: {
        fontSize: 180,
        color: 'rgb(5, 93, 119)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});