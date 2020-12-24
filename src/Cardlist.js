import React from 'react'
 import './index.css'
 import {Card} from './Card'

export const Cardlist =  props => {
    return (
        
    <div className="card" >
      {
                 props.a.map( a =>
                  <Card key={a.id} a={a} />   
                 )

               }

     </div>
        

         
     );
}
 
 