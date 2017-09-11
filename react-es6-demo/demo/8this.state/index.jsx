import React from 'react';
import ReactDOM from 'react-dom';

class LikeButton extends React.Component{
    //getInitialState: function() {
    //    return {liked: false};
    //}
    constructor(props) {
        super(props);
        this.state = {liked: false};
    }
    handleClick(event) {
        this.setState({liked: !this.state.liked});
    }
    render() {
        let text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <p onClick={this.handleClick.bind(this)}>
                You {text} this. Click to toggle.
            </p>
        );
    }

    //render() {
    //    let text = this.state.liked ? 'like' : 'haven\'t liked';
    //    return (
    //        <p onClick={(event)=>{this.handleClick(event)}}>
    //            You {text} this. Click to toggle.
    //        </p>
    //    );
    //}
};

ReactDOM.render(
    <LikeButton />,
    document.getElementById('example')
);
