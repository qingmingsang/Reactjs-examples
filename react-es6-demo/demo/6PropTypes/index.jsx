import React from 'react';
import ReactDOM from 'react-dom';

let data = 123;

class MyTitle extends React.Component {
    //propTypes: {
    //    title: React.PropTypes.string.isRequired,
    //    },

    static propTypes = {
        title: React.PropTypes.array.isRequired
    };//错误类型会有warn

    render() {
        return <h1> {this.props.title} </h1>;
    }
}

//MyTitle.propTypes = {
//    title: React.PropTypes.string.isRequired
//};

ReactDOM.render(
    <MyTitle title={data}/>,
    document.getElementById('example')
);
