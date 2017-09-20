import React, {Component} from 'react';
import {AppRegistry, ActivityIndicator, ListView, Text, View} from 'react-native';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        // fetch('https://facebook.github.io/react-native/movies.json')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        //         this.setState({
        //             isLoading: false,
        //             dataSource: ds.cloneWithRows(responseJson.movies),
        //         }, function () {
        //             // do something with new state
        //         });
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });

        this.getMoviesFromApi();
    }

    getMoviesFromApi = async () => {
        try {
            let response = await fetch('https://facebook.github.io/react-native/movies.json');
            let responseJson = await response.json();
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
                isLoading: false,
                dataSource: ds.cloneWithRows(responseJson.movies),
            }, function () {
                // do something with new state
            });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={{flex: 1, paddingTop: 20}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => Movies);