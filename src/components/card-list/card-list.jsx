//importing Class Component from React
import { Component } from "react";
import Card from "./card/card";
import './card-list.css'

class CardList extends Component{
    render(){
        // console.log("Render card list")
        // console.log(this.props.monsters)
        const {monsters}=this.props;

        return(
            <div className="card-list">
             {monsters.map((monster) => {
                //because we have multiple times monster.id & monster.name, it is good to destructure that into variables
                // const {id, name, email} = monster;
                return(
                //     <div className="card-container" key={id}>
                //     <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                //    <h2>{name}</h2>
                //    <p>{email}</p>
                //    </div>
                <Card key={monster.id} monster={monster}/>
                )})}  
            
            </div>
        )
    }
}

export default CardList;