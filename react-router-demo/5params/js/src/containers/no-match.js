
'use strict';
import React from 'react';

class NoMatch extends React.Component {
    constructor(props){
        super(props);
        this.style = {
            textAlign:'center',
            height: '100%',
            backgroundColor: '#cfcfcf',
            fontSize: 24,
            paddingTop: 150
        }
    }

    render() {
        return (
            <div style={this.style}>一个酷炫的404页面</div>
        );
    }
}

export default NoMatch;