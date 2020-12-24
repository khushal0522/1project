import React, { Component } from 'react';
import {Cardlist} from './Cardlist' 
 
 

class mons extends Component {
    constructor(){
    super()
    
    this.state = { 
        a :[],
        search: ''

 }
    }

    componentDidMount(){
        fetch('http://starlord.hackerearth.com/recipe ')
        .then(Response => Response.json() )
        .then( recipe => this.setState({  a:recipe   })  )
       
    }

   
    
    render() { 
         const{ a,search} = this.state;
         const filtervalue=  a.filter( a=> a.name.toLowerCase().includes(search.toLowerCase() )  )

        return (
           
            <div className="mons">
                 
              <h1 className="heading">Monsters</h1>   
           <input className='search' type='text' placeholder='search' onChange= {(e) => this.setState({ search: e.target.value }) }/> 
           <Cardlist a={filtervalue} />
            
            </div>
 
            
          );
    }
}
 
export default mons;