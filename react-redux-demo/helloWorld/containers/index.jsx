import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/index.jsx';
import Hello from '../components/Hello.jsx';
import Change from '../components/Change.jsx';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { actions, text} = this.props;
        return (
            <div>
                <Hello actions={actions} text={text}/>
                <Change actions={actions}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {text: state.text}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...Actions}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

