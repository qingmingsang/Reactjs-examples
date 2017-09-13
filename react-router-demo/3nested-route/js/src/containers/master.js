
'use strict';
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

class Master extends React.Component {
    constructor(props) {
        super(props);
        this.navLinks = [
            {text: '首页', path:'/home'},
            {text: '监测因素', path: '/factors'}
        ]
    }

    render() {
        return (
            <div style={{height:'100%'}}>
                <Header title="Brand" links={this.navLinks}/>
                <div style={{height:'100%'}}>{this.props.children}</div>
                <Footer text="copyright 2016"/>
            </div>
        );
    }
}
export default Master;