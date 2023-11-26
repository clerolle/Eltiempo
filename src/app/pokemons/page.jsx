"use client";
import CarouselComponent from '@/components/CarouselComponent';
import NavBar from '@/components/NavBar';
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '@/context';

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container.js";

const PokemonList = () => {
    const [data, setData] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [ catched, setCatched] = useState([]);
    const [ watched, setWatched] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            setPokemons(data.results);
          });
      }, []);

  return (
    <>
        <NavBar setPokemons={setPokemons}/>
        <Container className="mt-4 mb-4">
        <Row className="gap-5">
            <CarouselComponent pokemons={pokemons} setCatched={setCatched} catched={catched} watched={watched} setWatched={setWatched}/>
            </Row>
        </Container>
    </>
  )
}

export default PokemonList