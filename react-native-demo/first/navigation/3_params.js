import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';

class ChatScreen extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = ({navigation}) => ({
        title: `Chat with ${navigation.state.params.user} 1`,
    });

    render() {
        // The screen's current route is passed in to `props.navigation.state`:
        const {params} = this.props.navigation.state;
        return (
            <View>
              <Text>Chat with {params.user} 2</Text>
            </View>
        );
    }
}

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
              <Text>Hello, Chat App!</Text>
              <Button
                  onPress={() => navigate('Chat', {user: 'Lucy'})}
                  title="Chat with Lucy"
              />
            </View>
        );
    }
}

const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreen},
});

AppRegistry.registerComponent('AwesomeProject', () => SimpleApp);
