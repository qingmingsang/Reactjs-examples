import React  from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import myApp from './reducers/index.jsx';
import App from './containers/index.jsx';
//action
//function changeText(){
//    return {
//        type:'CHANGE_TEXT'
//    }
//}
//
//function buttonClick(){
//    return {
//        type:'BUTTON_CLICK'
//    }
//}

//reducer
//const initialState = {
//    text: 'Hello'
//}
//function myApp(state = initialState, action) {
//    switch (action.type) {
//        case 'CHANGE_TEXT':
//            return {
//                text:state.text=='Hello'?'Stark':'Hello'
//            }
//        case 'BUTTON_CLICK':
//            return {
//                text: 'You just click button'
//            }
//        default:
//            return {
//                text:'Hello'
//            };
//    }
//}




//class Hello extends Component{
//    constructor(props) {
//        super(props);
//        //this.handleClick = this.handleClick.bind(this);
//    }
//
//    handleClick=()=>{
//        this.props.actions.changeText();
//    }
//
//    render() {
//        return (
//            <h1 onClick={this.handleClick}> {this.props.text} </h1>
//        );
//    }
//}

//class Change extends Component{
//    constructor(props) {
//        super(props);
//        //this.handleClick = this.handleClick.bind(this);
//    }
//
//    handleClick=()=>{
//        this.props.actions.buttonClick();
//    }
//
//    render() {
//        return (
//            <button onClick={this.handleClick} >change</button>
//        );
//    }
//}

//class App extends Component{
//
//    constructor(props) {
//        super(props);
//    }
//
//    render() {
//        const { actions, text} = this.props;
//        return (
//            <div>
//                <Hello actions={actions} text={text}/>
//                <Change actions={actions}/>
//            </div>
//        );
//    }
//}
//
//function mapStateToProps(state) {
//    return { text: state.text }
//}
//
//function mapDispatchToProps(dispatch){
//    return{
//        actions : bindActionCreators({...Actions},dispatch)
//    }
//}
//
//App = connect(mapStateToProps,mapDispatchToProps)(App)

//store
let store = createStore(myApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('example')
)

