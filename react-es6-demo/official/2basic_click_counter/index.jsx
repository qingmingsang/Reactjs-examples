import React from 'react';
import ReactDOM from 'react-dom';
import '../base.css';

class Counter extends React.Component {
    //getInitialState() {
    //    return {count: 0};
    //}
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }
    handleClick() {
        this.setState({
            count: this.state.count + 1,
        });
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>
                Click me! Number of clicks: {this.state.count}
            </button>
        );
    }
}

ReactDOM.render(
    <Counter />,
    document.getElementById('example')
);