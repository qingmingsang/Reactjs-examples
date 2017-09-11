import React from 'react';
import ReactDOM from 'react-dom';

class NotesList extends React.Component {
    render() {
        return (
            <ol>
                {
                    React.Children.map(this.props.children, function (child) {
                        console.log(child);
                        return <li>{child}</li>;
                    })
                }
            </ol>
        );
    }
}


ReactDOM.render(
    <NotesList>
        <span>hello</span>
        <span>world</span>
    </NotesList>,
    document.getElementById('example')
);
//1.hello
//2.world
