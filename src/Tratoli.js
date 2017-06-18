import React, {Component} from 'react';
import Header from './Header';
import Search from './Search';

class Tratoli extends Component{

    render(){
        return (
        <div>
            <Header/>
            
            <section className="search-container">
                <div className="main-text">
                    <h2>Customized Travel</h2>
                    <p>Easiest way to plan your travel</p>
                </div>
                <Search/>
            </section>
            <section className="rest-body">
                <h2>Content will be here!!</h2>
            </section>
        </div>
        )
    }
}

export default Tratoli;