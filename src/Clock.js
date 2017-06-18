import React, { Component } from 'react';

class Clock extends Component{
    constructor(props) {
    super(props);
    this.state = {time: new Date(), test: 'uchit'};
  }
    componentDidMount(){
        const timeId = setInterval(()=> this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timeId);
    }
    tick() {
         this.setState({time: new Date()});
       }
    checking(){
        return this.state.time.toLocaleTimeString();
    }
    render() {
        return (
            <div>
                <h2>Current Time {this.state.test}</h2>
                <h2>{this.props.index}</h2>
                <h2>{this.checking()}</h2>
            </div>
        )
    }
}

export default Clock;