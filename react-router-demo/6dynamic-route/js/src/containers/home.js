
'use strict';

import React from 'react';

class Home extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    transitionTo(path) {
        this.context.router.push(path);
    }

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <button onClick={()=>{this.transitionTo('/login')}}>
                    点击后，登录失败，跳转到登录组件
                </button>
            </div>
        );
    }
}

export default Home;