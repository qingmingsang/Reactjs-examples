import React from 'react';
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import '../base.css';
import './transition.css';

let INTERVAL = 2000;

class AnimateDemo extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            current: 0
        };
    }

    componentDidMount() {
        //this.interval = setInterval(this.tick.bind(this), INTERVAL);
        this.interval = setInterval(()=>{this.tick()}, INTERVAL);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        this.setState({current: this.state.current + 1});
    }

    render() {
        let children = [];
        let pos = 0;
        let colors = ['red', 'gray', 'blue'];
        for (let i = this.state.current; i < this.state.current + colors.length; i++) {
            let style = {
                left: pos * 128,
                background: colors[i % colors.length]
            };
            pos++;
            children.push(<div key={i} className="animateItem" style={style}>{i}</div>);
        }
        return (
            <CSSTransitionGroup
                className="animateExample"
                transitionEnterTimeout={250}
                transitionLeaveTimeout={250}
                transitionName="example">
                {children}
            </CSSTransitionGroup>
        );
    }
}

ReactDOM.render(
    <AnimateDemo />,
    document.getElementById('example')
);