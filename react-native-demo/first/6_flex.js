import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

class FlexDimensionsBasics extends Component {
    render() {
        return (
            //组件能够撑满剩余空间的前提是其父容器的尺寸不为零。
            // 如果父容器既没有固定的width和height，也没有设定flex，则父容器的尺寸为零。
            // 其子组件如果使用了flex，也是无法显示的。

            //RN 的flex
            // flexDirection的默认值是column而不是row，而flex也只能指定一个数字值。
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                <View style={{flex: 3, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};

AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);