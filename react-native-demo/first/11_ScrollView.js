import React, {Component} from 'react';
import{AppRegistry, ScrollView, Image, Text, View} from 'react-native'

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
            //貌似不能跨域访问资源？
        return (
            <ScrollView>
                <Text style={{fontSize: 10}}>Scroll me plz</Text>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Text style={{fontSize: 20}}>If you like</Text>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Text style={{fontSize: 30}}>Scrolling down</Text>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Text style={{fontSize: 40}}>What's the best</Text>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Text style={{fontSize: 50}}>Framework around?</Text>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Image source={require('./img/q.jpg')}/>
                <Text style={{fontSize: 60}}>React Native</Text>
            </ScrollView>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => IScrolledDownAndWhatHappenedNextShockedMe);