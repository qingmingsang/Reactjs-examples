import React from 'react';
import ReactDOM from 'react-dom';

class Input extends React.Component {
    //getInitialState: function() {
    //    return {value: 'Hello!'};
    //}
    constructor(props) {
        super(props);
        this.state = {value: 'Hello!'};
    }

    handleChange(event) {
        this.setState({value: event.target.value});//event.target.value获取输入的值
    }

    render() {
        var value = this.state.value;
        return (
            <div>
                <input type="text" value={value} onChange={this.handleChange.bind(this)}/>
                <p>{value}</p>
            </div>
        );
    }

    //render() {
    //    var value = this.state.value;
    //    return (
    //        <div>
    //            <input type="text" value={value} onChange={(event)=>{this.handleChange(event)}}/>
    //            <p>{value}</p>
    //        </div>
    //    );
    //}
}

ReactDOM.render(<Input/>, document.getElementById('example'));
