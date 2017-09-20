import React from 'react';
import {AppRegistry, Text, TouchableOpacity, View} from 'react-native';

class MyButton extends React.Component {
    render() {
        return (
            <View>
                <Text>{this.props.label}</Text>
            </View>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <TouchableOpacity>
                <MyButton label="Press me!"/>
            </TouchableOpacity>
        )
    }
}

AppRegistry.registerComponent('AwesomeProject', () => App);
