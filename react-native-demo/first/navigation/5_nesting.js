import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button
} from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation';

class ChatScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: `Chat with ${navigation.state.params.name}`,
    });

    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}

class RecentChatsScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>List of recent chats</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Chat', {name: 'tab1'})}
                    title="Chat with Lucy"
                />
            </View>
        )
    }
}

class AllContactsScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>List of all contacts</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Chat', {name: 'tab2'})}
                    title="Chat with Lucy"
                />
            </View>
        )
    }
}

let MainScreenNavigator = TabNavigator({
    Recent: {screen: RecentChatsScreen},
    All: {screen: AllContactsScreen},
});

MainScreenNavigator.navigationOptions = {
    title: 'My Chats',
};

const SimpleApp = StackNavigator({
    Home: {screen: MainScreenNavigator},
    Chat: {screen: ChatScreen},
});

AppRegistry.registerComponent('AwesomeProject', () => SimpleApp);
