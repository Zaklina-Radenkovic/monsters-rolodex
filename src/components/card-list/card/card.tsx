import React from 'react';
import {Monster} from '../../../App';
import './card.css'

//we need to create type of props
type CardProps = {
    monster: Monster;
}
const Card =({monster:{id, name, email}}: CardProps)=>{
    
    return(
        <div className="card-container" key={id}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}
export default Card;