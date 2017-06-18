import React, {Component} from 'react';

class Search extends Component{
    constructor(props){
        super(props);
        this.state= {
        data: 
            [
                {id:0, location:'Bangkok'},
                {id:1, location:'Bali'},
                {id:2, location:'Banglore'},
                {id:3, location:'Delhi'},
                {id:4, location:'Dubai'},
                {id:5, location:'Chandigarh'},
                {id:6, location:'Mumbai'},
            
            ], 
        searchText: '',
        result: []
     }
     this.searching = this.searching.bind(this);
    }
    getResult(){
        //console.log(this.state.result)
        return this.state.result.map(
            (item) =>{
                return (
                    <li>{item.location}</li>
                )
            }
        )
    }
    searching(event) {
        //console.log(this.state.searchText);
        this.setState({searchText: event.target.value});
        this.setState({result: this.state.data.filter(
            (item)=>{
                return item.location.toLowerCase().includes(event.target.value.toLowerCase()) ? true: false;
             }
           )
        }
    )
  }
    render(){
     return (
            <div className="search-box">
                <div className="input-group">
                    <input type="text" value= {this.state.searchText} onChange={this.searching} className="form-control"/>
                    <span className="input-group-addon" id="basic-addon2">Submit</span>
                </div>
                {
                  this.state.searchText!=='' &&
                    <ul className="result-box">
                        {this.getResult()}
                    </ul>
                   
                }
                
            </div>
            )
        
    }
}

export default Search;