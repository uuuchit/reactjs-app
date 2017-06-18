import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {list: [0,1,2]}
   // this.delete= this.delete.bind(this);
  }
  combine= (user) =>{
    return user.firstName + ' '+ user.lastName;
  }
  user= {
    firstName: 'Uchit',
    lastName: 'Kumar'
  }
  renderEle(){
    return this.state.list.map(
      (item, key)=> {
        return (
          <div>
            <Clock index={item}/>
            <button onClick= {this.delete.bind(this, item)}>Delete</button>
          </div>
        )
      }
    )
  }
  componentDidMount(){

  }
  delete(item, e){
    console.log("deleting!!", e.target);
      this.setState({list: this.state.list.filter(
        (i)=>{
          return i!== item;
        }
      )
    })
    console.log(this.state.list);
  }
  render() {
    return (
      <div className="App" name={this.user.firstName}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
         {this.combine(this.user)}
        </p>
        {
         this.renderEle()
        }
      </div>
    );
  }
}

export default App;
