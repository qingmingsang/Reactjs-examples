import React from 'react';
import {AppRegistry, Text, TouchableOpacity, View} from 'react-native';

class MyButton extends React.Component {
    setNativeProps = (nativeProps) => {
        this._root.setNativeProps(nativeProps);
    }

    render() {
        return (
            <View ref={component => this._root = component} {...this.props}>
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
