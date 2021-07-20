import {Link} from "react-router-dom"
import React, {useState, useEffect} from "react"
import axios from "axios"

export default function SingleBeer(props){

    const [beerState, setBeerState] = useState({})

    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then((res => {
            setBeerState(res.data)
        }))
        .catch(err=>console.log(err))
    }, [])

    return (
        <div>
            <header className="layoutHead"><Link to="/"><img src="assets/house.png" alt="house"/></Link></header>
            <div>
                <img src ={beerState.image_url} alt="beer"/>
                <h1>{beerState.name}</h1>
                <h2>{beerState.tagline}</h2>
                <h3>{beerState.first_brewed}</h3>
                <h4>{beerState.attenuation_level}</h4>
                <p>{beerState.description}</p>
                <p>{beerState.contributed_by}</p>
            </div>
        </div>
    )
}