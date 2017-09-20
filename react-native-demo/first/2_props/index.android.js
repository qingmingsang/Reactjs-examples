import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import Greeting from './Greeting';

class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name='Rexxar'/>
                <Greeting name='Jaina'/>
                <Greeting name='Valeera'/>
            </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);