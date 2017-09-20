import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    _changeText=(text)=>{
        this.setState({text})
    }
    render() {
        let word = this.state.text.split(' ').map((word) => word && '田').join(' ');
        // {/*onChangeText={(text) => this.setState({text})}*/}//貌似不可以在TextInput里面做注释
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={this._changeText}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {word}
                </Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);