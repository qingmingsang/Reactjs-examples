import React from 'react';
import ReactDOM from 'react-dom';
import '../base.css';

class ExampleApplication extends React.Component {
    render() {
        let elapsed = Math.round(this.props.elapsed / 100);
        let seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
        let message =
            `React has been successfully running for ${seconds} seconds.`;

        //return React.DOM.p(null, message);//no JSX
        return <p>{message}</p>;
    }
}

// Call React.createFactory instead of directly call ExampleApplication({...}) in React.render
let ExampleApplicationFactory = React.createFactory(ExampleApplication);

let start = new Date().getTime();
setInterval(()=> {
    ReactDOM.render(
        //ExampleApplicationFactory({elapsed: new Date().getTime() - start}),//no JSX
        <ExampleApplication elapsed={new Date().getTime() - start} />,
        document.getElementById('example')
    );
}, 50);