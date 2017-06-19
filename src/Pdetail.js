import React, {Component} from 'react';
import {connect} from 'react-redux';

class Pdetail extends Component{
    componentDidMount(){
        console.log(this.props);
    }
    componentDidUpdate(){
        console.log(this.props);
    }
        render(){
            
            if(!this.props.package){
                return (
                    <div>Select user</div>
                )
            }
            else{
                var total = this.props.package.price;
                var totalprice=  total.base+ total.food.breakfast+ total.food.lunch+ total.food.dinner + total.hotel.three;
                console.log(total);
                alert('Price for One Day in a 3 Star hotel with Breakfast, Lunch and Dinner is '+ totalprice)
                 return (
             <div>
               <h2>You have selected : {this.props.package.name}</h2>
               <h3>Price for One Day in a 3 Star hotel with Breakfast, Lunch and Dinner is  
                   {totalprice}</h3>
            </div>
            )
            }
            
        }
}
function mapStateToProps(state){
    return {
        package: state.activePackage
    }
}
export default connect(mapStateToProps)(Pdetail);