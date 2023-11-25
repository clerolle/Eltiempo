"use client";
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import Detail from '@/modals/detail/Details';

function CarouselComponent({pokemons, setCatched, catched}) {
    const [show, setShow] = useState(false);
    const [url, setUrl] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = (url) => {setShow(true); setUrl(url);}
    return (
        <div style={{ display: 'block', width: 700, padding: 30, justifyContent: 'center', alignItems: 'center', background: "grey" }}>
            <h4 className='text-center' style={{color: "white"}}>SELECT YOUR POKEMON</h4>
            <Carousel>
                {pokemons.map((pokemon, index)=>(
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="/poke.jpeg"
                        height={300}
                        width={100}
                        alt="Pokemon"
                    />
                    <Carousel.Caption>
                        <h3 style={{color: "white"}}>{pokemon.name ? pokemon.name : pokemon.pokemon.name}</h3>
                        <Button onClick={()=>handleShow(pokemon.url ? pokemon.url : pokemon.pokemon.url)} variant="secondary">
                            <p>details</p>
                        </Button>
                    </Carousel.Caption>
                    <Detail
                        key={pokemon.name}
                        show={show}
                        handleClose={handleClose} 
                        pokemon={pokemon} 
                        urlPokemon={url}
                        setCatched={setCatched}
                        catched={catched}
                    />
                </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default CarouselComponent;