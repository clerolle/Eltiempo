"use client";
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import Detail from '@/modals/detail/Details';

function CarouselComponent({pokemons, setCatched, catched, watched, setWatched}) {
    const [show, setShow] = useState(false);
    const [url, setUrl] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = (url) => {setShow(true); setUrl(url);}

    return (
        <div style={{ display: 'block', width: 700, padding: 30, justifyContent: 'center', alignItems: 'center', background: "grey" }}>
            <h4 className='text-center' style={{color: "white"}}>SELECT YOUR POKEMON</h4>
            <Carousel>
                {pokemons?.map((pokemon, index)=>(
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100"
                        src="/poke.jpeg"
                        height={300}
                        width={100}
                        alt="Pokemon"
                    />
                    <Carousel.Caption>
                        <h3 style={{color: "white"}}>{pokemon.name ? pokemon.name : pokemon.pokemon.name}</h3>
                        <Button size="sm" onClick={()=>handleShow(pokemon.url ? pokemon.url : pokemon.pokemon.url)} variant="dark">
                            <h7>Details</h7>
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                ))}
                <Detail
                    show={show}
                    handleClose={handleClose} 
                    // pokemon={pokemon} 
                    urlPokemon={url}
                    setCatched={setCatched}
                    catched={catched}
                    watched={watched} 
                    setWatched={setWatched}
                />
            </Carousel>
        </div>
    )
}

export default CarouselComponent;