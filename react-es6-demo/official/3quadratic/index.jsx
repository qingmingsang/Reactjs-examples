import React from 'react';
import ReactDOM from 'react-dom';
import '../base.css';

class QuadraticCalculator extends React.Component {
    //getInitialState: function() {
    //    return {
    //        a: 1,
    //        b: 3,
    //        c: -4
    //    };
    //},

    constructor(props) {
        super(props);
        this.state = {
            a: 1,
            b: 3,
            c: -4
        };
    }

    /**
     * This function will be re-bound in render multiple times. Each .bind() will
     * create a new function that calls this with the appropriate key as well as
     * the event. The key is the key in the state object that the value should be
     * mapped from.
     */

    handleInputChange(key, event) {
        let partialState = {};
        partialState[key] = parseFloat(event.target.value);
        this.setState(partialState);
    }

    render() {
        let a = this.state.a;
        let b = this.state.b;
        let c = this.state.c;
        let root = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
        let denominator = 2 * a;
        let x1 = (-b + root) / denominator;
        let x2 = (-b - root) / denominator;
        //非最外层要用 {} 包围要注释的部分。
        return (
            <div>
                <strong>
                    <em>ax</em><sup>2</sup> + <em>bx</em> + <em>c</em> = 0
                </strong>
                <h4>Solve for <em>x</em>:</h4>
                <p>
                    <label>
                        {/*a: <input type="number" value={a} onChange={this.handleInputChange.bind(null, 'a')}/>*/}
                        a: <input type="number" value={a} onChange={this.handleInputChange.bind(this, 'a')}/>
                    </label>
                    <br />
                    <label>
                        {/*b: <input type="number" value={b} onChange={this.handleInputChange.bind(null, 'b')}/>*/}
                        b: <input type="number" value={b} onChange={this.handleInputChange.bind(this, 'b')}/>
                    </label>
                    <br />
                    <label>
                        {/*c: <input type="number" value={c} onChange={this.handleInputChange.bind(null, 'c')}/>*/}
                        c: <input type="number" value={c} onChange={this.handleInputChange.bind(this, 'c')}/>
                    </label>
                    <br />
                    x: <strong>{x1}, {x2}</strong>
                </p>
            </div>
        );
    }
}

ReactDOM.render(
    <QuadraticCalculator />,
    document.getElementById('example')
);
