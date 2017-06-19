import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './action';
import Pdetail from './Pdetail'

class Package extends Component{

    componentDidUpdate(){
    console.log(this.props);
    //checking orgin master of git .. dont worry

    }
    getDetail(item){
        this.props.dispatch(actions.getDetail(item))
    }
    actiontwo(){
        this.props.dispatch(actions.secondAction());
    }
    renderPackageList(){
        return this.props.packages.map(
            (item)=>{
                return (
                    <div className="col-md-3" onClick={this.getDetail.bind(this,item)}>
                        <h2>{item.name}</h2>
                        <img src={item.imageUrl} className="img-responsive"/>
                        <p>{item.description}</p>
                    </div>
                )
            }
        )
    }
    render(){
        return (
        <div>
            <h2>Test</h2>
            <div className="row list">
                {this.renderPackageList()}
            </div>
            <div className="detail">
                <Pdetail/>
                {/*{this.props.activePackage && 
                <div>
                    <h1>Selected Package</h1>
                    <h2>{this.props.activePackage.name}</h2>
                    <p>Price :{this.getPrice()}</p>
                </div>
                }*/}
            </div>
        </div>
        )
    }
}
function mapStateToProps(state){
    return {
        packages: state.packages
    }
}
export default connect(mapStateToProps)(Package);