import React from 'react';
import {AppRegistry, TextInput, Text, TouchableOpacity, View} from 'react-native';

class App extends React.Component {
    clearText = () => {
        this._textInput.setNativeProps({text: ''});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TextInput
                    ref={component => this._textInput = component}
                    style={{height: 50, flex: 1, marginHorizontal: 20, borderWidth: 1, borderColor: '#ccc'}}
                />
                <TouchableOpacity onPress={this.clearText}>
                    <Text>Clear text</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => App);
