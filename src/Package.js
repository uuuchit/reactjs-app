import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firstAction} from './action';
import {secondAction} from './action'

class Package extends Component{

    componentDidUpdate(){
    console.log(this.props);

    }
    action(){
        this.props.dispatch(firstAction())
    }
    actiontwo(){
        this.props.dispatch(secondAction());
    }
    render(){
        return (
        <div>
            <h2>Test</h2>
            <h2>{this.props.test}{this.props.value}</h2>
            <button onClick={this.action.bind(this)}>Increment</button>
            <button onClick={this.actiontwo.bind(this)}>Decrement</button>
            
        </div>
        )
    }
}

export default connect(state => state)(Package);