import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
    handleClick() {
        this.refs.myTextInput.focus();
    }

    render() {
        return (
            <div>
                <input type="text" ref="myTextInput"/>
                <input type="button" value="Focus the text input" onClick={this.handleClick.bind(this)}/>
            </div>
        );
    }

    //render() {
    //    return (
    //        <div>
    //            <input type="text" ref="myTextInput"/>
    //            <input type="button" value="Focus the text input" onClick={() => {this.refs.myTextInput.focus()}}/>
    //        </div>
    //    );
    //}


}


ReactDOM.render(
    <MyComponent />,
    document.getElementById('example')
);
