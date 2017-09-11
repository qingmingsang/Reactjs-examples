import React from 'react';
import ReactDOM from 'react-dom';

let names = ['Alice', 'Emily', 'Kate'];

ReactDOM.render(
    <div>
        {
            names.map(function (name) {
                return <div>Hello, {name}!</div>
            })
        }
    </div>,
    document.getElementById('example')
);
