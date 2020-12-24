import React from "react"
import './index.css'

export const Card = props=> (
 
       <div className="cardd">
           <img className="image" alt="a" src={props.a.image} />
           <h2>{props.a.name}</h2>
          
       </div>  


)


 